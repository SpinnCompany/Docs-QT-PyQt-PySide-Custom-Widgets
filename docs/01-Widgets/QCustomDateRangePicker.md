---
title: QCustomDateRangePicker
description: An INLINE dual-month range calendar.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomDateRangePicker

An INLINE dual-month range calendar.

The travel-dates / booking range picker: N month grids side by side, a painted
in-range BAND between the two chosen days (rounded at the range ends and each
week wrap), green endpoint circles, a "today" marker and month nav arrows.
Click a day to set the start (clears the end); click a later day to set the
end. This is the piece the compact popup QCustomDateRangeEdit lacks.

Painted with QPainter; the month panels flex to the widget and stack vertically
when it is too narrow. Colours are qproperties so they flip with the theme.
API: setStartDate/setEndDate/setRange(QDate...), monthsVisible; navigation
arrows; signal rangeChanged(QDate start, QDate end).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomDateRangePicker import QCustomDateRangePicker` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomDateRangePicker import QCustomDateRangePicker

widget = QCustomDateRangePicker()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `monthsVisible` | `int` | `2` |
| `accentColor` | `color` | `#2f8f5b` |
| `rangeBandColor` | `color` | `#e9edf0` |
| `todayColor` | `color` | `#2f8f5b` |
| `textColor` | `color` | `#1c2430` |
| `mutedColor` | `color` | `#aab2bd` |
| `headerColor` | `color` | `#1c2430` |
| `selectedTextColor` | `color` | `#ffffff` |

## Signals

| Signal |
|---|
| `rangeChanged(QDate,QDate)` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` |  |
| `endDate()` |  |
| `headerColor(*args, **kwargs)` |  |
| `monthsVisible(*args, **kwargs)` |  |
| `mutedColor(*args, **kwargs)` |  |
| `rangeBandColor(*args, **kwargs)` |  |
| `rangeChanged(...)` |  |
| `selectedTextColor(*args, **kwargs)` |  |
| `setEndDate(d)` |  |
| `setMonthsVisible(n)` |  |
| `setRange(start, end)` |  |
| `setSelectableRange(minimum, maximum)` |  |
| `setStartDate(d)` |  |
| `showMonth(year, month)` |  |
| `startDate()` |  |
| `textColor(*args, **kwargs)` |  |
| `todayColor(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomButtonGroup](QCustomButtonGroup.md) · [QCustomCheckBox](QCustomCheckBox.md) · [QCustomColorPicker](QCustomColorPicker.md) · [QCustomComboBox](QCustomComboBox.md) · [QCustomDateEdit](QCustomDateEdit.md) · [QCustomEmojiPicker](QCustomEmojiPicker.md) · [QCustomFileDropZone](QCustomFileDropZone.md) · [QCustomForm](QCustomForm.md)
