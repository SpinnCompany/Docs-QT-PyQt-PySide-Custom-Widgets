---
title: QCustomSocialButton
description: A brand-coloured sign-in / share button.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomSocialButton

![QCustomSocialButton](/img/showcase/socialbutton.gif)

A brand-coloured sign-in / share button.

"Continue with GitHub", "Share on X". The brand colour is the whole point,
so the widget ships a small table of them and picks the readable foreground
automatically rather than making every caller look up a hex value and then
get the contrast wrong.

The brand MARK is deliberately not drawn: reproducing a company logo is a
trademark question, not a painting one, so the caller supplies an icon and
the widget supplies the colour, shape and layout. `brandColor` is exposed so
an unlisted brand still works.

Emits clicked().

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomSocialButton import QCustomSocialButton` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomSocialButton import QCustomSocialButton

widget = QCustomSocialButton()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomSocialButton in dark theme](/img/showcase/socialbutton-dark.gif)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `brand` | `string` | `github` |
| `text` | `string` | — |
| `iconPath` | `string` | — |
| `variant` | `enum: `solid` / `outline` / `soft`` | `solid` |
| `shape` | `enum: `rounded` / `pill` / `square`` | `rounded` |
| `sizeVariant` | `enum: `sm` / `md` / `lg`` | `md` |
| `iconOnly` | `bool` | `False` |
| `brandColor` | `color` | `#24292f` |
| `surfaceColor` | `color` | `#ffffff` |

## Signals

| Signal |
|---|
| `clicked()` |

## Methods

| Method | Description |
|---|---|
| `brand(*args, **kwargs)` | Brand. |
| `brandColor(*args, **kwargs)` | Brand color. |
| `brandNames()` | Brand names. |
| `clicked(...)` | Clicked. |
| `foregroundColor()` | Readable text colour for the current fill. |
| `iconOnly(*args, **kwargs)` | Icon only. |
| `iconPath(*args, **kwargs)` | Icon path. |
| `isKnownBrand()` | Return whether the widget is known brand. |
| `setBrand(brand)` | Adopt a known brand's colour and default caption. |
| `shape(*args, **kwargs)` | Shape. |
| `sizeVariant(*args, **kwargs)` | Size variant. |
| `surfaceColor(*args, **kwargs)` | Surface color. |
| `text(*args, **kwargs)` | Text. |
| `variant(*args, **kwargs)` | Variant. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomSocialButton/main.py`.

## Related

[QCustomActionButton](QCustomActionButton.md) · [QCustomCopyButton](QCustomCopyButton.md) · [QCustomQPushButton](QCustomQPushButton.md) · [QCustomQPushButtonGroup](QCustomQPushButtonGroup.md) · [QCustomRainbowButton](QCustomRainbowButton.md) · [QCustomThemeDarkLightToggle](QCustomThemeDarkLightToggle.md) · [QCustomTileButton](QCustomTileButton.md)
