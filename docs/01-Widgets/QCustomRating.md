---
title: QCustomRating
description: A clickable star rating.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomRating

A clickable star rating.

A row of stars; click to set the value, hover to preview. Read-only mode
for display. Tokenized via a `filled` dynamic property on each star.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomRating import QCustomRating` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomRating import QCustomRating

widget = QCustomRating()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `maximum` | `int` | `5` |
| `value` | `int` | `0` |
| `readOnly` | `bool` | `False` |

## Signals

| Signal |
|---|
| `valueChanged(int)` |

## Methods

| Method | Description |
|---|---|
| `maximum(*args, **kwargs)` |  |
| `readOnly(*args, **kwargs)` |  |
| `setValue(v)` |  |
| `value(*args, **kwargs)` |  |
| `valueChanged(...)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `warning`, `outline`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomColorPicker](QCustomColorPicker.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md)
