---
title: QCustomVideoPlayer
description: A poster-framed media/video player card.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomVideoPlayer

:::info Pro widget

`QCustomVideoPlayer` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

A poster-framed media/video player card.

A rounded poster image with a big centred play button and a bottom control
bar (play / pause, elapsed / total time, a seek track). Feed it a poster
with setPoster(pm) and a length with `duration` ("mm:ss"); pressing play
advances a simulated playhead (a QTimer) so it demos without any media
backend, and clicking the track seeks. It emits playToggled(bool) and
seeked(float 0..1). Everything is painted (crisp at any size, no assets) and
every colour is a qproperty so it tracks the theme.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomVideoPlayer import QCustomVideoPlayer` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomVideoPlayer import QCustomVideoPlayer

widget = QCustomVideoPlayer()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `duration` | `string` | `02:45` |
| `progress` | `float` | `0.0` |
| `playing` | `bool` | `False` |
| `radius` | `int` | `18` |
| `accentColor` | `color` | `#1b74e4` |
| `posterColor` | `color` | `#222838` |
| `barColor` | `color` | `#e6ffffff` |
| `trackColor` | `color` | `#4dffffff` |
| `textColor` | `color` | `#ffffff` |

## Signals

| Signal |
|---|
| `playToggled(bool)` |
| `seeked(double)` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` |  |
| `barColor(*args, **kwargs)` |  |
| `duration(*args, **kwargs)` |  |
| `playToggled(...)` |  |
| `playing(*args, **kwargs)` |  |
| `posterColor(*args, **kwargs)` |  |
| `progress(*args, **kwargs)` |  |
| `radius(*args, **kwargs)` |  |
| `seeked(...)` |  |
| `setPlaying(v)` |  |
| `setPoster(pm)` |  |
| `textColor(*args, **kwargs)` |  |
| `toggle()` |  |
| `trackColor(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomCoverFlow](QCustomCoverFlow.md) · [QCustomImageViewer](QCustomImageViewer.md) · [QCustomMediaGrid](QCustomMediaGrid.md) · [QCustomMediaTimeline](QCustomMediaTimeline.md) · [QCustomPlayerBar](QCustomPlayerBar.md) · [QCustomVoiceMessage](QCustomVoiceMessage.md) · [QCustomWallpaper](QCustomWallpaper.md)
