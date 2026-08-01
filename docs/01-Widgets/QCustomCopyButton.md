---
title: QCustomCopyButton
description: Copy-to-clipboard with confirmation.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomCopyButton

Copy-to-clipboard with confirmation.

The small button beside a code block, an API key or a share link. The whole
value of the control is the FEEDBACK: a copy that gives no acknowledgement
leaves the user pressing it again to be sure, so this flips to a "Copied!"
state and returns on a timer.

Painted so the confirmation can morph rather than swapping stylesheets, and
so the tick is drawn rather than being a unicode glyph (the design lint
rejects glyph icons).

Emits copied(str) with the text that was placed on the clipboard.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomCopyButton import QCustomCopyButton` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomCopyButton import QCustomCopyButton

widget = QCustomCopyButton()
```

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `payload` | `string` | — |
| `text` | `string` | `Copy` |
| `copiedText` | `string` | `Copied!` |
| `resetDelay` | `int` | `1600` |
| `variant` | `enum: `outline` / `ghost` / `solid`` | `outline` |
| `iconOnly` | `bool` | `False` |
| `accentColor` | `color` | `#2563eb` |
| `successColor` | `color` | `#16a34a` |
| `textColor` | `color` | `#0f172a` |
| `surfaceColor` | `color` | `#ffffff` |

## Signals

| Signal |
|---|
| `copied(QString)` |

## Methods

| Method | Description |
|---|---|
| `accentColor(*args, **kwargs)` |  |
| `copied(...)` |  |
| `copiedText(*args, **kwargs)` |  |
| `copy()` | Put the payload on the clipboard and confirm. False if empty. |
| `iconOnly(*args, **kwargs)` |  |
| `isConfirming()` |  |
| `payload(*args, **kwargs)` |  |
| `resetDelay(*args, **kwargs)` |  |
| `successColor(*args, **kwargs)` |  |
| `surfaceColor(*args, **kwargs)` |  |
| `text(*args, **kwargs)` |  |
| `textColor(*args, **kwargs)` |  |
| `variant(*args, **kwargs)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `success`, `on-surface`, `surface`, `outline`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomCopyButton/main.py`.

## Related

[QCustomActionButton](QCustomActionButton.md) · [QCustomQPushButton](QCustomQPushButton.md) · [QCustomQPushButtonGroup](QCustomQPushButtonGroup.md) · [QCustomRainbowButton](QCustomRainbowButton.md) · [QCustomSocialButton](QCustomSocialButton.md) · [QCustomThemeDarkLightToggle](QCustomThemeDarkLightToggle.md) · [QCustomTileButton](QCustomTileButton.md)
