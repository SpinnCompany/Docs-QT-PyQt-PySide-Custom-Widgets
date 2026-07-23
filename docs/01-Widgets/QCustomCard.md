# QCustomCard

`QCustomCard` is a **surface container** — a rounded, bordered panel with an
optional header (title + subtitle) above a body area you fill with your own
widgets. It's the base other cards compose, and a Qt Designer container.

---

## Overview

- Rounded, bordered **card surface** styled from tokens.
- Optional **header** (title + subtitle) that hides when empty.
- A **body** content area — add your widgets via `addWidget` / `addLayout`, or get
  the layout with `contentLayout()`.
- A **Designer container**: widgets dropped onto it land in the body.

---

## Constructor

```python
QCustomCard(parent=None, title="", subtitle="")
```

- **title** — header title (hidden when empty).
- **subtitle** — header subtitle (hidden when empty).

---

## Properties

| Property | Type | Description |
|---|---|---|
| `title` | str | Header title. |
| `subtitle` | str | Header subtitle. |

## Methods

| Method | Description |
|---|---|
| `setTitle(text)` | Set the title (hidden when empty). |
| `setSubtitle(text)` | Set the subtitle (hidden when empty). |
| `addWidget(widget)` | Add a widget to the body. |
| `addLayout(layout)` | Add a layout to the body. |
| `contentLayout()` | The body `QVBoxLayout`. |
| `body()` | The body `QWidget`. |

---

## Usage example

```python
from qtpy.QtWidgets import QApplication, QLabel
from Custom_Widgets.QCustomCard import QCustomCard
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))

card = QCustomCard(title="Account", subtitle="Billing details")
card.addWidget(QLabel("Plan: Pro"))
card.addWidget(QLabel("Renews: 2026-08-01"))
card.resize(280, 160)
card.show()
app.exec()
```

## Theming

Styled from the design tokens (`card_qss`) via `applyDesignTokens`; the surface,
border, and header text use the `surface` / `outline` / `on-surface` roles. See
[Theming](../02-Theming/designer-properties.md).
