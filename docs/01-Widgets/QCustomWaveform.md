---
title: QCustomWaveform
description: A standalone audio-bars / streaming-line visualiser.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomWaveform

![QCustomWaveform](/img/showcase/waveform.png)

A standalone audio-bars / streaming-line visualiser.

Two modes (`mode`):
"bars" (default) - an equalizer / audio-level bar viz (the "Water" card):
one rounded bar per value, optional centre `mirror` (grows up + down),
gradient + optional glow.
"line" - a streaming line viz (the "110 bpm" ECG card): a polyline over an
optional faint grid, with an optional gradient fill under it.

Feed it a fixed series with setValues([...]) / the `valuesCsv` property, or
stream live with push(value) (a ring buffer of `capacity` samples scrolls).
Turn on `animated` for a self-running demo (audio levels / a heartbeat), so it
previews live in Designer / a demo without a data source.

Painted with QPainter; it FLEXes to the widget and all colours are qproperties
so they flip with the theme. Unlike QCustomVoiceMessage this is NOT chat-bound.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomWaveform import QCustomWaveform` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomWaveform import QCustomWaveform

widget = QCustomWaveform()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomWaveform in dark theme](/img/showcase/waveform-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `mode` | `enum: `bars` / `line`` | `bars` |
| `valuesCsv` | `string` | — |
| `capacity` | `int` | `48` |
| `barColor` | `color` | `#3aa0ff` |
| `barColor2` | `color` | `#7c5cff` |
| `barWidth` | `float` | `0.0` |
| `barGap` | `float` | `3.0` |
| `cornerRadius` | `int` | `3` |
| `mirror` | `bool` | `False` |
| `lineColor` | `color` | `#ff5c6c` |
| `lineWidth` | `float` | `2.2` |
| `showGrid` | `bool` | `False` |
| `gridColor` | `color` | `#242a38` |
| `fillArea` | `bool` | `False` |
| `glow` | `bool` | `False` |
| `glowStrength` | `float` | `0.6` |
| `animated` | `bool` | `False` |

## Signals

| Signal |
|---|
| `valuePushed(double)` |

## Methods

| Method | Description |
|---|---|
| `animated(*args, **kwargs)` |  |
| `barColor(*args, **kwargs)` |  |
| `barColor2(*args, **kwargs)` |  |
| `barGap(*args, **kwargs)` |  |
| `barWidth(*args, **kwargs)` |  |
| `capacity(*args, **kwargs)` |  |
| `clear()` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `fillArea(*args, **kwargs)` |  |
| `glow(*args, **kwargs)` |  |
| `glowStrength(*args, **kwargs)` |  |
| `gridColor(*args, **kwargs)` |  |
| `lineColor(*args, **kwargs)` |  |
| `lineWidth(*args, **kwargs)` |  |
| `mirror(*args, **kwargs)` |  |
| `mode(*args, **kwargs)` |  |
| `push(value)` |  |
| `setAnimated(on)` |  |
| `setMode(mode)` |  |
| `setValues(values)` |  |
| `showGrid(*args, **kwargs)` |  |
| `valuePushed(...)` |  |
| `values()` |  |
| `valuesCsv(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAreaChart](QCustomAreaChart.md) · [QCustomBarChart](QCustomBarChart.md) · [QCustomBeeswarm](QCustomBeeswarm.md) · [QCustomBubbleChart](QCustomBubbleChart.md) · [QCustomCandlestickChart](QCustomCandlestickChart.md) · [QCustomCompass](QCustomCompass.md) · [QCustomCompassDial](QCustomCompassDial.md) · [QCustomDivergingBarChart](QCustomDivergingBarChart.md)
