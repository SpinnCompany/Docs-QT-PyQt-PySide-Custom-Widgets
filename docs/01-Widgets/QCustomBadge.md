# QCustomBadge

`QCustomBadge` is a small, themed status indicator — a rounded pill for a short
label, a **count** (with an overflow cap), or a tiny **dot**. Its colour comes
from a **semantic variant** that follows the active light/dark theme, so you
never hard-code colours. It can also **float over another widget's corner**
(think a notification count on an icon button).

It replaces the legacy `QBadgeWidget`; see the
[migration note](../07-Appendices/v3-migration.md#qbadgewidget-to-qcustombadge).

---

## Overview

- **Three modes:** plain text, a count (`"12"` / `"99+"`), or a dot indicator.
- **Semantic variants:** eight theme-aware colours — no per-instance `QColor`.
- **Three sizes:** `sm` / `md` / `lg` via `sizeVariant`.
- **Overlay attach:** `attachTo()` pins the badge to a host widget's corner and
  tracks its resize.
- **Tokenized:** styled entirely from the design-token system, so it restyles
  live on theme change.
- **Clickable:** emits `clicked`.

---

## Constructor

```python
QCustomBadge(text="", parent=None, variant="default")
```

- **text** — initial label text (use `setCount` / `setDot` for the other modes).
- **parent** — the parent widget.
- **variant** — one of `default`, `primary`, `secondary`, `success`, `warning`,
  `destructive`, `info`, `outline` (defaults to `default`; an unknown value
  falls back to `default`).

---

## Modes

A badge is always in exactly one mode; the setters switch between them.

### Text

```python
badge = QCustomBadge("New", variant="primary")
badge.setText("Beta")          # switching text clears count/dot mode
```

### Count

```python
badge = QCustomBadge(variant="destructive")
badge.setCount(12)             # -> "12"
badge.setCount(150, maxCount=99)   # -> "99+"
badge.setCount(0)              # hidden (see setShowZero)
badge.setShowZero(True)        # keep it visible showing "0"
```

- `setCount(count, maxCount=None)` — shows the number, or `"{maxCount}+"` past
  the cap. A count of `0` **hides** the badge unless `setShowZero(True)`.

### Dot

```python
badge = QCustomBadge(variant="success")
badge.setDot(True)             # a small coloured circle, no text
```

---

## Variants & sizes

```python
badge.variant = "warning"      # default | primary | secondary | success
                               # warning | destructive | info | outline
badge.sizeVariant = "sm"       # sm | md | lg
```

Variants resolve to the design-token colour roles (background + matching
`on-*` text colour), so a `success` badge is green on the light theme and the
theme's green on dark — automatically.

---

## Overlay attach

Pin a badge over another widget's corner — it re-positions when the host
resizes.

```python
inbox = QPushButton("  Inbox  ")
count = QCustomBadge(variant="primary")
count.setCount(5)
count.attachTo(inbox, corner="topright", xOffset=-2, yOffset=2)
```

- `attachTo(target, corner="topright", xOffset=0, yOffset=0)` — `corner` is one
  of `topright`, `topleft`, `bottomright`, `bottomleft`. Pass `target=None` to
  detach.

---

## Properties

| Property | Type | Description |
|---|---|---|
| `text` | str | The label text (inherited `QLabel` property). |
| `variant` | str | Semantic colour variant (see list above). |
| `sizeVariant` | str | `sm` / `md` / `lg`. |
| `dot` | bool | Whether the badge is in dot mode. |

## Methods

| Method | Description |
|---|---|
| `setText(text)` | Plain-text mode. |
| `setCount(count, maxCount=None)` | Count mode with an optional overflow cap. |
| `setShowZero(show)` | Show (vs hide) a count of `0`. |
| `setDot(on=True)` | Dot mode. |
| `count()` | Current count, or `None` if not in count mode. |
| `isDot()` | Whether in dot mode. |
| `attachTo(target, corner, xOffset, yOffset)` | Float over a host widget. |

## Signals

| Signal | Description |
|---|---|
| `clicked()` | Emitted on a left-button press. |

---

## Usage example

```python
import sys
from qtpy.QtWidgets import (QApplication, QWidget, QVBoxLayout, QHBoxLayout,
                            QLabel, QPushButton)

from Custom_Widgets.QCustomBadge import QCustomBadge
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication(sys.argv)
applyDesignTokens(app, tokens=DesignTokens(theme="light"))   # theme the badges

window = QWidget()
layout = QVBoxLayout(window)

# every variant
variants = QHBoxLayout()
for v in ("default", "primary", "success", "warning", "destructive",
          "info", "outline"):
    variants.addWidget(QCustomBadge(v.capitalize(), variant=v))
layout.addLayout(variants)

# a count that floats over a button
inbox = QPushButton("  Inbox  ")
inbox.setMinimumHeight(40)
badge = QCustomBadge(variant="destructive")
badge.setCount(9)
badge.attachTo(inbox, corner="topright")
layout.addWidget(inbox)

window.show()
sys.exit(app.exec())
```

---

## Theming

`QCustomBadge` is styled from the design tokens (`badge_qss` in
`Custom_Widgets/JSonStyles/tokens.py`) and applied via `applyDesignTokens`, the
same as every other modern widget. Prefer a **variant** so the badge tracks the
theme. For a genuine one-off colour, target it in QSS by object name rather than
setting a `QColor` in Python:

```css
QCustomBadge#promoBadge { background-color: #ff8800; color: white; }
```

See [Theming](../02-Theming/designer-properties.md) for the token system.
