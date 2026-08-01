# QCustomCarousel

![QCustomCarousel screenshot](/img/showcase/carousel.gif)

`QCustomCarousel` is a **slideshow container** — it shows one slide at a time
with previous / next navigation and a row of clickable dot indicators. Slides
can be any widget. It supports wrap-around navigation and optional auto-advance,
and emits `currentChanged(index)`.

---

## Overview

- **Any widgets as slides** — add cards, images, forms, anything.
- **Navigation** — prev / next buttons plus clickable dots (dots appear only
  when there is more than one slide).
- **Wrap-around** — on by default; the last slide's *next* returns to the first.
- **Auto-advance** — `setAutoAdvance(ms)` cycles the slides on a timer.
- **Tokenized** — nav buttons and the active dot follow the theme.
- Emits `currentChanged(int)`.

---

## Constructor

```python
QCustomCarousel(parent=None, wrap=True)
```

- **parent** — the parent widget.
- **wrap** — whether navigation wraps around at the ends.

---

## Properties

| Property | Type | Description |
|---|---|---|
| `wrap` | bool | Whether prev/next wrap around at the ends. |

## Methods

| Method | Description |
|---|---|
| `addSlide(widget)` | Append a widget as a slide; returns its index. |
| `insertSlide(index, widget)` | Insert a slide at a position. |
| `removeSlide(index)` | Remove (and delete) a slide. |
| `clear()` | Remove all slides. |
| `count()` | Number of slides. |
| `currentIndex()` | Index of the visible slide. |
| `setCurrentIndex(index)` | Show a slide (wraps or clamps per `wrap`). |
| `next()` / `previous()` | Advance / go back one slide. |
| `setWrap(wrap)` | Enable / disable wrap-around. |
| `setAutoAdvance(ms)` | Advance automatically every `ms` milliseconds (`0` stops). |

## Signals

| Signal | Description |
|---|---|
| `currentChanged(int)` | Emitted when the visible slide changes. |

---

## Usage example

```python
from qtpy.QtWidgets import QApplication, QLabel
from qtpy.QtCore import Qt
from Custom_Widgets.QCustomCarousel import QCustomCarousel
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))

carousel = QCustomCarousel()
for text in ("Welcome", "Navigate with the arrows or dots", "Enjoy"):
    slide = QLabel(text)
    slide.setAlignment(Qt.AlignCenter)
    carousel.addSlide(slide)

carousel.currentChanged.connect(lambda i: print("slide", i))
carousel.setAutoAdvance(2500)     # cycle every 2.5s
carousel.resize(360, 220)
carousel.show()
app.exec()
```

---

## Theming

Styled from the design tokens (`carousel_qss` in
`Custom_Widgets/JSonStyles/tokens.py`), applied via `applyDesignTokens` — the
same system every modern widget uses. Nav buttons use `surface` / `on-surface` /
`outline`; the active dot uses the `accent` role. See
[Theming](../02-Theming/designer-properties.md).
