---
title: QCustomStepper
description: A step progress indicator.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomStepper

![QCustomStepper](/img/showcase/stepper.gif)

A step progress indicator.

A row (or column) of numbered steps with connectors, showing progress:
completed / active / pending. Tokenized via a `state` dynamic property on
the circles and connectors.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomStepper import QCustomStepper` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomStepper import QCustomStepper

widget = QCustomStepper()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomStepper in dark theme](/img/showcase/stepper-dark.gif)

## Signals

| Signal |
|---|
| `currentStepChanged(int)` |

## Methods

| Method | Description |
|---|---|
| `currentStep()` |  |
| `currentStepChanged(...)` |  |
| `isComplete()` |  |
| `next()` |  |
| `previous()` |  |
| `setCurrentStep(index)` |  |
| `setSteps(titles)` |  |
| `stepCount()` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `surface-muted`, `outline`, `accent`, `on-primary`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomBreadcrumbs](QCustomBreadcrumbs.md) · [QCustomCommandPalette](QCustomCommandPalette.md) · [QCustomDrawer](QCustomDrawer.md) · [QCustomHamburgerMenu](QCustomHamburgerMenu.mdx) · [QCustomHeaderNav](QCustomHeaderNav.md) · [QCustomMenu](QCustomMenu.md) · [QCustomPagination](QCustomPagination.md) · [QCustomSidebar](QCustomSidebar.md)
