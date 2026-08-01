---
title: QCustomPageDots
description: A carousel / pager page indicator.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomPageDots

A carousel / pager page indicator.

A row (or column) of dots where the active page is drawn as an elongated
pill. Painted with QPainter so it stays crisp at any size and needs no child
widgets. Optionally clickable: clicking a dot sets it active and emits
`pageChanged(index)`, so it can drive a QStackedWidget / carousel directly.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomPageDots import QCustomPageDots` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomPageDots import QCustomPageDots

widget = QCustomPageDots()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `count` | `int` | `3` |
| `activeIndex` | `int` | `0` |
| `dotColor` | `color` | `#d7dbe6` |
| `activeColor` | `color` | `#3355e8` |
| `dotDiameter` | `int` | `8` |
| `activePillLength` | `int` | `22` |
| `spacing` | `int` | `6` |
| `orientation` | `enum: `horizontal` / `vertical`` | `horizontal` |
| `clickable` | `bool` | `True` |

## Signals

| Signal |
|---|
| `pageChanged(int)` |

## Methods

| Method | Description |
|---|---|
| `activeColor(*args, **kwargs)` |  |
| `activeIndex(*args, **kwargs)` |  |
| `activePillLength(*args, **kwargs)` |  |
| `bindTo(control)` | Two-way bind the dots to any paged control (QCustomSegmentedControl, |
| `clickable(*args, **kwargs)` |  |
| `count(*args, **kwargs)` |  |
| `dotColor(*args, **kwargs)` |  |
| `dotDiameter(*args, **kwargs)` |  |
| `orientation(*args, **kwargs)` |  |
| `pageChanged(...)` |  |
| `setActiveIndex(i)` |  |
| `setColors(dot=None, active=None)` |  |
| `setCount(n)` |  |
| `spacing(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
