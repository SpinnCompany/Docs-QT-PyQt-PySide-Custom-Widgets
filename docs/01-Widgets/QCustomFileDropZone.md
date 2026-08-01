---
title: QCustomFileDropZone
description: Drag-and-drop file input with click-to-browse.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomFileDropZone

Drag-and-drop file input with click-to-browse.

A dashed zone that accepts dropped files (filtered by extension) or opens
a file dialog on click. Highlights while dragging (a `dragActive` property).
Tokenized. Emits filesDropped / filesChanged.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomFileDropZone import QCustomFileDropZone` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomFileDropZone import QCustomFileDropZone

widget = QCustomFileDropZone()
```

## Signals

| Signal |
|---|
| `filesChanged(QVariantList)` |
| `filesDropped(QVariantList)` |

## Methods

| Method | Description |
|---|---|
| `clear()` |  |
| `files()` |  |
| `filesChanged(...)` |  |
| `filesDropped(...)` |  |
| `setAcceptedExtensions(extensions)` |  |
| `setMultiple(multiple)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `surface-muted`, `on-surface`, `outline`, `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomColorPicker](QCustomColorPicker.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomForm](QCustomForm.md)
