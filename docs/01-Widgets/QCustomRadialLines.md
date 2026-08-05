---
title: QCustomRadialLines
description: A painted polar line chart.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomRadialLines

:::info Pro widget

`QCustomRadialLines` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.org/pricing/)

:::

![QCustomRadialLines](/img/showcase/radiallines.png)

A painted polar line chart.

A line chart wrapped onto a circle: the x axis is angular, so the series
closes back on itself. The right form for cyclical data - hours of a day,
months of a year, compass bearings - where a cartesian line chart puts an
artificial break between the last point and the first.

Distinct from QCustomRadarChart: radar compares a handful of NAMED axes as
a shape; this plots a continuous series around a circle and does not label
every sample.

QPainter only, NO QtCharts (see docs/design/mui-charts-gap.md). Angles come
from the shared _chart_axis polar helpers so it winds the same way as the
other radial charts.

Data goes in with addSeries(name, values) in code, or seriesCsv in Qt
Designer:

seriesCsv = "Weekday=30,45,60,52,48,70,64;Weekend=20,25,40,38,30,35,28"

Emits seriesHovered(int) and pointClicked(int, int); -1 means "nothing".

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomRadialLines import QCustomRadialLines` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomRadialLines import QCustomRadialLines

widget = QCustomRadialLines()
widget.setLabels(["Speed", "Power", "Range", "Comfort", "Safety", "Price"])
widget.setSeries([("Model A", [8, 6, 7, 9, 5, 6]),
         ("Model B", [5, 9, 6, 4, 8, 7])])
```

That is the exact code behind the screenshot above.

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomRadialLines in dark theme](/img/showcase/radiallines-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `seriesCsv` | `string` | — |
| `labelsCsv` | `string` | — |
| `colorsCsv` | `string` | — |
| `maxValue` | `float` | `0.0` |
| `startAngle` | `int` | `90` |
| `clockwise` | `bool` | `True` |
| `rings` | `int` | `4` |
| `lineWidth` | `float` | `2.0` |
| `fillOpacity` | `float` | `0.15` |
| `closed` | `bool` | `True` |
| `smooth` | `bool` | `False` |
| `showGrid` | `bool` | `True` |
| `showMarkers` | `bool` | `False` |
| `showLabels` | `bool` | `True` |
| `showLegend` | `bool` | `True` |
| `gridColor` | `color` | `#e2e8f0` |
| `labelColor` | `color` | `#64748b` |

## Signals

| Signal |
|---|
| `pointClicked(int,int)` |
| `seriesHovered(int)` |

## Methods

| Method | Description |
|---|---|
| `addSeries(name, values, color=None)` |  |
| `clearSeries()` |  |
| `clockwise(*args, **kwargs)` |  |
| `closed(*args, **kwargs)` |  |
| `colorsCsv(*args, **kwargs)` |  |
| `fillOpacity(*args, **kwargs)` |  |
| `gridColor(*args, **kwargs)` |  |
| `labelColor(*args, **kwargs)` |  |
| `labels()` |  |
| `labelsCsv(*args, **kwargs)` |  |
| `lineWidth(*args, **kwargs)` |  |
| `maxValue(*args, **kwargs)` |  |
| `maximum()` |  |
| `pointClicked(...)` |  |
| `pointFor(seriesIndex, sampleIndex)` | Widget-space point for one sample of one series. |
| `rings(*args, **kwargs)` |  |
| `sampleAt(pos)` | (series, sample) nearest a point, or (-1, -1). |
| `sampleCount()` | Samples around the circle — the longest series wins. |
| `series()` |  |
| `seriesAt(pos)` | Index of the series whose closed shape contains a point, else -1. |
| `seriesColor(index)` |  |
| `seriesCount()` |  |
| `seriesCsv(*args, **kwargs)` |  |
| `seriesHovered(...)` |  |
| `setLabels(labels)` |  |
| `setSeries(series)` |  |
| `showGrid(*args, **kwargs)` |  |
| `showLabels(*args, **kwargs)` |  |
| `showLegend(*args, **kwargs)` |  |
| `showMarkers(*args, **kwargs)` |  |
| `smooth(*args, **kwargs)` |  |
| `startAngle(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `surface-muted`, `on-surface`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomRadialLines/main.py`.

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
