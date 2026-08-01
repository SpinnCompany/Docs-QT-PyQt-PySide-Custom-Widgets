---
title: QCustomButtonGroup
description: An accessible button group (radio-style or checkbox-style selection).
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomButtonGroup

An accessible button group (radio-style or checkbox-style selection).

Wraps QButtonGroup with a tokenized, variant-aware presentation:
- variant: "primary" | "secondary" | "outline" (default)
- sizeVariant: "sm" | "md" (default) | "lg"
- exclusive: True (radio) or False (checkbox)
- orientation: "horizontal" | "vertical" (default)

Each button carries the same variant/size as the group, with a 
"selected" state that's driven by the button group's selection.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomButtonGroup import QCustomButtonGroup` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomButtonGroup import QCustomButtonGroup

widget = QCustomButtonGroup()
widget.setButtons([("Day", 0), ("Week", 1), ("Month", 2)])
widget.setSelectedId(1)
```

That is the exact code behind the screenshot above.

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `variant` | `enum: `primary` / `secondary` / `outline`` | `outline` |
| `sizeVariant` | `enum: `sm` / `md` / `lg`` | `md` |
| `exclusive` | `bool` | `True` |
| `orientation` | `enum: `horizontal` / `vertical`` | `vertical` |

## Signals

| Signal |
|---|
| `selectionChanged(int,QString)` |

## Methods

| Method | Description |
|---|---|
| `addButton(text, button_id=None)` | Add a button to the group. |
| `exclusive(*args, **kwargs)` |  |
| `orientation(*args, **kwargs)` |  |
| `selectedId()` | Return the ID of the selected button, or -1 if none. |
| `selectedText()` | Return the text of the selected button, or empty string if none. |
| `selectionChanged(...)` |  |
| `setButtons(items)` | Replace all buttons. Items may be strings or (text, id) pairs. |
| `setSelectedId(button_id)` | Set the selected button by ID. |
| `sizeVariant(*args, **kwargs)` |  |
| `variant(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `accent`, `primary`, `outline`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomCheckBox](QCustomCheckBox.md) · [QCustomColorPicker](QCustomColorPicker.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md) · [QCustomForm](QCustomForm.md)
