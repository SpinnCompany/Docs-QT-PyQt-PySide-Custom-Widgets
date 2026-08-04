---
title: QCustomRangeSlider
description: A dual-handle range selector.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomRangeSlider

![QCustomRangeSlider](/img/showcase/rangeslider.png)

A dual-handle range selector.

Two handles select a [lower, upper] range on a track; the selected span is
filled. Drag a handle (or click the track to move the nearest one).
Tokenized colours via qproperty. Emits valuesChanged(lower, upper).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomRangeSlider import QCustomRangeSlider` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomRangeSlider import QCustomRangeSlider

widget = QCustomRangeSlider()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomRangeSlider in dark theme](/img/showcase/rangeslider-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `minimum` | `int` | `0` |
| `maximum` | `int` | `100` |
| `lowerValue` | `int` | `0` |
| `upperValue` | `int` | `100` |
| `trackColor` | `color` | — |
| `fillColor` | `color` | — |
| `handleColor` | `color` | — |
| `handleBorderColor` | `color` | — |

## Signals

| Signal |
|---|
| `valuesChanged(int,int)` |

## Methods

| Method | Description |
|---|---|
| `fillColor(*args, **kwargs)` |  |
| `handleBorderColor(*args, **kwargs)` |  |
| `handleColor(*args, **kwargs)` |  |
| `lowerValue(*args, **kwargs)` |  |
| `maximum(*args, **kwargs)` |  |
| `minimum(*args, **kwargs)` |  |
| `setLowerValue(v)` |  |
| `setRange(minimum, maximum)` |  |
| `setUpperValue(v)` |  |
| `setValues(lower, upper)` |  |
| `trackColor(*args, **kwargs)` |  |
| `upperValue(*args, **kwargs)` |  |
| `values()` |  |
| `valuesChanged(...)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `outline`, `accent`, `surface`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomColorPicker](QCustomColorPicker.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md)
