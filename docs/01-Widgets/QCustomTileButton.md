---
title: QCustomTileButton
description: A selectable device / action TILE.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomTileButton

![QCustomTileButton](/img/showcase/tilebutton.png)

A selectable device / action TILE.

A rounded-rectangle button with a line ICON above a CAPTION — the classic
smart-home / launcher tile. It is CHECKABLE: the selected tile paints a
two-stop diagonal GRADIENT (e.g. purple->pink) with light icon+text, the
rest paint a flat card fill with muted icon+text. Painted with QPainter so
it stays crisp at any size and recolours on a theme switch (all colours are
qproperties); the icon is a recoloured SVG so it flips light/muted with the
selected state.

Give it an icon with `iconPath` (an .svg) + a `caption` in code or Qt
Designer. It is a QAbstractButton, so it emits clicked()/toggled(bool) and
participates in a QButtonGroup for single-select device grids.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomTileButton import QCustomTileButton` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomTileButton import QCustomTileButton

widget = QCustomTileButton()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomTileButton in dark theme](/img/showcase/tilebutton-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `text` | `string` | — |
| `icon` | `QIcon` | — |
| `iconSize` | `int` | `34` |
| `shortcut` | `QKeySequence` | — |
| `checkable` | `bool` | — |
| `checked` | `bool` | — |
| `autoRepeat` | `bool` | — |
| `autoExclusive` | `bool` | — |
| `autoRepeatDelay` | `int` | — |
| `autoRepeatInterval` | `int` | — |
| `down` | `bool` | — |
| `caption` | `string` | `Lights` |
| `iconPath` | `string` | — |
| `gradientStart` | `color` | `#a05cf0` |
| `gradientEnd` | `color` | `#f45c9c` |
| `bgColor` | `color` | `#242850` |
| `iconColor` | `color` | `#9aa0c6` |
| `activeColor` | `color` | `#ffffff` |
| `cornerRadius` | `int` | `16` |

## Methods

| Method | Description |
|---|---|
| `activeColor(*args, **kwargs)` |  |
| `bgColor(*args, **kwargs)` |  |
| `caption(*args, **kwargs)` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `gradientEnd(*args, **kwargs)` |  |
| `gradientStart(*args, **kwargs)` |  |
| `iconColor(*args, **kwargs)` |  |
| `iconPath(*args, **kwargs)` |  |
| `iconSize(*args, **kwargs)` |  |
| `setCaption(text)` |  |
| `setGradient(start, end)` |  |
| `setIconPath(path)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomActionButton](QCustomActionButton.md) · [QCustomCopyButton](QCustomCopyButton.md) · [QCustomQPushButton](QCustomQPushButton.md) · [QCustomQPushButtonGroup](QCustomQPushButtonGroup.md) · [QCustomRainbowButton](QCustomRainbowButton.md) · [QCustomSocialButton](QCustomSocialButton.md) · [QCustomThemeDarkLightToggle](QCustomThemeDarkLightToggle.md)
