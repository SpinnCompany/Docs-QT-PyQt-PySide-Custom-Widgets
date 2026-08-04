---
title: QCustomFeaturedIcon
description: An icon in a decorative container.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomFeaturedIcon

![QCustomFeaturedIcon](/img/showcase/featuredicon.png)

An icon in a decorative container.

The little coloured tile that sits above a feature headline or beside an
empty state: an icon on a shaped, tinted background. Trivial to draw and
tedious to redo by hand in every layout, which is exactly why it belongs in
the catalog.

Painted with QPainter; the icon itself is a QIcon so it themes and scales
like every other icon in the library.

Emits clicked() so it can double as a soft button.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomFeaturedIcon import QCustomFeaturedIcon` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomFeaturedIcon import QCustomFeaturedIcon

widget = QCustomFeaturedIcon()
widget.setIcon(QIcon(_iconPath("rocket.png")))
widget.variant = "tinted"
widget.shape = "rounded"
widget.sizeVariant = "lg"
```

That is the exact code behind the screenshot above.

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomFeaturedIcon in dark theme](/img/showcase/featuredicon-dark.png)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `iconPath` | `string` | — |
| `shape` | `enum: `circle` / `rounded` / `square`` | `rounded` |
| `variant` | `enum: `tinted` / `filled` / `outline` / `gradient`` | `tinted` |
| `sizeVariant` | `enum: `sm` / `md` / `lg` / `xl`` | `md` |
| `cornerRadius` | `int` | `12` |
| `accentColor` | `color` | `#2563eb` |
| `iconColor` | `color` | `#2563eb` |
| `surfaceColor` | `color` | `#ffffff` |

## Signals

| Signal |
|---|
| `clicked()` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` |  |
| `clicked(...)` |  |
| `cornerRadius(*args, **kwargs)` |  |
| `hasIcon()` |  |
| `icon()` |  |
| `iconColor(*args, **kwargs)` |  |
| `iconPath(*args, **kwargs)` |  |
| `setIcon(icon)` |  |
| `shape(*args, **kwargs)` |  |
| `sizeVariant(*args, **kwargs)` |  |
| `surfaceColor(*args, **kwargs)` |  |
| `variant(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `surface`, `on-primary`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomFeaturedIcon/main.py`.

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
