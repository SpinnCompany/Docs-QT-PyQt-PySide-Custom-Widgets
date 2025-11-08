# Logging

## Overview

This logging system is designed to capture detailed logs of the application, including custom widget-related logs, warnings, errors, and exceptions. It uses Python's built-in `logging` module, integrated with Qt's `QSettings` for user preferences, and allows both file and console logging.

### Key Features:
- **Rotating File Handler**: Logs are stored in a rotating file to avoid excessive log file sizes.
- **QSettings Integration**: Logs can be conditionally shown based on a setting stored in `QSettings`.
- **Exception Handling**: Unhandled exceptions are captured and logged with detailed traceback.



## Logger Setup

The logger is set up through the `setupLogger()` function. It configures:
- A **RotatingFileHandler** for saving log entries to `custom_widgets.log` in a `logs` directory.
- A **console handler** to print log messages to the console.
- **Log rotation**: The log file will have a maximum size of 5 MB, with up to 3 backup logs.

### Example

```python
logFilePath = os.path.join(os.getcwd(), "logs/custom_widgets.log")
logDirectory = os.path.dirname(logFilePath)
if logDirectory != "" and not os.path.exists(logDirectory):
    os.makedirs(logDirectory)
```

The log file path is defined as `logs/custom_widgets.log`, and the directory is created if it does not exist.



## Logging Functions

### `logInfo(message)`
Logs an informational message.

- **Level**: INFO
- **Example**: 
    ```python
    logInfo("Application started")
    ```

### `logWarning(message)`
Logs a warning message.

- **Level**: WARNING
- **Example**: 
    ```python
    logWarning("This is a warning")
    ```

### `logError(message)`
Logs an error message.

- **Level**: ERROR
- **Example**: 
    ```python
    logError("An error occurred")
    ```

### `logException(exception, message="Exception")`
Logs an exception with detailed traceback.

- **Level**: ERROR
- **Example**: 
    ```python
    try:
        1 / 0  # Deliberate exception
    except Exception as e:
        logException(e, "Division by zero error")
    ```

### `logCritical(message)`
Logs a critical message.

- **Level**: CRITICAL
- **Example**: 
    ```python
    logCritical("Critical failure")
    ```



## Exception Handling

The system provides a global handler for unhandled exceptions by overriding `sys.excepthook`. When an unhandled exception occurs, it:
1. Logs the exception with full traceback.
2. Prints the detailed exception information to the console.

```python
sys.excepthook = handle_unhandled_exception
```

### Example

If an unhandled exception occurs, the output will look like:

```
Unhandled exception occurred:
Traceback (most recent call last):
  File "example.py", line 10, in <module>
    1 / 0
ZeroDivisionError: division by zero
```



## QSettings Integration

### `get_show_custom_widgets_logs()`
This function retrieves the value of the `showCustomWidgetsLogs` setting stored in `QSettings`. If `True`, log messages are printed to the console.

- **Key**: `showCustomWidgetsLogs`
- **Default Value**: `False`

### Example

```python
settings = QSettings("MyCompany", "MyApp")
value = settings.value("showCustomWidgetsLogs", False, type=bool)
```

### `set_show_custom_widgets_logs(value: bool)`
Sets the value of `showCustomWidgetsLogs` in `QSettings`.

- **Usage**:
    ```python
    set_show_custom_widgets_logs(True)
    ```

You can setup your log value settings from your json styles file:

```json
{
  "LiveCompileQss": true,
  "ShowLogs": true,
  "CheckForMissingicons": false,
  "QSettings": [
      {...}
  ]
}
```



## Log File Location

By default, the log file is stored in the `logs/` directory relative to the current working directory:

- **Log file path**: `logs/custom_widgets.log`
- **Backup log files**: Up to 3 backup log files are kept with the rotating file handler, each with a maximum size of 5 MB.



## Customization

- **Log level**: The log level is set to `DEBUG` by default. You can modify it in the `setupLogger()` function if needed.
- **Log format**: The log format is set as `%(asctime)s - %(levelname)s - %(message)s`. You can customize the format as needed.



## Example of Full Logging Workflow

1. **Setup Logger**: Initialize the logger at the beginning of your application.
    ```python
    setupLogger()
    ```

2. **Log Messages**: Use the logging functions throughout your application.
    ```python
    logInfo("Application started")
    logWarning("This is a warning")
    logError("An error occurred")
    ```

3. **Handle Unhandled Exceptions**: Configure the global exception handler to log unhandled exceptions.
    ```python
    sys.excepthook = handle_unhandled_exception
    ```

4. **Configure Console Output**: Use `set_show_custom_widgets_logs(True)` to display logs in the console.



This logging system provides a comprehensive, configurable, and scalable approach for tracking application activity, debugging issues, and handling exceptions in a clean and organized manner.


