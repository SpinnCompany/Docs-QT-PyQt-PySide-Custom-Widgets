---
title: QCustomFunnelChart
description: A painted funnel / pyramid chart.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomFunnelChart

:::info Pro widget

`QCustomFunnelChart` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.org/pricing/)

:::

![QCustomFunnelChart](/img/showcase/funnelchart.png)

A painted funnel / pyramid chart.

Stacked trapezoid stages narrowing toward the end: a conversion funnel, a
sales pipeline, a drop-off analysis. Each stage's width encodes its value
and the taper between stages is the loss.

Pyramid is the SAME chart inverted, so it is a `shape` property rather than
a second widget - MUI ships them as two components, which duplicates every
property for one flipped polygon.

QPainter only, NO QtCharts (see docs/design/mui-charts-gap.md).

Data goes in with setStages([...]) in code, or stagesCsv in Qt Designer:

stagesCsv = "Visits=1000,Signups=420,Trials=180,Paid=64"

Emits stageHovered(int) and stageClicked(int); -1 means "nothing".

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomFunnelChart import QCustomFunnelChart` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomFunnelChart import QCustomFunnelChart

widget = QCustomFunnelChart()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomFunnelChart in dark theme](/img/showcase/funnelchart-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `stagesCsv` | `string` | — |
| `colorsCsv` | `string` | — |
| `shape` | `enum: `funnel` / `pyramid`` | `funnel` |
| `orientation` | `enum: `vertical` / `horizontal`` | `vertical` |
| `gapPx` | `int` | `3` |
| `neckRatio` | `float` | `0.0` |
| `showLabels` | `bool` | `True` |
| `showValues` | `bool` | `True` |
| `showPercent` | `bool` | `False` |
| `percentOf` | `enum: `first` / `previous`` | `first` |
| `labelColor` | `color` | `#ffffff` |
| `outsideLabelColor` | `color` | `#0f172a` |

## Signals

| Signal |
|---|
| `stageClicked(int)` |
| `stageHovered(int)` |

## Methods

| Method | Description |
|---|---|
| `bands()` |  |
| `clearStages()` |  |
| `colorsCsv(*args, **kwargs)` |  |
| `gapPx(*args, **kwargs)` |  |
| `labelColor(*args, **kwargs)` |  |
| `maximum()` | The value the widest band represents; never zero. |
| `neckRatio(*args, **kwargs)` |  |
| `orientation(*args, **kwargs)` |  |
| `outsideLabelColor(*args, **kwargs)` |  |
| `percentFor(index)` | Conversion percentage for a stage, per `percentOf`. |
| `percentOf(*args, **kwargs)` |  |
| `setStages(stages)` |  |
| `shape(*args, **kwargs)` |  |
| `showLabels(*args, **kwargs)` |  |
| `showPercent(*args, **kwargs)` |  |
| `showValues(*args, **kwargs)` |  |
| `stageAt(pos)` |  |
| `stageClicked(...)` |  |
| `stageColor(index)` |  |
| `stageCount()` |  |
| `stageHovered(...)` |  |
| `stages()` |  |
| `stagesCsv(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `on-surface`, `surface`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomFunnelChart/main.py`.

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
