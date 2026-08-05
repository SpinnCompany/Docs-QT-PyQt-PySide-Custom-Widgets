---
title: QCustomModal
description: A modern centered modal dialog with a dim backdrop.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomModal

![QCustomModal](/img/showcase/modal.gif)

A modern centered modal dialog with a dim backdrop.

Overlays its parent window with a translucent scrim and a centered rounded
card (title + close, a content slot, and action buttons). Click the scrim or
the close button, or press Esc, to dismiss. Show it with showModal(); it
animates in. Emits triggered(key) for action buttons and closed() on
dismiss. Theme from code with applyColors(...).

m = QCustomModal(mainWindow)
m.setTitle("Send money"); m.addContent(myForm)
m.addAction("Cancel", "cancel"); m.addAction("Send", "send", primary=True)
m.triggered.connect(handler); m.showModal()

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomModal import QCustomModal` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomModal import QCustomModal

widget = QCustomModal()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomModal in dark theme](/img/showcase/modal-dark.gif)

## Signals

| Signal |
|---|
| `closed()` |
| `triggered(QString)` |

## Methods

| Method | Description |
|---|---|
| `addAction(text, key=None, primary=False, danger=False)` | Add an action. |
| `addContent(widget)` | Add a content. |
| `applyColors(bg=None, text=None, muted=None, border=None, accent=None, accentText=None, hover=None)` | Apply the colors. |
| `clearActions()` | Clear the actions. |
| `clearContent()` | Clear the content. |
| `closeModal()` | Close the modal. |
| `closed(...)` | Closed. |
| `eventFilter(obj, ev)` | Event filter. |
| `setSubtitle(text)` | Set the subtitle. |
| `setTitle(text)` | Set the title. |
| `showModal()` | Show the modal. |
| `triggered(...)` | Triggered. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `accent`, `background`, `text`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomAccordion](QCustomAccordion.md) · [QCustomCardStack](QCustomCardStack.md) · [QCustomCarousel](QCustomCarousel.md) · [QCustomEmbeddedWindow](QCustomEmbeddedWindow.md) · [QCustomFlowLayout](QCustomFlowLayout.md) · [QCustomFlowWidget](QCustomFlowWidget.md) · [QCustomGlassFrame](QCustomGlassFrame.md) · [QCustomPopover](QCustomPopover.md)
