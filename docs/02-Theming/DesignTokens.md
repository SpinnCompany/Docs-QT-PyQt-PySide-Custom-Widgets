---
title: Design tokens
sidebar_label: Design tokens
description: The semantic colour roles every Custom Widget styles itself against, and how to apply or override them.
---

# Design tokens

Every painted widget in this library styles itself against **semantic roles**,
never against hard-coded colours. That is what makes a whole application flip
between light and dark with one call, and what lets you rebrand it by changing a
handful of values instead of auditing every widget.

The system is a hybrid of two layers:

* **Primitives** — raw, theme-independent scales (Tailwind-like): colour ramps,
  spacing, radius, font sizes and weights.
* **Semantic roles** — names that *reference* primitives and resolve
  differently per theme: `surface`, `primary`, `outline`, and so on.

Widgets only ever ask for semantic roles. A reference like `{color.blue.600}`
resolves through the primitive tree.

## Applying tokens

```python
from Custom_Widgets.JSonStyles.tokens import applyDesignTokens, DesignTokens

tokens = DesignTokens(theme="dark")          # "light" | "dark"
app.setStyleSheet(myWindowChrome(tokens))    # 1. your own chrome FIRST
applyDesignTokens(app, tokens=tokens)        # 2. widgets append their block
```

Order matters. `applyDesignTokens` wraps its output in markers and replaces only
that block, so a later `setStyleSheet(...)` — which wipes the entire sheet —
must come *before* it. Switching theme at runtime is just the same two lines
again with the other theme; the call is idempotent.

To read a single value, for your own chrome:

```python
tokens.role("surface-muted")   # '#f1f5f9' in light, '#1e293b' in dark
tokens.role("radius.md")       # raw primitive paths work too -> 8
```

## The semantic roles

| Role | Light | Dark |
| --- | --- | --- |
| `surface` | `#ffffff` | `#0f172a` |
| `surface-muted` | `#f1f5f9` | `#1e293b` |
| `on-surface` | `#0f172a` | `#f1f5f9` |
| `outline` | `#cbd5e1` | `#475569` |
| `primary` | `#2563eb` | `#3b82f6` |
| `primary-hover` | `#1d4ed8` | `#60a5fa` |
| `on-primary` | `#ffffff` | `#ffffff` |
| `secondary` | `#e2e8f0` | `#334155` |
| `secondary-hover` | `#cbd5e1` | `#475569` |
| `on-secondary` | `#0f172a` | `#f1f5f9` |
| `accent` | `#2563eb` | `#60a5fa` |
| `success` | `#16a34a` | `#22c55e` |
| `on-success` | `#ffffff` | `#ffffff` |
| `warning` | `#d97706` | `#f59e0b` |
| `on-warning` | `#ffffff` | `#ffffff` |
| `destructive` | `#dc2626` | `#ef4444` |
| `destructive-hover` | `#b91c1c` | `#f87171` |
| `on-destructive` | `#ffffff` | `#ffffff` |
| `info` | `#2563eb` | `#60a5fa` |
| `on-info` | `#ffffff` | `#ffffff` |
| `focus-ring` | `#3b82f6` | `#60a5fa` |

Each `on-*` role is the foreground guaranteed to be readable on the role it
names — use `on-primary` for text on a `primary` fill, not `on-surface`.

## Primitive scales

| Group | Keys |
| --- | --- |
| `color` | `white`, `black`, `slate.50…950`, `blue`, `red`, `green`, `amber` |
| `space` | `1` = 4px, `2` = 8, `3` = 12, `4` = 16, `6` = 24 |
| `radius` | `sm` = 4, `md` = 8, `lg` = 12, `full` = 9999 |
| `font.size` | `sm` = 13, `md` = 14, `lg` = 16, `xl` = 20, `2xl` = 28 |
| `font.weight` | `regular` 400, `medium` 500, `semibold` 600, `bold` 700 |

## Overriding a role

Pass a `semantic` mapping when constructing the token set. It is **keyed by
theme** and deep-merged over the defaults, so you only name what you change.
Values may be literals or `{primitive.path}` references:

```python
tokens = DesignTokens(theme="light", semantic={
    "light": {"primary": "#7c3aed", "primary-hover": "{color.blue.700}"},
    "dark":  {"primary": "#a855f7"},
})
applyDesignTokens(app, tokens=tokens)
```

`primitives=` takes the same treatment for the raw scales — handy for widening
a colour ramp your brand needs without redefining the rest.

Every widget that paints with `primary` picks the new brand colour up
immediately — including ones you never touched.

## Per-widget colour properties

Widgets also expose their colours as Qt properties (`textColor`,
`surfaceColor`, `accentColor`, …) so they are settable in Qt Designer and
overridable per instance. Those properties are *seeded* from the token roles
when the widget is polished, so leaving them alone is what keeps a widget
theme-aware. Set one explicitly and that widget opts out of theme switching for
that colour — which is occasionally exactly what you want, and otherwise a bug.

Each widget's reference page lists the roles it consumes under **Design
tokens**.

## Variants and sizes

Buttons and similar controls select their token set through dynamic
properties rather than separate stylesheets:

```python
button.variant = "primary"     # primary | secondary | outline | ghost | destructive
button.sizeVariant = "md"      # sm | md | lg
```

Set these as attributes, not via `setProperty`. See
[Styling guide](StylingGuide.md) for the QSS attribute selectors behind them.
