---
title: QCustomScatterChart
description: A painted x/y scatter plot.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomScatterChart

:::info Pro widget

`QCustomScatterChart` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

![QCustomScatterChart](/img/showcase/scatterchart.png)

A painted x/y scatter plot.

Points in a cartesian plane, one colour per series, optionally sized by a
third value (a bubble plot). The most conspicuous absence for a general
chart library: nothing in the catalog plotted two continuous variables
against each other.

QPainter only, NO QtCharts - Qt Charts is GPLv3-or-commercial with no LGPL
option, so anything built on it cannot ship in a proprietary wheel (see
docs/design/mui-charts-gap.md).

Axis ticks come from _chart_axis, shared with the other cartesian charts so
they agree about where round numbers fall.

Data goes in with addSeries(name, points) in code, or pointsCsv in Qt
Designer:

pointsCsv = "Alpha=1,2;2,4;3,9|Beta=1,5;2,3"
name   x,y pairs separated by ";", series by "|"

Emits pointHovered(int, int) and pointClicked(int, int) - series index and
point index, or (-1, -1) for nothing.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomScatterChart import QCustomScatterChart` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomScatterChart import QCustomScatterChart

widget = QCustomScatterChart()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomScatterChart in dark theme](/img/showcase/scatterchart-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `pointsCsv` | `string` | — |
| `seriesColorsCsv` | `string` | — |
| `xAxisTitle` | `string` | — |
| `yAxisTitle` | `string` | — |
| `markerSize` | `float` | `7.0` |
| `markerShape` | `enum: `circle` / `square` / `diamond` / `triangle`` | `circle` |
| `markerOpacity` | `float` | `0.85` |
| `tickCount` | `int` | `5` |
| `showGrid` | `bool` | `True` |
| `showAxes` | `bool` | `True` |
| `showLegend` | `bool` | `True` |
| `showTooltip` | `bool` | `True` |
| `gridColor` | `color` | `#e2e8f0` |
| `axisColor` | `color` | `#cbd5e1` |
| `labelColor` | `color` | `#64748b` |

## Signals

| Signal |
|---|
| `pointClicked(int,int)` |
| `pointHovered(int,int)` |

## Methods

| Method | Description |
|---|---|
| `addSeries(name, points, color=None)` |  |
| `axisColor(*args, **kwargs)` |  |
| `clearSeries()` |  |
| `dataBounds()` | (xmin, xmax, ymin, ymax) across every series. |
| `gridColor(*args, **kwargs)` |  |
| `labelColor(*args, **kwargs)` |  |
| `mapPoint(x, y)` | Data coordinates -> widget coordinates. |
| `markerOpacity(*args, **kwargs)` |  |
| `markerShape(*args, **kwargs)` |  |
| `markerSize(*args, **kwargs)` |  |
| `pointAt(pos, tolerance=None)` | (series, point) nearest a position within tolerance, else (-1, -1). |
| `pointClicked(...)` |  |
| `pointCount()` |  |
| `pointHovered(...)` |  |
| `pointsCsv(*args, **kwargs)` |  |
| `removeSeries(index)` |  |
| `series()` |  |
| `seriesColor(index)` |  |
| `seriesColorsCsv(*args, **kwargs)` |  |
| `seriesCount()` |  |
| `setSeries(series)` |  |
| `showAxes(*args, **kwargs)` |  |
| `showGrid(*args, **kwargs)` |  |
| `showLegend(*args, **kwargs)` |  |
| `showTooltip(*args, **kwargs)` |  |
| `tickCount(*args, **kwargs)` |  |
| `xAxisTitle(*args, **kwargs)` |  |
| `xRange()` |  |
| `yAxisTitle(*args, **kwargs)` |  |
| `yRange()` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `outline`, `on-surface`, `surface-muted`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomScatterChart/main.py`.

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
