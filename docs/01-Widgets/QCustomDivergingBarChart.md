---
title: QCustomDivergingBarChart
description: A diverging (bipolar / up-down) bar chart.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomDivergingBarChart

:::info Pro widget

`QCustomDivergingBarChart` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

![QCustomDivergingBarChart](/img/showcase/divergingbarchart.png)

A diverging (bipolar / up-down) bar chart.

Each category is ONE column split across a zero axis: an UPWARD segment
(e.g. income, `upColor`) and a DOWNWARD segment (e.g. expense/expenditure,
`downColor`), so a single slot carries two colours and two signs. A
configurable `zeroGap` leaves clear space between the + and - bars around
the zero line (as in cash-flow dashboards). Painted (no QtCharts) so it is
crisp at any size and needs no toolbar/legend.

This is the diverging sibling of QCustomMiniBarChart. Give data via
setData(up, down, labels) in code, or the upCsv / downCsv / labelsCsv
properties in Qt Designer. Optional y-axis (gridlines + prefixed/suffixed
value labels, e.g. "EUR 5K") and x labels underneath.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomDivergingBarChart import QCustomDivergingBarChart` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomDivergingBarChart import QCustomDivergingBarChart

widget = QCustomDivergingBarChart()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomDivergingBarChart in dark theme](/img/showcase/divergingbarchart-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `upCsv` | `string` | `1.2,3.1,2.4,0.9,1.1,4.2,3.0,2.0` |
| `downCsv` | `string` | `0.9,1.4,2.6,0.7,0.9,1.7,1.2,1.3` |
| `labelsCsv` | `string` | — |
| `upColor` | `color` | `#123f39` |
| `downColor` | `color` | `#34d17a` |
| `barWidth` | `int` | `12` |
| `cornerRadius` | `int` | `3` |
| `zeroGap` | `int` | `8` |
| `showAxis` | `bool` | `True` |
| `showLabels` | `bool` | `True` |
| `axisPrefix` | `string` | — |
| `axisSuffix` | `string` | — |
| `gridColor` | `color` | `#e6e9ec` |
| `axisTextColor` | `color` | `#8b93a1` |

## Methods

| Method | Description |
|---|---|
| `axisPrefix(*args, **kwargs)` |  |
| `axisSuffix(*args, **kwargs)` |  |
| `axisTextColor(*args, **kwargs)` |  |
| `barWidth(*args, **kwargs)` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `downColor(*args, **kwargs)` |  |
| `downCsv(*args, **kwargs)` |  |
| `downValues()` |  |
| `gridColor(*args, **kwargs)` |  |
| `labelsCsv(*args, **kwargs)` |  |
| `setColors(up_color, down_color)` |  |
| `setData(up, down, labels=None)` | Set both series at once. `up` = upward (income) values, `down` = |
| `setDownValues(values)` |  |
| `setLabels(labels)` |  |
| `setTickStep(step)` | Axis gridline/label step in data units (0 = auto). |
| `setUpValues(values)` |  |
| `showAxis(*args, **kwargs)` |  |
| `showLabels(*args, **kwargs)` |  |
| `upColor(*args, **kwargs)` |  |
| `upCsv(*args, **kwargs)` |  |
| `upValues()` |  |
| `zeroGap(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDonut](QCustomDonut.md)
