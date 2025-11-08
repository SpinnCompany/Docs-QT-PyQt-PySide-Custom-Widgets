# QCustomArcLoader

> **Copyright 2021**  
> by Parham Oyan and Oleg Frolov  
> **Edits and improvements:** Khamisi Kibet  
> **QT GUI by:** SPINN TV (YouTube)  
> **License:** GPL 3.0

---

## Overview

`QCustomArcLoader` is a custom animated loader widget that displays a dynamic, spinning arc animation. Built on top of `QFrame`, it leverages the helper class `ArcLoader` to animate arc parameters (rotation, start angle, and span angle) using Qt's animation framework. This loader is ideal for indicating processing or loading states in Qt applications.

---

![QCustomArcLoader GIF](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/raw/main/images/custom-arc-loader.gif)


## Key Features

- **Customizable Appearance:**  
  Configure the loader’s color and pen width.

- **Smooth, Coordinated Animations:**  
  Uses sequential and parallel animations (via `QVariantAnimation`, `QSequentialAnimationGroup`, and `QParallelAnimationGroup`) to animate rotation, span, and start angles.

- **Dynamic Drawing:**  
  Overrides the `paintEvent` to render arcs with anti-aliasing for smooth visuals.

- **Reusable Components:**  
  The `ArcLoader` class encapsulates the animation logic, making it easy to adjust or extend.

---

## Classes

### ArcLoader

A helper class that manages the arc’s animation parameters.

#### Constructor

```python
ArcLoader(
    parent=None,
    spacer=0,
    startAngle=270,
    spanAngle=1/16,
    direction=True,
    duration=4000
)
```

- **Parameters:**
  - **`parent`**: The parent widget (typically a `QCustomArcLoader` instance).
  - **`spacer`**: Initial offset for rotation.
  - **`startAngle`**: Starting angle (in degrees) for the arc (default is 270°).
  - **`spanAngle`**: The angular span of the arc (default is 1/16 of a full circle).
  - **`direction`**: A boolean to control the animation sequence order.
  - **`duration`**: Duration (in milliseconds) for the animations.

#### Methods

- **`getRotationAnimation()`**  
  Returns a `QVariantAnimation` that rotates the arc by updating the `spacer` value from its current value to an additional two full rotations.  
  _Animation updates are applied via `updateSpacer`._

- **`getSpanAngleAnimation()`**  
  Returns a `QVariantAnimation` that animates the `spanAngle` from its default value to a value increased by 360°.  
  _When finished, it calls `animationFinished` and updates via `updateSpanAngle`._

- **`getStartAngleAnimation()`**  
  Returns a `QVariantAnimation` that animates the `startAngle` from 270° to 630°.  
  _Upon finishing, `startAnimationFinished` resets angles and toggles the animation direction; updates are applied via `updateStartAngle`._

- **`startAnimations()`**  
  Combines the above animations into a sequential group (ordering depends on the current `direction`) and a parallel group that also runs the rotation animation. The animation group loops 10 times before stopping.

- **Update Methods:**  
  - `updateStartAngle(newValue)`: Updates the start angle and repaints the parent.
  - `updateSpacer(newValue)`: Updates the spacer value (rotation offset) and repaints.
  - `updateSpanAngle(newValue)`: Updates the span angle and repaints.

---

### QCustomArcLoader

A custom loader widget that draws animated arcs using the parameters managed by an `ArcLoader` instance.

#### Constructor

```python
QCustomArcLoader(
    parent=None,
    color=QColor("#ffffff"),
    penWidth=20
)
```

- **Parameters:**
  - **`parent`**: The parent widget.
  - **`color`**: Color of the arc(s) (default is white).
  - **`penWidth`**: The width of the drawing pen.

#### Initialization

- Sets the frame shape to `NoFrame` and fixes the widget size to 160×160 pixels.
- Initializes the drawing pen via `initPen()`.
- Instantiates an `ArcLoader` with preset parameters and starts its animations.

#### Methods

- **`calculateXR(level)`**  
  Calculates the x-offset and remaining width/height (`r`) for drawing arcs based on a given `level` (used for inner and outer arcs).

- **`draw()`**  
  Draws two arcs:
  - **Primary Arc:**  
    Uses the current `ArcLoader` parameters to compute the span angle and draws the arc with a negative angle to achieve a clockwise effect.
  - **Secondary Arc:**  
    Draws a complementary arc (the remaining portion of the circle) with a thicker offset.

- **`initPen(penWidth)`**  
  Configures a `QPen` with the specified color, width, and a rounded cap style.

- **`paintEvent(e)`**  
  Overrides the widget’s paint event to:
  - Set up a `QPainter` with anti-aliasing.
  - Set the pen.
  - Call `draw()` to render the arcs.
  - End the painter.

---

## Usage Example

```python
from qtpy.QtWidgets import QApplication
from qtpy.QtGui import QColor
from Custom_Widgets.LoadingIndicators import QCustomArcLoader

if __name__ == "__main__":
    app = QApplication([])
    
    # Create an instance of the arc loader with custom parameters
    arcLoader = QCustomArcLoader(
        color=QColor("#00AAFF"),  # Custom arc color
        penWidth=15               # Custom pen width
    )
    
    arcLoader.show()
    app.exec_()
```

---

## Notes

- **Animation Loop:**  
  The animation is configured to loop 10 times. Modify the loop count in `startAnimations()` if you require continuous or different looping behavior.

- **Customization:**  
  Adjust parameters such as `color`, `penWidth`, and `duration` to match your application's style.

- **Integration:**  
  This widget is part of the **Custom_Widgets.LoadingIndicators** module and can be integrated into any Qt application using `qtpy` (compatible with PyQt and PySide).

---