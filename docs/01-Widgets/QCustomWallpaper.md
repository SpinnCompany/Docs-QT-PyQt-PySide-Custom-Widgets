---
title: QCustomWallpaper
description: A full-bleed backdrop image widget.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomWallpaper

A full-bleed backdrop image widget.

The photo layer glass UIs sample: give it an `imageSource` (local path or
http(s) URL - downloaded + cached async via Custom_Widgets.ImageLoader) and
it paints the image COVER-FIT (fills, centre-cropped - never distorted like
a scaledContents QLabel). Until the image arrives (or offline) it paints a
three-stop diagonal gradient from `fallbackTop/Mid/Bottom` - qproperties,
so the fallback THEMES from QSS. Glass frames watching it via
backdropSource re-sample automatically when the photo lands.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomWallpaper import QCustomWallpaper` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomWallpaper import QCustomWallpaper

widget = QCustomWallpaper()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `imageSource` | `string` | — |
| `fallbackTop` | `color` | `#2b3550` |
| `fallbackMid` | `color` | `#4c4668` |
| `fallbackBottom` | `color` | `#1a1e30` |

## Signals

| Signal |
|---|
| `imageLoaded()` |

## Methods

| Method | Description |
|---|---|
| `fallbackBottom(*args, **kwargs)` |  |
| `fallbackMid(*args, **kwargs)` |  |
| `fallbackTop(*args, **kwargs)` |  |
| `imageLoaded(...)` |  |
| `imageSource(*args, **kwargs)` |  |
| `pixmap()` |  |
| `setImageSource(source)` |  |

## Related

[QCustomCoverFlow](QCustomCoverFlow.md) · [QCustomImageViewer](QCustomImageViewer.md) · [QCustomMediaGrid](QCustomMediaGrid.md) · [QCustomMediaTimeline](QCustomMediaTimeline.md) · [QCustomPlayerBar](QCustomPlayerBar.md) · [QCustomVideoPlayer](QCustomVideoPlayer.md) · [QCustomVoiceMessage](QCustomVoiceMessage.md)
