---
title: QCustomCompassDial
description: A PREMIUM beveled instrument compass.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomCompassDial

![QCustomCompassDial](/img/showcase/compassdial.png)

A PREMIUM beveled instrument compass.

The skeuomorphic-modern map compass (the Haulix "NW" dial): a beveled metal
RIM (top-lit / bottom-shadowed gradient), a domed glass FACE (radial gradient),
a fine watch-bezel TICK ring with brass majors at the cardinals, N/E/S/W (+
intercardinals), a slim two-tone needle and a metallic CENTRE CAP carrying the
16-point heading readout + degrees. All painted (gradients, not effects), so it
recolours with the theme and stays crisp.

Sibling of the flat QCustomCompass — same API (heading 0-360, rotateBezel,
animated shortest-path ease, drag-to-set, headingChanged) with the premium
look. Text is measured to fit (never overflows / truncates).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomCompassDial import QCustomCompassDial` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomCompassDial import QCustomCompassDial

widget = QCustomCompassDial()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomCompassDial in dark theme](/img/showcase/compassdial-dark.png)

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
| `bezelColor` | `color` | `#2a303c` |
| `faceColor` | `color` | `#20262f` |
| `accentColor` | `color` | `#c8a24a` |
| `tickColor` | `color` | `#5b6472` |
| `cardinalColor` | `color` | `#e7ecf4` |
| `northColor` | `color` | `#e0463c` |
| `southColor` | `color` | `#aeb6c2` |
| `capColor` | `color` | `#272e39` |
| `readoutColor` | `color` | `#f4f6fb` |

## Signals

| Signal |
|---|
| `headingChanged(double)` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` |  |
| `animated(*args, **kwargs)` |  |
| `bezelColor(*args, **kwargs)` |  |
| `capColor(*args, **kwargs)` |  |
| `cardinal16(deg)` |  |
| `cardinalColor(*args, **kwargs)` |  |
| `faceColor(*args, **kwargs)` |  |
| `heading(*args, **kwargs)` |  |
| `headingChanged(...)` |  |
| `interactive(*args, **kwargs)` |  |
| `northColor(*args, **kwargs)` |  |
| `readoutColor(*args, **kwargs)` |  |
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

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md) · [QCustomDonut](QCustomDonut.md)
