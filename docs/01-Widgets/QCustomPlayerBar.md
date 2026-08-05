---
title: QCustomPlayerBar
description: A NOW-PLAYING transport bar.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomPlayerBar

![QCustomPlayerBar](/img/showcase/playerbar.png)

A NOW-PLAYING transport bar.

The signature music-app footer: a rounded bar with, left-to-right, the
current track's COVER + TITLE/ARTIST, a transport cluster (PREV, a big
circular PLAY/PAUSE, NEXT), an elapsed/total SEEK slider you can click and
drag, and a right cluster of FAVOURITE, SHUFFLE, REPEAT and VOLUME toggles.
Every glyph is PAINTED as a vector (no font/unicode icons) so it recolours
on a theme switch and stays crisp at any DPI. Seek + toggles are live and
emit Qt signals — wire them to a real QMediaPlayer.

Signals: playToggled(bool), nextClicked(), prevClicked(), seeked(float 0..1),
favoriteToggled(bool), shuffleToggled(bool), repeatToggled(bool),
volumeClicked(). Configure via `title`, `artist`, `coverPath`, `position`,
`elapsedText`, `totalText`, `playing`, `favorite`, `shuffle`, `repeat`.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomPlayerBar import QCustomPlayerBar` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomPlayerBar import QCustomPlayerBar

widget = QCustomPlayerBar()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomPlayerBar in dark theme](/img/showcase/playerbar-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `title` | `string` | `Echoes of Midnight` |
| `artist` | `string` | `Jon Hickman` |
| `elapsedText` | `string` | `0:53` |
| `totalText` | `string` | `3:58` |
| `playing` | `bool` | `False` |
| `favorite` | `bool` | `False` |
| `shuffle` | `bool` | `False` |
| `repeat` | `bool` | `False` |
| `barColor` | `color` | `#171923` |
| `accentColor` | `color` | `#26c99e` |
| `trackColor` | `color` | `#33ffffff` |
| `textColor` | `color` | `#ffffff` |
| `subTextColor` | `color` | `#8b90a3` |
| `iconColor` | `color` | `#c7ccdb` |
| `playBtnColor` | `color` | `#e9ebf2` |
| `coverPath` | `string` | — |
| `position` | `float` | `0.22` |
| `cornerRadius` | `int` | `20` |
| `durationSeconds` | `float` | — |
| `elapsedSeconds` | `float` | — |
| `compactMode` | `bool` | `False` |

## Signals

| Signal |
|---|
| `favoriteToggled(bool)` |
| `nextClicked()` |
| `playToggled(bool)` |
| `prevClicked()` |
| `repeatToggled(bool)` |
| `seeked(double)` |
| `shuffleToggled(bool)` |
| `volumeClicked()` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` | Accent color. |
| `artist(*args, **kwargs)` | Artist. |
| `barColor(*args, **kwargs)` | Bar color. |
| `compactMode(*args, **kwargs)` | Opt-in stacked layout (cover+titles / seek / centred transport) for |
| `cornerRadius(*args, **kwargs)` | Corner radius. |
| `coverPath(*args, **kwargs)` | Cover path. |
| `durationSeconds(*args, **kwargs)` | Duration seconds. |
| `elapsedSeconds(*args, **kwargs)` | Elapsed seconds. |
| `elapsedText(*args, **kwargs)` | Elapsed text. |
| `favorite(*args, **kwargs)` | Favorite. |
| `favoriteToggled(...)` | Favorite toggled. |
| `iconColor(*args, **kwargs)` | Icon color. |
| `nextClicked(...)` | Next clicked. |
| `playBtnColor(*args, **kwargs)` | Play btn color. |
| `playToggled(...)` | Play toggled. |
| `playing(*args, **kwargs)` | Playing. |
| `position(*args, **kwargs)` | Position. |
| `prevClicked(...)` | Prev clicked. |
| `repeat(*args, **kwargs)` | Repeat. |
| `repeatToggled(...)` | Repeat toggled. |
| `seeked(...)` | Seeked. |
| `setCoverSource(source)` | Set the track cover from a local PATH or an http(s) URL (URL is |
| `setPlaying(on)` | Set the playing. |
| `setTrack(title=None, artist=None, coverPath=None, elapsed=None, total=None, position=None)` | Set the track. |
| `shuffle(*args, **kwargs)` | Shuffle. |
| `shuffleToggled(...)` | Shuffle toggled. |
| `subTextColor(*args, **kwargs)` | Sub text color. |
| `textColor(*args, **kwargs)` | Text color. |
| `title(*args, **kwargs)` | Title. |
| `totalText(*args, **kwargs)` | Total text. |
| `trackColor(*args, **kwargs)` | Track color. |
| `volumeClicked(...)` | Volume clicked. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `surface`, `on-surface`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomCoverFlow](QCustomCoverFlow.md) · [QCustomImageViewer](QCustomImageViewer.md) · [QCustomMediaGrid](QCustomMediaGrid.md) · [QCustomMediaTimeline](QCustomMediaTimeline.md) · [QCustomVideoPlayer](QCustomVideoPlayer.md) · [QCustomVoiceMessage](QCustomVoiceMessage.md) · [QCustomWallpaper](QCustomWallpaper.md)
