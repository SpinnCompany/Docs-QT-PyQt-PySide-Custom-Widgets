# WidgetsWorker

`WidgetsWorker` provides a robust threading solution for PyQt/PySide applications, allowing you to run background tasks without freezing the user interface. This module implements a worker pattern using `QRunnable` to handle concurrent operations efficiently within the Custom Widgets ecosystem.

---

## Overview

The `WidgetsWorker` module enables seamless background task execution in your Qt applications:

- **Thread Management**: Easy-to-use worker threads for background operations
- **Signal-Based Communication**: Safe communication between worker threads and the main UI thread
- **Progress Tracking**: Built-in progress reporting for long-running tasks
- **Error Handling**: Comprehensive exception handling with proper error propagation
- **Thread Safety**: Proper cleanup and interruption support

---

## Core Components

### WorkerSignals Class

Defines the signals available from a running worker thread:

```python
class WorkerSignals(QObject):
    finished = Signal()          # Emitted when thread completes
    error = Signal(tuple)        # Emitted on error: (exctype, value, traceback)
    result = Signal(object)      # Emitted with processing result
    progress = Signal(int)       # Emitted with progress percentage
```

### Worker Class

The main worker thread class that inherits from `QRunnable`:

```python
class Worker(QRunnable):
    def __init__(self, fn, *args, **kwargs):
        super(Worker, self).__init__()
        self.fn = fn
        self.args = args
        self.kwargs = kwargs
        self.signals = WorkerSignals()
        self.kwargs['progress_callback'] = self.signals.progress
        self.is_interrupted = False
    
    def stop(self):
        self.is_interrupted = True
```

### WorkerResponse Class

Provides utility functions for handling worker responses with basic print functionality.

---

## Basic Usage

### Simple Background Task

```python
from Custom_Widgets.WidgetsWorker import Worker
from qtpy.QtCore import QThreadPool

def long_running_task(progress_callback=None):
    """Example background task"""
    for i in range(100):
        if progress_callback:
            progress_callback.emit(i + 1)
        QThread.msleep(50)  # Simulate work
    return "Task completed"

class MyWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.threadpool = QThreadPool()
        
    def start_task(self):
        worker = Worker(long_running_task)
        worker.signals.result.connect(self.on_task_result)
        worker.signals.progress.connect(self.on_task_progress)
        worker.signals.finished.connect(self.on_task_finished)
        self.threadpool.start(worker)
    
    def on_task_result(self, result):
        print(f"Result: {result}")
    
    def on_task_progress(self, progress):
        print(f"Progress: {progress}%")
    
    def on_task_finished(self):
        print("Task finished")
```

### Worker with Arguments

```python
def process_data(data_list, multiplier, progress_callback=None):
    results = []
    total = len(data_list)
    
    for i, item in enumerate(data_list):
        if progress_callback:
            progress = int((i + 1) / total * 100)
            progress_callback.emit(progress)
        
        results.append(item * multiplier)
        QThread.msleep(10)
    
    return results

def start_processing(self):
    data = [1, 2, 3, 4, 5]
    worker = Worker(process_data, data, 10)
    worker.signals.result.connect(self.on_data_processed)
    self.threadpool.start(worker)
```

### Error Handling

```python
def potentially_failing_task(progress_callback):
    # Some operation that might fail
    if some_condition:
        raise ValueError("Something went wrong!")
    return "Success"

def start_risky_task(self):
    worker = Worker(potentially_failing_task)
    worker.signals.error.connect(self.handle_error)
    worker.signals.result.connect(self.handle_success)
    self.threadpool.start(worker)

def handle_error(self, error):
    exctype, value, traceback_str = error
    print(f"Error: {exctype.__name__}: {value}")

def handle_success(self, result):
    print(f"Success: {result}")
```

---

## Integration with Custom Widgets

### With Progress Indicators

```python
from Custom_Widgets import FormProgressIndicator

class MyApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.progress_indicator = FormProgressIndicator()
        
    def start_task_with_progress(self):
        worker = Worker(self.long_operation)
        worker.signals.progress.connect(self.progress_indicator.setValue)
        worker.signals.finished.connect(self.progress_indicator.hide)
        self.threadpool.start(worker)
        self.progress_indicator.show()
```

### With Theme Engine

```python
from Custom_Widgets.QCustomTheme import QCustomTheme

class ThemedApp(QMainWindow):
    def __init__(self):
        super().__init__()
        self.theme_engine = QCustomTheme()
        
    def generate_theme_icons(self):
        worker = Worker(self.theme_engine.generateNewIcons)
        worker.signals.progress.connect(self.update_icon_progress)
        worker.signals.finished.connect(self.theme_engine.applyIcons)
        self.threadpool.start(worker)
```

---

## Advanced Usage

### Multiple Coordinated Workers

```python
def start_parallel_tasks(self):
    self.completed_tasks = 0
    self.total_tasks = 3
    
    for i in range(self.total_tasks):
        worker = Worker(self.individual_task, i)
        worker.signals.finished.connect(self.on_single_task_done)
        self.threadpool.start(worker)

def on_single_task_done(self):
    self.completed_tasks += 1
    if self.completed_tasks == self.total_tasks:
        print("All tasks completed!")
```

### Interruptible Worker

```python
def start_interruptible_task(self):
    self.current_worker = Worker(self.long_operation)
    self.current_worker.signals.finished.connect(self.on_worker_finished)
    self.threadpool.start(self.current_worker)

def stop_current_task(self):
    if hasattr(self, 'current_worker'):
        self.current_worker.stop()

def long_operation(self, progress_callback):
    for i in range(1000):
        if self.current_worker.is_interrupted:
            return "Operation interrupted"
        
        if progress_callback:
            progress_callback.emit(i // 10)
        
        QThread.msleep(100)
    
    return "Operation completed"
```

---

## Best Practices

### 1. Always Handle Errors

```python
worker = Worker(self.background_task)
worker.signals.error.connect(self.handle_worker_error)
worker.signals.finished.connect(self.cleanup_resources)
```

### 2. Use Progress Callbacks for Long Tasks

```python
def background_task(self, progress_callback):
    total_steps = 100
    for step in range(total_steps):
        if progress_callback:
            progress = int((step + 1) / total_steps * 100)
            progress_callback.emit(progress)
        # Perform work...
```

### 3. Proper Resource Cleanup

```python
def cleanup_resources(self):
    # Clean up any resources used by workers
    if hasattr(self, 'current_worker'):
        self.current_worker.stop()
```

---

## Key Features in Custom Widgets Context

- **Seamless Integration**: Works perfectly with other Custom Widgets components
- **Non-blocking UI**: Keeps your application responsive during operations
- **Automatic Cleanup**: Workers clean up automatically when finished
- **Flexible Communication**: Multiple signal types for different communication needs
- **Progress Tracking**: Essential for user feedback during long operations

---

## Example: File Processing with Progress

```python
def process_files(self, file_list):
    worker = Worker(self.process_file_batch, file_list)
    worker.signals.progress.connect(self.ui.progressBar.setValue)
    worker.signals.result.connect(self.on_files_processed)
    worker.signals.error.connect(self.on_processing_error)
    self.threadpool.start(worker)

def process_file_batch(self, file_list, progress_callback):
    results = []
    total_files = len(file_list)
    
    for i, file_path in enumerate(file_list):
        # Process each file
        result = self.process_single_file(file_path)
        results.append(result)
        
        # Update progress
        if progress_callback:
            progress = int((i + 1) / total_files * 100)
            progress_callback.emit(progress)
    
    return results
```

The `WidgetsWorker` module is an essential tool for creating responsive Qt applications within the Custom Widgets framework, providing a simple yet powerful way to handle background operations while maintaining smooth user interaction.