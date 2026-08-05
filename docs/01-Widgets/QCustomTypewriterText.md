---
title: QCustomTypewriterText
description: Text that types itself in.
mdx:
  format: md
---

<!-- generated:widget-reference -->
# QCustomTypewriterText

![QCustomTypewriterText](/img/showcase/typewritertext.gif)

Text that types itself in.

The hero headline that writes itself, or a rotating list of taglines. A
caret blinks while typing and can keep blinking after.

Two things this gets right that a naive timer loop does not:
* the widget is sized against the LONGEST phrase, so the layout does not
jump on every character or when the phrase rotates
* the caret is painted, not a "|" character, so it does not shift the
text as it blinks

Emits phraseFinished(str) when a phrase completes and cycled(int) when it
moves to the next one.

## At a glance

| | |
|---|---|
| **Tier** | Free (GPLv3) |
| **Import** | `from Custom_Widgets.QCustomTypewriterText import QCustomTypewriterText` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomTypewriterText import QCustomTypewriterText

widget = QCustomTypewriterText()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomTypewriterText in dark theme](/img/showcase/typewritertext-dark.gif)

## Properties

Every property below is settable in code and in Qt Designer.

| Property | Type | Default |
|---|---|---|
| `phrasesCsv` | `string` | — |
| `typeSpeed` | `int` | `65` |
| `eraseSpeed` | `int` | `35` |
| `holdDelay` | `int` | `1200` |
| `loop` | `bool` | `True` |
| `erase` | `bool` | `True` |
| `showCaret` | `bool` | `True` |
| `caretBlinkRate` | `int` | `530` |
| `alignment` | `enum: `left` / `center` / `right`` | `left` |
| `textColor` | `color` | `#0f172a` |
| `caretColor` | `color` | `#2563eb` |

## Signals

| Signal |
|---|
| `cycled(int)` |
| `phraseFinished(QString)` |

## Methods

| Method | Description |
|---|---|
| `alignment(*args, **kwargs)` | Alignment. |
| `caretBlinkRate(*args, **kwargs)` | Caret blink rate. |
| `caretColor(*args, **kwargs)` | Caret color. |
| `currentPhrase()` | Current phrase. |
| `cycled(...)` | Cycled. |
| `erase(*args, **kwargs)` | Erase. |
| `eraseSpeed(*args, **kwargs)` | Erase speed. |
| `holdDelay(*args, **kwargs)` | Hold delay. |
| `isRunning()` | Return whether the widget is running. |
| `loop(*args, **kwargs)` | Loop. |
| `phraseFinished(...)` | Phrase finished. |
| `phrases()` | Phrases. |
| `phrasesCsv(*args, **kwargs)` | Phrases csv. |
| `setPhrases(phrases, restart=True)` | Set the phrases. |
| `showCaret(*args, **kwargs)` | Show the caret. |
| `skip()` | Jump to the end of the current phrase. |
| `start()` | Start. |
| `stop()` | Stop. |
| `textColor(*args, **kwargs)` | Text color. |
| `typeSpeed(*args, **kwargs)` | Type speed. |
| `visibleText()` | Visible text. |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `on-surface`, `accent`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Runnable example

A complete app using this widget lives at `examples/PySide6/QCustomTypewriterText/main.py`.

## Related

[AnalogGaugeWidget](AnalogGaugeWidget.md) · [QCustomAgendaList](QCustomAgendaList.md) · [QCustomAlert](QCustomAlert.md) · [QCustomAvatar](QCustomAvatar.md) · [QCustomAvatarGroup](QCustomAvatarGroup.md) · [QCustomBadge](QCustomBadge.md) · [QCustomCard](QCustomCard.md) · [QCustomChip](QCustomChip.md)
