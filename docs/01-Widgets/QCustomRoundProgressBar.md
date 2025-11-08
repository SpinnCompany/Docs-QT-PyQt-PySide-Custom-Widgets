# QCustomRoundProgressBar

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
| `value`             | `int`    | The current progress value                | ✅ Yes           |
| `minimum`           | `int`    | Minimum value (default `0`)               | ✅ Yes           |
| `maximum`           | `int`    | Maximum value (default `100`)             | ✅ Yes           |
| `textVisible`       | `bool`   | Whether to show percentage text           | ✅ Yes           |
| `clockwise`         | `bool`   | Direction of the arc                      | ✅ Yes           |
| `animationDuration` | `int`    | Duration of the animation in milliseconds | ✅ Yes           |
| `progressColor`     | `QColor` | Foreground arc color                      | ❌ Programmatic  |
| `progressBaseColor` | `QColor` | Background arc color                      | ❌ Programmatic  |
| `textColor`         | `QColor` | Text color                                | ❌ Programmatic  |
| `progressBarWidth`  | `int`    | Stroke thickness                          | ❌ Programmatic  |

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