---
title: QCustomMultiSelect
description: A multiple-choice field with chips.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomMultiSelect

![QCustomMultiSelect](/img/showcase/multiselect.png)

A multiple-choice field with chips.

A closed field that paints the current selection as removable chips, and a
checkable popup list to change it. QComboBox cannot do this: it is
single-selection by design, and the usual workaround (a QComboBox with
checkable model items) leaves the closed field showing one entry while the
model holds several.

Options are authored in code with setOptions([...]) or in Qt Designer with
the optionsCsv property, following the valuesCsv convention used elsewhere:

optionsCsv = "Red,Green,Blue"                 labels double as values
optionsCsv = "r=Red,g=Green,b=Blue"           explicit value=label

Emits selectionChanged(list) and optionToggled(str, bool).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomMultiSelect import QCustomMultiSelect` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomMultiSelect import QCustomMultiSelect

widget = QCustomMultiSelect()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomMultiSelect in dark theme](/img/showcase/multiselect-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `optionsCsv` | `string` | `Option one,Option two,Option three` |
| `selectedCsv` | `string` | — |
| `placeholderText` | `string` | `Select...` |
| `maxChips` | `int` | `0` |
| `maxSelection` | `int` | `0` |
| `searchable` | `bool` | `False` |
| `sizeVariant` | `enum: `sm` / `md` / `lg`` | `md` |
| `state` | `enum: `default` / `error`` | `default` |
| `fieldBackgroundColor` | `color` | — |
| `fieldBorderColor` | `color` | — |
| `fieldBorderActiveColor` | `color` | — |
| `fieldBorderErrorColor` | `color` | — |
| `chipBackgroundColor` | `color` | — |
| `chipTextColor` | `color` | — |
| `textColor` | `color` | — |
| `placeholderColor` | `color` | — |

## Signals

| Signal |
|---|
| `optionToggled(QString,bool)` |
| `selectionChanged(QVariantList)` |

## Methods

| Method | Description |
|---|---|
| `chipBackgroundColor(*args, **kwargs)` |  |
| `chipTextColor(*args, **kwargs)` |  |
| `clearSelection()` |  |
| `count()` |  |
| `fieldBackgroundColor(*args, **kwargs)` |  |
| `fieldBorderActiveColor(*args, **kwargs)` |  |
| `fieldBorderColor(*args, **kwargs)` |  |
| `fieldBorderErrorColor(*args, **kwargs)` |  |
| `hidePopup()` |  |
| `isPopupVisible()` |  |
| `isSelected(value)` |  |
| `labelFor(value)` |  |
| `maxChips(*args, **kwargs)` |  |
| `maxSelection(*args, **kwargs)` |  |
| `optionToggled(...)` |  |
| `options()` |  |
| `optionsCsv(*args, **kwargs)` |  |
| `placeholderColor(*args, **kwargs)` |  |
| `placeholderText(*args, **kwargs)` |  |
| `searchable(*args, **kwargs)` |  |
| `selectOption(value, on=True)` |  |
| `selected()` |  |
| `selectedCsv(*args, **kwargs)` |  |
| `selectedLabels()` |  |
| `selectionChanged(...)` |  |
| `setOptions(options)` | Replace the option set, dropping any selection that no longer exists. |
| `setSelected(values)` |  |
| `showPopup()` |  |
| `sizeVariant(*args, **kwargs)` |  |
| `state(*args, **kwargs)` |  |
| `textColor(*args, **kwargs)` |  |
| `toggleOption(value)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `outline`, `focus-ring`, `accent`, `destructive`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomMultiSelect/main.py`.

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomColorPicker](QCustomColorPicker.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomDateRangePicker](QCustomDateRangePicker.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md)
