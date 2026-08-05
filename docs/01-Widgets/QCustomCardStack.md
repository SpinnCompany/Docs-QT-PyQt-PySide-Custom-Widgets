---
title: QCustomCardStack
description: An interactive stack of payment cards.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomCardStack

![QCustomCardStack](/img/showcase/cardstack.png)

An interactive stack of payment cards.

Holds several QCustomPaymentCard children laid out as a peeking stack (the
front card full-size at the bottom, the ones behind shifted up + inset so
their top edges show). Click / tap (or call next()/previous()) to cycle the
stack with an animated reshuffle - the front card peels to the back. Perfect
for a "My cards" panel. Emits currentChanged(index).

Give cards in code with setCards([{...}]) / addCard(...), or in Qt Designer
with the cardsJson property (a JSON list of card dicts).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomCardStack import QCustomCardStack` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomCardStack import QCustomCardStack

widget = QCustomCardStack()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomCardStack in dark theme](/img/showcase/cardstack-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `cardsJson` | `string` | — |
| `cardHeight` | `int` | `170` |
| `cardPeek` | `int` | `22` |
| `xInset` | `int` | `14` |
| `maxVisible` | `int` | `3` |
| `currentIndex` | `int` | `0` |
| `animationDuration` | `int` | `300` |

## Signals

| Signal |
|---|
| `currentChanged(int)` |

## Methods

| Method | Description |
|---|---|
| `addCard(brand='VISA', amount='$0.00', number='0000', top='#0f4a43', bottom='#0a2b27', variant='gradient', textColor='#ffffff', fullNumber='', revealable=True)` | Add a card. |
| `animationDuration(*args, **kwargs)` | Animation duration. |
| `cardHeight(*args, **kwargs)` | Card height. |
| `cardPeek(*args, **kwargs)` | Card peek. |
| `cardsJson(*args, **kwargs)` | Cards json. |
| `clear()` | Clear. |
| `count()` | Count. |
| `currentCard()` | Current card. |
| `currentChanged(...)` | Current changed. |
| `currentIndex(*args, **kwargs)` | Current index. |
| `currentIndexValue()` | Current index value. |
| `maxVisible(*args, **kwargs)` | Max visible. |
| `next()` | Next. |
| `previous()` | Previous. |
| `setCardColors(top, bottom=None)` | Re-apply one gradient to every card (e.g. on a theme flip) without |
| `setCardColorsList(grads)` | Give each card its OWN gradient. `grads` is a list of (top, bottom) |
| `setCards(cards)` | Set the cards. |
| `setCurrentIndex(index, animate=True)` | Set the current index. |
| `xInset(*args, **kwargs)` | X inset. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAccordion](QCustomAccordion.md) · [QCustomCarousel](QCustomCarousel.md) · [QCustomEmbeddedWindow](QCustomEmbeddedWindow.md) · [QCustomFlowLayout](QCustomFlowLayout.md) · [QCustomFlowWidget](QCustomFlowWidget.md) · [QCustomGlassFrame](QCustomGlassFrame.md) · [QCustomModal](QCustomModal.md) · [QCustomPopover](QCustomPopover.md)
