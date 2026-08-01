---
title: QCustomRadarChart
description: A painted radar / spider chart.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomRadarChart

:::info Pro widget

`QCustomRadarChart` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

A painted radar / spider chart.

N axes radiating from a centre, one filled polygon per series. Used to
compare several entities across the same set of measures - the shape of the
polygon is the comparison, which no cartesian chart gives you.

This is the catalog's first polar chart of any kind. Rendered entirely with
QPainter and NO QtCharts: Qt Charts is GPLv3-or-commercial with no LGPL
option, so anything built on it cannot ship inside a proprietary wheel (see
docs/design/mui-charts-gap.md). A test asserts the import graph stays clean.

Data goes in with setAxes([...]) + addSeries(name, values) in code, or the
axesCsv / seriesCsv properties in Qt Designer, following the same convention
as the other charts:

axesCsv    = "Speed,Power,Range,Agility"
seriesCsv  = "Alpha=80,60,90,70;Beta=60,90,50,80"

Emits seriesHovered(int) and axisClicked(int); -1 means "nothing".

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomRadarChart import QCustomRadarChart` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomRadarChart import QCustomRadarChart

widget = QCustomRadarChart()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `axesCsv` | `string` | — |
| `seriesCsv` | `string` | — |
| `seriesColorsCsv` | `string` | — |
| `maxValue` | `float` | `0.0` |
| `rings` | `int` | `4` |
| `gridStyle` | `enum: `polygon` / `circle`` | `polygon` |
| `startAngle` | `int` | `90` |
| `fillOpacity` | `float` | `0.25` |
| `lineWidth` | `float` | `2.0` |
| `showAxisLabels` | `bool` | `True` |
| `showRingLabels` | `bool` | `False` |
| `showMarkers` | `bool` | `True` |
| `showLegend` | `bool` | `True` |
| `gridColor` | `color` | `#e2e8f0` |
| `axisColor` | `color` | `#cbd5e1` |
| `labelColor` | `color` | `#0f172a` |

## Signals

| Signal |
|---|
| `axisClicked(int)` |
| `seriesHovered(int)` |

## Methods

| Method | Description |
|---|---|
| `addSeries(name, values, color=None)` |  |
| `axes()` |  |
| `axesCsv(*args, **kwargs)` |  |
| `axisAt(pos)` | Index of the nearest axis to a point, or -1 when outside the plot. |
| `axisClicked(...)` |  |
| `axisColor(*args, **kwargs)` |  |
| `axisCount()` |  |
| `clearSeries()` |  |
| `fillOpacity(*args, **kwargs)` |  |
| `gridColor(*args, **kwargs)` |  |
| `gridStyle(*args, **kwargs)` |  |
| `labelColor(*args, **kwargs)` |  |
| `lineWidth(*args, **kwargs)` |  |
| `maxValue(*args, **kwargs)` |  |
| `maximum()` | The value the outermost ring represents. |
| `removeSeries(index)` |  |
| `rings(*args, **kwargs)` |  |
| `series()` |  |
| `seriesAt(pos)` | Index of the series whose polygon contains a point, or -1. |
| `seriesColor(index)` |  |
| `seriesColorsCsv(*args, **kwargs)` |  |
| `seriesCount()` |  |
| `seriesCsv(*args, **kwargs)` |  |
| `seriesHovered(...)` |  |
| `setAxes(labels)` | Replace the axis labels. Existing series are re-fitted to the new |
| `setSeries(series)` | Replace every series. Each item is (name, values). |
| `showAxisLabels(*args, **kwargs)` |  |
| `showLegend(*args, **kwargs)` |  |
| `showMarkers(*args, **kwargs)` |  |
| `showRingLabels(*args, **kwargs)` |  |
| `startAngle(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `outline`, `on-surface`, `surface-muted`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomRadarChart/main.py`.

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
