# QPropertyAnimation

## Overview

This provides utility functions for working with Qt animations, specifically for handling easing curves and direction properties. These utilities are commonly used when creating smooth animations in Qt applications.

## Easing Curve Utility

### `returnAnimationEasingCurve(easingCurveName)`

Converts a string name of an easing curve to the corresponding `QEasingCurve` type.

**Parameters:**
- `easingCurveName` (str): Name of the easing curve (case-sensitive)

**Returns:**
- Corresponding `QEasingCurve.Type` value

**Supported Easing Curves:**
```text
Linear
OutQuad, InQuad, InOutQuad, OutInQuad
InCubic, OutCubic, InOutCubic, OutInCubic
InQuart, OutQuart, InOutQuart, OutInQuart
InQuint, OutQuint, InOutQuint
InSine, OutSine, InOutSine, OutInSine
InExpo, OutExpo, InOutExpo, OutInExpo
InCirc, OutCirc, InOutCirc, OutInCirc
InElastic, OutElastic, InOutElastic, OutInElastic
InBack, OutBack, InOutBack, OutInBack
InBounce, OutBounce, InOutBounce, OutInBounce
```

**Example:**
```python
curve = returnAnimationEasingCurve("OutBack")
animation.setEasingCurve(curve)
```

**Error Handling:**
- Raises `Exception` if an unknown easing curve name is provided
- Raises `Exception` if empty string is provided

## Direction Utility

### `returnQtDirection(direction)`

Converts a string direction name to the corresponding Qt direction flag.

**Parameters:**
- `direction` (str): Either "horizontal" or "vertical" (case-sensitive)

**Returns:**
- Corresponding `Qt.Orientation` value (`Qt.Horizontal` or `Qt.Vertical`)

**Example:**
```python
direction = returnQtDirection("vertical")
slider.setOrientation(direction)
```

**Error Handling:**
- Raises `Exception` if an unknown direction name is provided
- Raises `Exception` if empty string is provided

## Usage Notes

1. **Easing Curves**:
   - Use these to create smooth animation effects
   - Different curves produce different acceleration/deceleration effects
   - Common choices:
     - `OutQuad`/`OutCubic`: Smooth deceleration
     - `InOutBack`: Slight overshoot effect
     - `OutBounce`: Playful bounce effect

2. **Directions**:
   - Used for widgets like sliders, layouts, and progress bars
   - Match the direction string exactly ("horizontal" or "vertical")

3. **Error Handling**:
   - Always wrap calls in try/except blocks when processing user input
   - Provide user feedback when invalid values are entered

## Example Workflow

```python
from qtpy.QtCore import QPropertyAnimation

# Create animation with easing curve
animation = QPropertyAnimation(widget, b"geometry")
animation.setEasingCurve(returnAnimationEasingCurve("OutBack"))
animation.setDuration(1000)

# Set up a vertical slider
slider = QSlider()
slider.setOrientation(returnQtDirection("vertical"))
```

