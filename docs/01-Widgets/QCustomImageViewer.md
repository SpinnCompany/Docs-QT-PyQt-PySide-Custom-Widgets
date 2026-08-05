---
title: QCustomImageViewer
description: A modal lightbox for a gallery of images.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomImageViewer

:::info Pro widget

`QCustomImageViewer` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.org/pricing/)

:::

![QCustomImageViewer](/img/showcase/imageviewer.png)

A modal lightbox for a gallery of images.

A frameless overlay that covers its host window with a dark scrim and
shows one image centred (aspect-fit), with painted prev / next arrows, a
close button and a "3 / 12" counter. Feed it images with setImages([...])
(QPixmap / path) and open a given one with openAt(index, host); it parents
itself to the host and resizes to cover it. Left / Right / Esc navigate and
close; clicking the scrim closes. Emits indexChanged(int) and closed(). The
scrim is intentionally dark in every theme (a lightbox convention); its
colours are qproperties so a form can still retint them.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomImageViewer import QCustomImageViewer` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomImageViewer import QCustomImageViewer

widget = QCustomImageViewer()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomImageViewer in dark theme](/img/showcase/imageviewer-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `scrimColor` | `color` | `#e60a0e18` |
| `buttonColor` | `color` | `#1cffffff` |
| `buttonIconColor` | `color` | `#ffffff` |
| `textColor` | `color` | `#eef1f6` |
| `imageRadius` | `int` | `16` |

## Signals

| Signal |
|---|
| `closed()` |
| `indexChanged(int)` |

## Methods

| Method | Description |
|---|---|
| `buttonColor(*args, **kwargs)` |  |
| `buttonIconColor(*args, **kwargs)` |  |
| `closeEvent(e)` |  |
| `closed(...)` |  |
| `count()` |  |
| `imageRadius(*args, **kwargs)` |  |
| `index()` |  |
| `indexChanged(...)` |  |
| `openAt(index, host=None)` | Cover `host` (or the current parent) and show image `index`. |
| `scrimColor(*args, **kwargs)` |  |
| `setImageAt(index, pm)` | Swap one image in place (e.g. the full-res photo arriving async). |
| `setImages(images)` |  |
| `setIndex(i)` |  |
| `textColor(*args, **kwargs)` |  |

## Related

[QCustomCoverFlow](QCustomCoverFlow.md) · [QCustomMediaGrid](QCustomMediaGrid.md) · [QCustomMediaTimeline](QCustomMediaTimeline.md) · [QCustomPlayerBar](QCustomPlayerBar.md) · [QCustomVideoPlayer](QCustomVideoPlayer.md) · [QCustomVoiceMessage](QCustomVoiceMessage.md) · [QCustomWallpaper](QCustomWallpaper.md)
