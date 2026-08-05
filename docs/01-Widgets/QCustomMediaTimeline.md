---
title: QCustomMediaTimeline
description: A horizontal multi-track clip / scrubber timeline.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomMediaTimeline

:::info Pro widget

`QCustomMediaTimeline` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.org/pricing/)

:::

![QCustomMediaTimeline](/img/showcase/mediatimeline.png)

A horizontal multi-track clip / scrubber timeline.

The bottom-of-a-video/animation-tool surface: a time RULER with labelled
ticks (0:01 .. 0:09), a draggable PLAYHEAD, and one or more TRACK lanes.
A track is either a lane of rounded CLIP blocks (move the body, trim from
either edge) or a WAVEFORM lane (an audio waveform painted from sample
values). Everything is painted with QPainter so it stays crisp at any size
and every colour is a qproperty that tracks the theme.

Drag on the ruler (or the playhead) to scrub -> positionChanged(seconds).
Drag a clip body -> clipMoved(track, clip); drag a clip edge -> clipTrimmed.
Build it declaratively: setDuration(), addTrack(), addClip()/setWaveform(),
or setTimeline({...}).

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomMediaTimeline import QCustomMediaTimeline` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomMediaTimeline import QCustomMediaTimeline

widget = QCustomMediaTimeline()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomMediaTimeline in dark theme](/img/showcase/mediatimeline-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `duration` | `double` | `10.0` |
| `position` | `double` | `1.0` |
| `playing` | `bool` | `False` |
| `loop` | `bool` | `True` |
| `animated` | `bool` | `True` |
| `bgColor` | `color` | `#12141c` |
| `rulerColor` | `color` | `#8b90a6` |
| `playheadColor` | `color` | `#e7e9f3` |
| `trackBgColor` | `color` | `#1b1e2a` |
| `clipColor` | `color` | `#c17ce0` |
| `waveColor` | `color` | `#8b90a6` |
| `textColor` | `color` | `#e7e9f3` |
| `cornerRadius` | `int` | `10` |

## Signals

| Signal |
|---|
| `clipClicked(int,int)` |
| `clipMoved(int,int)` |
| `clipTrimmed(int,int)` |
| `playToggled(bool)` |
| `positionChanged(double)` |

## Methods

| Method | Description |
|---|---|
| `addClip(track, start, end, color=None, label='')` |  |
| `addTrack(name='Track', kind='clips', color=None)` |  |
| `animated(*args, **kwargs)` |  |
| `bgColor(*args, **kwargs)` |  |
| `clear()` |  |
| `clipClicked(...)` |  |
| `clipColor(*args, **kwargs)` |  |
| `clipMoved(...)` |  |
| `clipTrimmed(...)` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `duration(*args, **kwargs)` |  |
| `isPlaying()` |  |
| `loop(*args, **kwargs)` |  |
| `pause()` |  |
| `play()` |  |
| `playToggled(...)` |  |
| `playheadColor(*args, **kwargs)` |  |
| `playing(*args, **kwargs)` |  |
| `position(*args, **kwargs)` |  |
| `positionChanged(...)` |  |
| `positionSeconds()` |  |
| `rulerColor(*args, **kwargs)` |  |
| `setAnimated(on)` | Enable/disable animation entirely (stops playback when disabled). |
| `setDuration(seconds)` |  |
| `setPlaying(on)` |  |
| `setPosition(seconds)` |  |
| `setTimeline(data)` | data = {"duration":10, "position":1, |
| `setWaveform(track, values)` |  |
| `textColor(*args, **kwargs)` |  |
| `togglePlay()` |  |
| `trackBgColor(*args, **kwargs)` |  |
| `waveColor(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `background`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomCoverFlow](QCustomCoverFlow.md) · [QCustomImageViewer](QCustomImageViewer.md) · [QCustomMediaGrid](QCustomMediaGrid.md) · [QCustomPlayerBar](QCustomPlayerBar.md) · [QCustomVideoPlayer](QCustomVideoPlayer.md) · [QCustomVoiceMessage](QCustomVoiceMessage.md) · [QCustomWallpaper](QCustomWallpaper.md)
