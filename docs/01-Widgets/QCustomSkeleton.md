---
title: QCustomSkeleton
description: A shimmering loading placeholder.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomSkeleton

![QCustomSkeleton](/img/showcase/skeleton.gif)

A shimmering loading placeholder.

A rounded shape (line / rect / circle) with a moving shimmer, shown while
real content loads. Colours come from tokens via qproperty (baseColor /
highlightColor set by skeleton_qss).

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomSkeleton import QCustomSkeleton` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomSkeleton import QCustomSkeleton

widget = QCustomSkeleton()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomSkeleton in dark theme](/img/showcase/skeleton-dark.gif)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `shape` | `enum: `line` / `rect` / `circle`` | `line` |
| `baseColor` | `color` | — |
| `highlightColor` | `color` | — |

## Methods

| Method | Description |
|---|---|
| `baseColor(*args, **kwargs)` |  |
| `highlightColor(*args, **kwargs)` |  |
| `shape(*args, **kwargs)` |  |
| `start()` |  |
| `stop()` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface-muted`, `surface`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
