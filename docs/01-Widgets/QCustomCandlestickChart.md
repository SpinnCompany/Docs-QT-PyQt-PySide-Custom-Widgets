---
title: QCustomCandlestickChart
description: A painted OHLC / candlestick price chart.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomCandlestickChart

:::info Pro widget

`QCustomCandlestickChart` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

A painted OHLC / candlestick price chart.

Each candle is one period: a filled body spanning open->close and a wick
spanning low->high. Candles are coloured by direction - up when close >= open,
down otherwise - which is the whole point of the form.

Rendered entirely with QPainter and NO QtCharts dependency. That is
deliberate and load-bearing: Qt Charts is GPLv3-or-commercial with no LGPL
option, so anything built on it cannot ship inside a proprietary wheel. This
widget stays clean.

Data goes in with setData([(open, high, low, close), ...]) in code, or the
ohlcCsv property in Qt Designer ("o,h,l,c;o,h,l,c;..."), following the
valuesCsv convention used by the other painted charts.

Emits candleHovered(int) and candleClicked(int); -1 means "nothing".

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomCandlestickChart import QCustomCandlestickChart` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomCandlestickChart import QCustomCandlestickChart

widget = QCustomCandlestickChart()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `ohlcCsv` | `string` | — |
| `labelsCsv` | `string` | — |
| `showGrid` | `bool` | `True` |
| `showPriceAxis` | `bool` | `True` |
| `showLabels` | `bool` | `True` |
| `showTooltip` | `bool` | `True` |
| `hollowUpCandles` | `bool` | `False` |
| `candleWidthRatio` | `float` | `0.62` |
| `gridLines` | `int` | `4` |
| `pricePrecision` | `int` | `2` |
| `upColor` | `color` | `#16a34a` |
| `downColor` | `color` | `#dc2626` |
| `wickColor` | `color` | `#64748b` |
| `gridColor` | `color` | `#e2e8f0` |
| `axisTextColor` | `color` | `#64748b` |
| `tooltipBackgroundColor` | `color` | — |
| `tooltipTextColor` | `color` | — |

## Signals

| Signal |
|---|
| `candleClicked(int)` |
| `candleHovered(int)` |

## Methods

| Method | Description |
|---|---|
| `axisTextColor(*args, **kwargs)` |  |
| `candleAt(pos)` | Index of the candle under a point, or -1. |
| `candleClicked(...)` |  |
| `candleHovered(...)` |  |
| `candleWidthRatio(*args, **kwargs)` |  |
| `count()` |  |
| `data()` |  |
| `downColor(*args, **kwargs)` |  |
| `gridColor(*args, **kwargs)` |  |
| `gridLines(*args, **kwargs)` |  |
| `hollowUpCandles(*args, **kwargs)` |  |
| `labels()` |  |
| `labelsCsv(*args, **kwargs)` |  |
| `ohlcCsv(*args, **kwargs)` |  |
| `pricePrecision(*args, **kwargs)` |  |
| `priceRange()` | (low, high) across every candle, or (0.0, 1.0) when empty. |
| `setData(data, labels=None)` | Replace every candle. Each item is (open, high, low, close). |
| `setLabels(labels)` |  |
| `showGrid(*args, **kwargs)` |  |
| `showLabels(*args, **kwargs)` |  |
| `showPriceAxis(*args, **kwargs)` |  |
| `showTooltip(*args, **kwargs)` |  |
| `tooltipBackgroundColor(*args, **kwargs)` |  |
| `tooltipTextColor(*args, **kwargs)` |  |
| `upColor(*args, **kwargs)` |  |
| `wickColor(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `success`, `destructive`, `outline`, `on-surface`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomCandlestickChart/main.py`.

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md) · [QCustomDonut](QCustomDonut.md)
