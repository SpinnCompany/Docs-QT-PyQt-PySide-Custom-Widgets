---
title: QCustomColorPicker
description: A colour selector.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomColorPicker

![QCustomColorPicker](/img/showcase/colorpicker.png)

A colour selector.

A colour swatch + hex field. Clicking the swatch opens a popup of preset
swatches with a "Custom..." button (QColorDialog). Emits colorChanged.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomColorPicker import QCustomColorPicker` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomColorPicker import QCustomColorPicker

widget = QCustomColorPicker()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomColorPicker in dark theme](/img/showcase/colorpicker-dark.png)

## Signals

| Signal |
|---|
| `colorChanged(QColor)` |

## Methods

| Method | Description |
|---|---|
| `color()` | Color. |
| `colorChanged(...)` | Color changed. |
| `colorName()` | Color name. |
| `setColor(color)` | Set the color. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `surface-muted`, `outline`, `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md) · [QCustomForm](QCustomForm.md)
