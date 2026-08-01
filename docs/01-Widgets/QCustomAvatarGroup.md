---
title: QCustomAvatarGroup
description: A row of overlapping avatars with overflow.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomAvatarGroup

A row of overlapping avatars with overflow.

Circular initials-avatars overlap; beyond `maxVisible` a "+N" chip shows
the remainder. Each avatar's colour is derived deterministically from its
name. The separating ring colour comes from tokens (qproperty ringColor).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomAvatarGroup import QCustomAvatarGroup` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomAvatarGroup import QCustomAvatarGroup

widget = QCustomAvatarGroup()
widget.setAvatars(["Amara Mensah", "Ben Ortiz", "Chidi Okafor", "Dana Levy",
          "Eli Novak", "Farah Aziz"])
```

That is the exact code behind the screenshot above.

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `maxVisible` | `int` | `4` |
| `ringColor` | `color` | — |
| `overflowBg` | `color` | — |
| `overflowText` | `color` | — |

## Methods

| Method | Description |
|---|---|
| `maxVisible(*args, **kwargs)` |  |
| `names()` |  |
| `overflowBg(*args, **kwargs)` |  |
| `overflowText(*args, **kwargs)` |  |
| `ringColor(*args, **kwargs)` |  |
| `setAvatars(names)` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `surface-muted`, `on-surface`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md) · [QCustomClockLabel](QCustomClockLabel.md)
