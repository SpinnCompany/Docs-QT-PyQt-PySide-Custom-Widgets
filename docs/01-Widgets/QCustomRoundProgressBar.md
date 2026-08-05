# QCustomRoundProgressBar

![QCustomRoundProgressBar](/img/showcase/roundprogressbar.png)

A custom circular progress bar with smooth animation, percentage text display, and partial Qt Designer support.

---

## Features

- Smooth animated transitions using `QVariantAnimation`
- Supports clockwise and counterclockwise directions  
- Customizable colors (progress, base, text)
- Adjustable stroke thickness
- Auto-resizing and scalable drawing
- Partially configurable via Qt Designer

---

## Qt Designer Support

**Note**: Only basic properties are available in Qt Designer. Color properties require programmatic setting.

| Property            | Type     | Description                               | Designer Support |
| ------------------- | -------- | ----------------------------------------- | ---------------- |
| `value`             | `int`    | The current progress value                | Yes Yes           |
| `minimum`           | `int`    | Minimum value (default `0`)               | Yes Yes           |
| `maximum`           | `int`    | Maximum value (default `100`)             | Yes Yes           |
| `textVisible`       | `bool`   | Whether to show percentage text           | Yes Yes           |
| `clockwise`         | `bool`   | Direction of the arc                      | Yes Yes           |
| `animationDuration` | `int`    | Duration of the animation in milliseconds | Yes Yes           |
| `progressColor`     | `QColor` | Foreground arc color                      | No Programmatic  |
| `progressBaseColor` | `QColor` | Background arc color                      | No Programmatic  |
| `textColor`         | `QColor` | Text color                                | No Programmatic  |
| `progressBarWidth`  | `int`    | Stroke thickness                          | No Programmatic  |

---

## Important Implementation Notes

- **Animation works on percentages**: The animation system converts values to percentages (0-100) for smoothing
- **Color properties require code**: Set colors programmatically as they lack Qt Designer integration
- **Progress bar width**: Set via constructor parameter or programmatically

## Corrected Usage Example

```python
from Custom_Widgets.QCustomProgressBars import QCustomRoundProgressBar

# Set progress bar width in constructor
progress = QCustomRoundProgressBar(progressBarWidth=8)

# These work in Qt Designer:
progress.setValue(65)
progress.textVisible = True
progress.clockwise = True

# These require programmatic setting:
progress.progressColor = QColor("#03C3C3")
progress.progressBaseColor = QColor(255, 255, 255, 100)
progress.textColor = QColor("#000000")
progress.progressBarWidth = 10  # Must set programmatically
```

<!-- generated:api-reference -->

## API reference

*Generated from the widget's live metaobject — do not edit by hand.*

### Properties

| Property | Type | Default |
|---|---|---|
| `value` | `int` | — |
| `minimum` | `int` | — |
| `maximum` | `int` | — |
| `textVisible` | `bool` | — |
| `clockwise` | `bool` | — |
| `animationDuration` | `int` | — |
| `progressBarWidth` | `int` | — |
| `progressColor` | `color` | — |
| `progressBaseColor` | `color` | — |
| `textColor` | `color` | — |

### Methods

| Method | Description |
|---|---|
| `animateTo(progress)` | Animates the progress bar to the specified progress percentage. |
| `animationDuration(*args, **kwargs)` | Animation duration. |
| `calculateXR()` | Calculate XR. |
| `clockwise(*args, **kwargs)` | Clockwise. |
| `draw()` | Draw. |
| `drawText()` | Draw text. |
| `initPen(progressBarWidth)` | Init pen. |
| `maximum(*args, **kwargs)` | Maximum. |
| `minimum(*args, **kwargs)` | Minimum. |
| `progressBarWidth(*args, **kwargs)` | Progress bar width. |
| `progressBaseColor(*args, **kwargs)` | Progress base color. |
| `progressColor(*args, **kwargs)` | Progress color. |
| `setValue(val)` | Set the value. |
| `textColor(*args, **kwargs)` | Text color. |
| `textVisible(*args, **kwargs)` | Text visible. |
| `value(*args, **kwargs)` | Value. |

<!-- /generated:api-reference -->
