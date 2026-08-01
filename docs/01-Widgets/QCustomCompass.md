---
title: QCustomCompass
description: A heading / compass rose.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomCompass

A heading / compass rose.

A painted compass: a tick ring with N / E / S / W (+ intercardinals), a
two-tone needle and a centre readout (16-point cardinal + degrees). Set the
`heading` (0-360°, 0 = North = up); it eases to the new bearing when animated.

Two looks (`rotateBezel`):
False (default) - a FIXED rose, the needle rotates to the heading.
True            - a rotating COMPASS CARD: the needle stays up and the whole
rose spins so the heading sits at the top (aircraft / marine style).

Interactive: drag around the centre to set the heading (opt-out via
`interactive=False`). Painted with QPainter; it FLEXes to the widget and every
colour is a qproperty so it flips with the theme. Signal: headingChanged(float).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomCompass import QCustomCompass` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomCompass import QCustomCompass

widget = QCustomCompass()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `heading` | `float` | `315.0` |
| `rotateBezel` | `bool` | `False` |
| `showIntercardinals` | `bool` | `True` |
| `showReadout` | `bool` | `True` |
| `animated` | `bool` | `True` |
| `interactive` | `bool` | `True` |
| `northColor` | `color` | `#e0463c` |
| `southColor` | `color` | `#cfd4de` |
| `ringColor` | `color` | `#2b3145` |
| `tickColor` | `color` | `#6b7280` |
| `cardinalColor` | `color` | `#f4f6fb` |
| `readoutColor` | `color` | `#f4f6fb` |
| `hubColor` | `color` | `#141826` |

## Signals

| Signal |
|---|
| `headingChanged(double)` |

## Methods

| Method | Description |
|---|---|
| `animated(*args, **kwargs)` |  |
| `cardinal16(deg)` |  |
| `cardinalColor(*args, **kwargs)` |  |
| `heading(*args, **kwargs)` |  |
| `headingChanged(...)` |  |
| `hubColor(*args, **kwargs)` |  |
| `interactive(*args, **kwargs)` |  |
| `northColor(*args, **kwargs)` |  |
| `readoutColor(*args, **kwargs)` |  |
| `ringColor(*args, **kwargs)` |  |
| `rotateBezel(*args, **kwargs)` |  |
| `setHeading(deg)` |  |
| `showIntercardinals(*args, **kwargs)` |  |
| `showReadout(*args, **kwargs)` |  |
| `southColor(*args, **kwargs)` |  |
| `tickColor(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `down`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md) · [QCustomDonut](QCustomDonut.md)
