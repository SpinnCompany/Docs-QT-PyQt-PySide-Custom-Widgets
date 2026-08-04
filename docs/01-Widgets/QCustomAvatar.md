---
title: QCustomAvatar
description: A single circular avatar with an optional status dot.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomAvatar

![QCustomAvatar](/img/showcase/avatar.png)

A single circular avatar with an optional status dot.

Shows either initials (text) or an image, clipped to a circle, over a solid
fill. An optional status / notification dot sits in a corner with a ring that
separates it from whatever is behind the avatar (set statusBorderColor to the
surface colour). An optional outer ring frames the whole avatar. Everything is
painted with QPainter so it stays crisp at any size and needs no children.
Emits `clicked` so it can act as a profile button.

(QCustomAvatarGroup already exists for a row of overlapping avatars; this is
the single, status-aware building block.)

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomAvatar import QCustomAvatar` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomAvatar import QCustomAvatar

widget = QCustomAvatar()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomAvatar in dark theme](/img/showcase/avatar-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `text` | `string` | `M` |
| `imageSource` | `string` | — |
| `cornerRadius` | `int` | `-1` |
| `bgColor` | `color` | `#3355e8` |
| `textColor` | `color` | `#ffffff` |
| `showStatus` | `bool` | `True` |
| `statusColor` | `color` | `#f2704e` |
| `statusPosition` | `enum: `top-right` / `bottom-right` / `top-left` / `bottom-left`` | `top-right` |
| `statusBorderColor` | `color` | `#ffffff` |
| `ringColor` | `color` | `#00000000` |
| `ringWidth` | `int` | `0` |

## Signals

| Signal |
|---|
| `clicked()` |

## Methods

| Method | Description |
|---|---|
| `bgColor(*args, **kwargs)` |  |
| `clicked(...)` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `imageSource(*args, **kwargs)` |  |
| `ringColor(*args, **kwargs)` |  |
| `ringWidth(*args, **kwargs)` |  |
| `setBgColor(c)` |  |
| `setImage(image)` |  |
| `setImageSource(source)` | Set the avatar image from a local PATH or an http(s) URL — the URL is |
| `setStatus(visible, color=None)` |  |
| `setText(text)` |  |
| `showStatus(*args, **kwargs)` |  |
| `statusBorderColor(*args, **kwargs)` |  |
| `statusColor(*args, **kwargs)` |  |
| `statusPosition(*args, **kwargs)` |  |
| `text(*args, **kwargs)` |  |
| `textColor(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md) · [QCustomClockLabel](QCustomClockLabel.md)
