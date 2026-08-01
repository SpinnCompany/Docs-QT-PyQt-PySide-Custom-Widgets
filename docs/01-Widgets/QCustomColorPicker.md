---
title: QCustomColorPicker
description: A colour selector.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomColorPicker

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

## Signals

| Signal |
|---|
| `colorChanged(QColor)` |

## Methods

| Method | Description |
|---|---|
| `color()` |  |
| `colorChanged(...)` |  |
| `colorName()` |  |
| `setColor(color)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `surface-muted`, `outline`, `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md) · [QCustomForm](QCustomForm.md)
