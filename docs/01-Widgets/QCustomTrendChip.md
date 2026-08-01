---
title: QCustomTrendChip
description: A directional delta / trend indicator.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomTrendChip

![QCustomTrendChip](/img/showcase/trendchip.png)

A directional delta / trend indicator.

A painted up/down/flat arrow that colour-codes a change (green up, red down,
grey flat) with an optional value label. Three looks:
variant="circle" (default) - just the arrow in a tinted circle (the classic
income/expense chip); square, icon-only.
variant="soft"   - a rounded pill: tinted background + arrow + text.
variant="plain"  - arrow + text, no background.
Direction is set explicitly or inferred from a numeric value's sign. The arrow
is drawn with QPainter (no glyph font), so it is crisp and theme-tokenisable.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomTrendChip import QCustomTrendChip` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomTrendChip import QCustomTrendChip

widget = QCustomTrendChip()
widget.setVariant("soft")
widget.setValue(12.4, "+12.4%")
```

That is the exact code behind the screenshot above.

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomTrendChip in dark theme](/img/showcase/trendchip-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `text` | `string` | — |
| `direction` | `enum: `up` / `down` / `flat`` | `up` |
| `variant` | `enum: `circle` / `soft` / `plain`` | `circle` |
| `upColor` | `color` | `#22c07e` |
| `downColor` | `color` | `#f2704e` |
| `flatColor` | `color` | `#8b909e` |
| `tintOpacity` | `float` | `0.14` |
| `cornerRadius` | `int` | `15` |

## Methods

| Method | Description |
|---|---|
| `cornerRadius(*args, **kwargs)` |  |
| `direction(*args, **kwargs)` |  |
| `downColor(*args, **kwargs)` |  |
| `flatColor(*args, **kwargs)` |  |
| `setDirection(direction)` |  |
| `setText(text)` |  |
| `setValue(value, text=None)` | Set direction from a number's sign; optionally format the label. |
| `setVariant(variant)` |  |
| `text(*args, **kwargs)` |  |
| `tintOpacity(*args, **kwargs)` |  |
| `upColor(*args, **kwargs)` |  |
| `variant(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `up`, `down`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
