---
title: QCustomPaymentCard
description: A painted credit / debit card surface.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomPaymentCard

A painted credit / debit card surface.

A rounded card with a brand mark, a big amount and a masked card number,
drawn entirely with QPainter so it stays crisp at any size and needs no
child widgets. Two looks:
variant="gradient" (default) - a diagonal two-stop gradient (e.g. an accent
"active" card) with light text.
variant="flat" - a single flat fill (e.g. a muted secondary card) whose
text colour you control.
Colours come from qproperties so a theme/manager can tokenise them. An
optional EMV-style chip can be shown. Set content with setBrand/setAmount/
setNumber (or the Designer properties).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomPaymentCard import QCustomPaymentCard` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomPaymentCard import QCustomPaymentCard

widget = QCustomPaymentCard()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `brand` | `string` | `VISA` |
| `amount` | `string` | `$5 400.55` |
| `number` | `string` | `4558` |
| `variant` | `enum: `gradient` / `flat`` | `gradient` |
| `gradientStart` | `color` | `#3f6bff` |
| `gradientEnd` | `color` | `#1c33c4` |
| `flatColor` | `color` | `#e7e9f0` |
| `textColor` | `color` | `#ffffff` |
| `cornerRadius` | `int` | `18` |
| `showChip` | `bool` | `False` |
| `fullNumber` | `string` | — |
| `revealable` | `bool` | `False` |
| `revealed` | `bool` | — |

## Signals

| Signal |
|---|
| `numberRevealed(bool)` |

## Methods

| Method | Description |
|---|---|
| `amount(*args, **kwargs)` |  |
| `brand(*args, **kwargs)` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `flatColor(*args, **kwargs)` |  |
| `fullNumber(*args, **kwargs)` |  |
| `gradientEnd(*args, **kwargs)` |  |
| `gradientStart(*args, **kwargs)` |  |
| `number(*args, **kwargs)` |  |
| `numberRevealed(...)` |  |
| `revealable(*args, **kwargs)` |  |
| `revealed(*args, **kwargs)` |  |
| `setAmount(text)` |  |
| `setBrand(text)` |  |
| `setColors(start, end=None)` | Set the gradient (start, end) — or a single flat colour if end is None. |
| `setFullNumber(number)` | The complete PAN — enables a real reveal (otherwise the eye just |
| `setNumber(text)` |  |
| `setRevealable(on)` |  |
| `setRevealed(on)` |  |
| `setVariant(variant)` |  |
| `showChip(*args, **kwargs)` |  |
| `textColor(*args, **kwargs)` |  |
| `toggleReveal()` |  |
| `variant(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
