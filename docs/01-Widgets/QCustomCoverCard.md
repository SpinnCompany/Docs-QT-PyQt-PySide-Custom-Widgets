---
title: QCustomCoverCard
description: An album / song COVER card.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomCoverCard

An album / song COVER card.

A rounded album-art tile: the cover image fills a rounded rectangle
(centre-cropped, KeepAspectRatioByExpanding), a bottom gradient SCRIM
darkens the lower third, and a bold TITLE over a muted ARTIST sit at the
bottom-left. A translucent circular PLAY badge fades in on hover (or is
pinned on with `showPlay`). Everything is painted with QPainter so it stays
crisp at any size and recolours on a theme switch (all colours are
qproperties). When no `coverPath` is set it paints a two-stop gradient from
`accentColor` so it still previews in Designer / render_widget.

It is a QAbstractButton, so it emits clicked() — drop it in a "Popular
songs" / "Recently played" row or a coverflow. Give it `title`, `artist`
and `coverPath` in code or Qt Designer.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomCoverCard import QCustomCoverCard` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomCoverCard import QCustomCoverCard

widget = QCustomCoverCard()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `text` | `string` | — |
| `icon` | `QIcon` | — |
| `iconSize` | `QSize` | — |
| `shortcut` | `QKeySequence` | — |
| `checkable` | `bool` | — |
| `checked` | `bool` | — |
| `autoRepeat` | `bool` | — |
| `autoExclusive` | `bool` | — |
| `autoRepeatDelay` | `int` | — |
| `autoRepeatInterval` | `int` | — |
| `down` | `bool` | — |
| `title` | `string` | `Golden Days` |
| `artist` | `string` | `Felix Carter` |
| `coverPath` | `string` | — |
| `accentColor` | `color` | `#e0592f` |
| `titleColor` | `color` | `#ffffff` |
| `artistColor` | `color` | `#d0d0d8` |
| `cornerRadius` | `int` | `22` |
| `scrimStrength` | `float` | `0.85` |
| `scrimColor` | `color` | `#06080e` |
| `showPlay` | `bool` | `False` |
| `playOnHover` | `bool` | `True` |
| `titleScale` | `float` | `1.0` |
| `textAlign` | `enum: `left` / `center`` | `left` |

## Signals

| Signal |
|---|
| `playClicked()` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` |  |
| `artist(*args, **kwargs)` |  |
| `artistColor(*args, **kwargs)` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `coverPath(*args, **kwargs)` |  |
| `playClicked(...)` |  |
| `playOnHover(*args, **kwargs)` |  |
| `scrimColor(*args, **kwargs)` |  |
| `scrimStrength(*args, **kwargs)` |  |
| `setArtist(text)` |  |
| `setCoverPath(path)` |  |
| `setData(title=None, artist=None, coverPath=None)` |  |
| `setTitle(text)` |  |
| `showPlay(*args, **kwargs)` |  |
| `textAlign(*args, **kwargs)` |  |
| `title(*args, **kwargs)` |  |
| `titleColor(*args, **kwargs)` |  |
| `titleScale(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `on-surface`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
