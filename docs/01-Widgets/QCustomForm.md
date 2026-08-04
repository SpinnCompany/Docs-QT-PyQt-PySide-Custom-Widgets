---
title: QCustomForm
description: Minimal form container with validation and submit signals.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomForm

![QCustomForm](/img/showcase/form.png)

Minimal form container with validation and submit signals.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomForm import QCustomForm` |
| **Qt Designer** | Code only |

## Quick start

```python
from Custom_Widgets.QCustomForm import QCustomForm

widget = QCustomForm()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomForm in dark theme](/img/showcase/form-dark.png)

## Signals

| Signal |
|---|
| `submitted(QVariantMap)` |

## Methods

| Method | Description |
|---|---|
| `add_field(field)` |  |
| `errors()` |  |
| `submit()` |  |
| `submitted(...)` |  |
| `validate()` |  |

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomColorPicker](QCustomColorPicker.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md)
