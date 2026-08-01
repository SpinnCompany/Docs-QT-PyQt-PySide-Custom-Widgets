---
title: QCustomMediaGrid
description: A data-driven thumbnail gallery.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomMediaGrid

:::info Pro widget

`QCustomMediaGrid` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.spinncode.com/pricing/)

:::

A data-driven thumbnail gallery.

The "Media, Files & Links" photo grid: a responsive grid of rounded
thumbnails. Feed it images with setImages([...]) (QPixmap / path) or coloured
placeholders with setPlaceholders([(top,bottom), …]); it lays them out in
`columns` with rounded corners and emits `tileClicked(index)` so a manager
can open a viewer. Layout, corner radius and spacing are Designer
qproperties — the manager supplies DATA only, never builds tiles.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomMediaGrid import QCustomMediaGrid` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomMediaGrid import QCustomMediaGrid

widget = QCustomMediaGrid()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `columns` | `int` | `3` |
| `spacing` | `int` | `8` |
| `tileRadius` | `int` | `12` |
| `tileHeight` | `int` | `60` |

## Signals

| Signal |
|---|
| `tileClicked(int)` |

## Methods

| Method | Description |
|---|---|
| `columns(*args, **kwargs)` |  |
| `count()` |  |
| `pixmaps()` | The current tile pixmaps (for feeding a lightbox / viewer). |
| `setImageAt(index, pm)` | Swap one tile's pixmap in place (e.g. a real photo arriving async). |
| `setImages(images)` |  |
| `setPlaceholders(pairs)` |  |
| `spacing(*args, **kwargs)` |  |
| `tileClicked(...)` |  |
| `tileHeight(*args, **kwargs)` |  |
| `tileRadius(*args, **kwargs)` |  |

## Related

[QCustomCoverFlow](QCustomCoverFlow.md) · [QCustomImageViewer](QCustomImageViewer.md) · [QCustomMediaTimeline](QCustomMediaTimeline.md) · [QCustomPlayerBar](QCustomPlayerBar.md) · [QCustomVideoPlayer](QCustomVideoPlayer.md) · [QCustomVoiceMessage](QCustomVoiceMessage.md) · [QCustomWallpaper](QCustomWallpaper.md)
