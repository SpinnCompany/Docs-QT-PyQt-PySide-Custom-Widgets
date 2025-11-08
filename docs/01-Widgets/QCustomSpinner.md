# QCustomSpinner

> **PyQt5 Custom Widgets**  
> **License:** GPL 3.0 - Kadir Aksoy  
> **Repository:** [PyQt5-Custom-Widgets](https://github.com/kadir014/pyqt5-custom-widgets)

---

## Overview

`QCustomSpinner` is a custom spinner widget designed for PyQt applications. It provides a simple, animated loading indicator that rotates an arc around a circle. The widget supports two animation styles ("Smooth" and "Bounce") and can be customized in terms of line width, color, direction, and border radius.

---

![Custom Embeded Window GIF](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/raw/main/images/custom-spinner.gif)


## Features

- **Customizable Appearance:**  
  Adjust the line width, color, and border radius to match your application’s style.
  
- **Direction Control:**  
  Choose between "Clockwise" and "Counterclockwise" rotation.

- **Animation Styles:**  
  Select between "Smooth" and "Bounce" animation types for varied visual effects.
  
- **Lightweight & Responsive:**  
  Uses a simple timer-based mechanism (based on time differences) to drive the animation.

---

## Constructor

```python
QCustomSpinner(lineWidth=2, lineColor=None, direction="Clockwise", borderRadius=3, animationType="Bounce")
```

- **`lineWidth`** (int, default=2):  
  The thickness of the spinner's line.
  
- **`lineColor`** (QColor or None, default=None):  
  The color of the spinner’s line. If not specified, it defaults to the widget's highlight color.
  
- **`direction`** (str, default="Clockwise"):  
  Sets the rotation direction. Accepts "Clockwise" or "Counterclockwise".
  
- **`borderRadius`** (int, default=3):  
  Defines the border radius for the spinner (currently influences the spinner's appearance).
  
- **`animationType`** (str, default="Bounce"):  
  Chooses the animation style. Options include "Smooth" for a consistent arc or "Bounce" for a dynamic, bouncing effect.

---

## Methods

### `__repr__()`

Returns a string representation of the spinner:

```python
def __repr__(self):
    return f"<QCustom.Spinner()>"
```

### `paintEvent(event)`

Handles the custom painting of the spinner:

1. **Setup:**  
   Initializes a `QPainter` with anti-aliasing enabled.

2. **Pen Configuration:**  
   Creates a `QPen` with the specified line color and width, and sets its cap style to round.

3. **Arc Drawing:**  
   - For **Counterclockwise** direction, it sets the start angle and computes the end angle accordingly.
   - For **Clockwise** direction, it adjusts the angles in the opposite direction.
   - Depending on `animationType`:
     - **Smooth:** Draws a fixed 90° arc.
     - **Bounce:** Calculates a dynamic arc span based on sine functions for a bouncing effect.
   
4. **Animation Update:**  
   Updates the spinner’s angle based on elapsed time and schedules a repaint if the spinner is active (`self.play` is `True`).

---

## Animation Logic

- **Timing:**  
  The spinner uses the difference between the current time and the last paint call (`self.last_call`) to compute the elapsed time (`ep`) in milliseconds.
  
- **Angle Increment:**  
  The spinner’s angle is updated by multiplying the elapsed time by a speed factor (`self.speed`). It ensures the angle remains within the bounds of 0 and 360° (scaled by 16 for Qt's angle unit).

- **Continuous Update:**  
  If `self.play` is `True`, the widget continuously triggers an update, making the spinner animate indefinitely.

---

## Usage Example

```python
from qtpy.QtWidgets import QApplication
from qtpy.QtGui import QColor
from Custom_Widgets.LoadingIndicators import QCustomSpinner  

if __name__ == "__main__":
    app = QApplication([])

    spinner = QCustomSpinner(
        lineWidth=3,
        lineColor=QColor("#3498db"),  # Example: blue color
        direction="Clockwise",
        borderRadius=5,
        animationType="Bounce"        # Options: "Smooth" or "Bounce"
    )
    spinner.resize(100, 100)
    spinner.show()

    app.exec_()
```

---

## Notes

- **Default Color:**  
  If no `lineColor` is provided, the spinner automatically uses the highlight color from the widget's palette.

- **Animation Types:**  
  Experiment with both "Smooth" and "Bounce" to see which best suits your UI.

- **Performance:**  
  The widget leverages time-based updates for smooth animation. Ensure that your application's event loop remains responsive to keep the animation fluid.

---