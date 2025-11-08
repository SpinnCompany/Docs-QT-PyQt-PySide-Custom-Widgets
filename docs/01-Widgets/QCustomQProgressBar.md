# QCustomQProgressBar

> **Original Code:** [PyQt-Fluent-Widgets](https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/PySide6)  
> **Edits and improvements by:** Khamisi Kibet  
> **QT GUI by:** SPINN TV (YouTube)

---

![QCustomArcLoader GIF](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/raw/main/images/custom-qprogressbar.gif)

# QCustomQProgressBar

`QCustomQProgressBar` is a custom indeterminate progress bar widget that provides smooth, animated progress indication with theme-aware coloring. It extends Qt's standard `QProgressBar` with fluent animation effects and custom styling capabilities.

---

## Overview

- **Indeterminate Animation:**  
  Features smooth, continuous animation with two overlapping bars that create a fluid progress indication effect.

- **Theme Integration:**  
  Automatically adapts to light/dark themes through integration with `QCustomTheme`.

- **Custom Colors:**  
  Supports custom bar colors for both light and dark theme modes.

- **State Management:**  
  Provides methods to start, stop, pause, resume progress animation, and error state indication.

- **Smooth Animations:**  
  Uses `QPropertyAnimation` with custom easing curves for natural-looking motion.

---

## Constructor

```python
QCustomQProgressBar(parent=None, start=True)
```

- **parent:**  
  The parent widget (defaults to `None`).

- **start:**  
  If `True`, the progress animation begins automatically upon initialization.

---

## Key Properties

### `shortPos` (float)
- **Purpose:**  
  Controls the position of the shorter progress bar segment.
- **Type:**  
  Animated property used internally for the progress animation.

### `longPos` (float)  
- **Purpose:**  
  Controls the position of the longer progress bar segment.
- **Type:**  
  Animated property used internally for the progress animation.

---

## Methods

### `setCustomBarColor(light, dark)`
- **Description:**  
  Sets custom colors for the progress bar in light and dark theme modes.

- **Parameters:**  
  - `light`: Bar color for light theme mode (str, Qt.GlobalColor, or QColor)
  - `dark`: Bar color for dark theme mode (str, Qt.GlobalColor, or QColor)

- **Example:**  
  ```python
  progress_bar.setCustomBarColor("#0078d4", "#0086f0")
  ```

### `start()`
- **Description:**  
  Starts the progress animation from the beginning.

### `stop()`
- **Description:**  
  Stops the progress animation and resets to initial state.

### `isStarted() -> bool`
- **Description:**  
  Checks if the progress animation is currently running.

- **Returns:**  
  `True` if animation is running, `False` otherwise.

### `pause()`
- **Description:**  
  Pauses the progress animation at its current position.

### `resume()`
- **Description:**  
  Resumes a paused progress animation.

### `setPaused(isPaused: bool)`
- **Description:**  
  Sets the pause state of the progress animation.

- **Parameters:**  
  - `isPaused`: `True` to pause, `False` to resume.

### `isPaused() -> bool`
- **Description:**  
  Checks if the progress animation is currently paused.

- **Returns:**  
  `True` if animation is paused, `False` otherwise.

### `error()`
- **Description:**  
  Stops animation and displays error state coloring (red tones).

### `setError(isError: bool)`
- **Description:**  
  Sets the error state of the progress bar.

- **Parameters:**  
  - `isError`: `True` to show error state, `False` to return to normal operation.

### `isError() -> bool`
- **Description:**  
  Checks if the progress bar is in error state.

- **Returns:**  
  `True` if in error state, `False` otherwise.

### `barColor() -> QColor`
- **Description:**  
  Returns the appropriate bar color based on current state and theme.

- **Returns:**  
  - Error state: Red colors (theme-aware)
  - Paused state: Yellow/amber colors (theme-aware)  
  - Normal state: Theme's highlight color or custom colors

---

## Usage Example

```python
from qtpy.QtWidgets import QApplication, QVBoxLayout, QWidget
from Custom_Widgets.QCustomQProgressBar import QCustomQProgressBar

app = QApplication([])

# Create main window
window = QWidget()
layout = QVBoxLayout(window)

# Create progress bar with auto-start
progress_bar = QCustomQProgressBar(start=True)

# Optional: Set custom colors
progress_bar.setCustomBarColor("#0078d4", "#0086f0")

layout.addWidget(progress_bar)
window.show()

app.exec_()
```

### Advanced Usage with State Control

```python
# Start and stop animation
progress_bar.start()
progress_bar.stop()

# Pause and resume
progress_bar.pause()
progress_bar.resume()

# Error state
progress_bar.error()
progress_bar.setError(False)  # Return to normal

# Check states
if progress_bar.isStarted():
    print("Progress bar is running")
if progress_bar.isPaused():
    print("Progress bar is paused")
if progress_bar.isError():
    print("Progress bar shows error")
```

---

## Animation Details

- **Dual Bar System:**  
  Uses two animated bars (short and long) that move independently to create a flowing effect.

- **Timing:**  
  - Short bar: 833ms duration, continuous loop
  - Long bar: 1167ms duration with 785ms initial delay

- **Easing Curves:**  
  Long bar uses `QEasingCurve.OutQuad` for natural deceleration.

---

## Theme Integration

The progress bar automatically detects the application's theme state through `QCustomTheme`:

- **Light Theme:** Uses lighter color variants
- **Dark Theme:** Uses darker color variants
- **Custom Colors:** Respects user-defined light/dark color pairs

---

## Visual States

1. **Normal:**  
   Smooth blue animation (or custom colors)

2. **Paused:**  
   Yellow/amber coloring to indicate temporary stoppage

3. **Error:**  
   Red coloring to indicate failure or problem state

---

## Additional Notes

- **Fixed Height:**  
  The progress bar has a fixed height of 4 pixels for a sleek appearance.

- **Smooth Rendering:**  
  Uses `QPainter.Antialiasing` for smooth edges and rounded corners.

- **Non-blocking:**  
  Animation runs independently without blocking the main thread.

- **Design Consistency:**  
  Based on fluent design principles with smooth, continuous motion.