---
title: QCustomGradientPicker
description: An editable multi-stop gradient control.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomGradientPicker

An editable multi-stop gradient control.

A gradient preview with draggable colour stops beneath it. Click the bar to
add a stop, drag a handle to move it, double-click a handle to recolour it,
Delete to remove it. Qt ships a colour dialog but nothing that edits a
gradient, so anything needing one has had to hand-roll it.

Stops are held sorted by position and always number at least two - a
"gradient" with one stop is a fill, and allowing it would make every
consumer handle a degenerate case that has no reason to exist.

Alpha is preserved throughout and the preview is drawn over a checkerboard,
so a translucent stop is visible as translucent rather than silently
composited against whatever is behind the widget.

Emits gradientChanged(str) carrying the CSS-ish stop list, and
stopSelected(int).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomGradientPicker import QCustomGradientPicker` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomGradientPicker import QCustomGradientPicker

widget = QCustomGradientPicker()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `stopsCsv` | `string` | `0:#2563eb,1:#16a34a` |
| `gradientType` | `enum: `linear` / `radial`` | `linear` |
| `angle` | `int` | `0` |
| `barHeight` | `int` | `28` |
| `handleRadius` | `int` | `7` |
| `readOnly` | `bool` | `False` |
| `state` | `enum: `default` / `error`` | `default` |
| `borderColor` | `color` | — |
| `borderActiveColor` | `color` | — |
| `borderErrorColor` | `color` | — |
| `handleColor` | `color` | — |
| `handleBorderColor` | `color` | — |

## Signals

| Signal |
|---|
| `gradientChanged(QString)` |
| `stopSelected(int)` |

## Methods

| Method | Description |
|---|---|
| `addStop(position, colour=None)` | Insert a stop. Colour defaults to the gradient's colour there. |
| `angle(*args, **kwargs)` |  |
| `barHeight(*args, **kwargs)` |  |
| `borderActiveColor(*args, **kwargs)` |  |
| `borderColor(*args, **kwargs)` |  |
| `borderErrorColor(*args, **kwargs)` |  |
| `colorAt(position)` | Interpolated colour at a position, matching what the bar paints. |
| `count()` |  |
| `editStopColor(index=None)` | Open a colour dialog for a stop. Returns True if it changed. |
| `gradient(rect=None)` | A QGradient over `rect` (defaults to the preview bar). |
| `gradientChanged(...)` |  |
| `gradientType(*args, **kwargs)` |  |
| `handleAt(point)` | Index of the stop handle under a point, or -1. Topmost wins. |
| `handleBorderColor(*args, **kwargs)` |  |
| `handleColor(*args, **kwargs)` |  |
| `handleRadius(*args, **kwargs)` |  |
| `readOnly(*args, **kwargs)` |  |
| `removeStop(index)` | Remove a stop. Refuses to go below MIN_STOPS. |
| `selectedIndex()` |  |
| `setSelectedIndex(index)` |  |
| `setStopColor(index, colour)` |  |
| `setStopPosition(index, position)` |  |
| `setStops(stops)` | Replace every stop. Fewer than two valid stops is rejected. |
| `state(*args, **kwargs)` |  |
| `stopColor(index)` |  |
| `stopPosition(index)` |  |
| `stopSelected(...)` |  |
| `stops()` | [(position, QColor), ...] sorted by position. |
| `stopsCsv(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `outline`, `focus-ring`, `destructive`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomGradientPicker/main.py`.

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomColorPicker](QCustomColorPicker.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md)
