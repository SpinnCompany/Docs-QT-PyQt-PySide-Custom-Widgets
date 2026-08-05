---
title: QCustomRichTextEditor
description: A WYSIWYG rich-text editor.
mdx:
  format: md
sidebar_class_name: sidebar-pro
---

<!-- generated:widget-reference -->
# QCustomRichTextEditor

:::info Pro widget

`QCustomRichTextEditor` ships in **Custom Widgets Pro**. The free package under GPLv3 does not include it.

[See plans](https://customwidgets.org/pricing/)

:::

![QCustomRichTextEditor](/img/showcase/richtexteditor.gif)

A WYSIWYG rich-text editor.

A formatting toolbar (bold / italic / underline / headings / lists /
alignment / text colour / clear) over a QTextEdit. Tokenized. Exposes
toHtml / setHtml / toPlainText / setPlainText and a `textChanged` signal.

## At a glance

| | |
|---|---|
| **Tier** | Pro |
| **Import** | `from Custom_Widgets.QCustomRichTextEditor import QCustomRichTextEditor` |
| **Qt Designer** | Yes — drag it from the palette |

## Quick start

```python
from Custom_Widgets.QCustomRichTextEditor import QCustomRichTextEditor

widget = QCustomRichTextEditor()
```

## Dark theme

Colours come from the design tokens, so the widget follows the app theme with no extra work.

![QCustomRichTextEditor in dark theme](/img/showcase/richtexteditor-dark.gif)

## Signals

| Signal |
|---|
| `textChanged()` |

## Methods

| Method | Description |
|---|---|
| `editor()` |  |
| `setHtml(html)` |  |
| `setPlainText(text)` |  |
| `textChanged(...)` |  |
| `toHtml()` |  |
| `toPlainText()` |  |

## Theming

Colours come from the design tokens, so they follow the active theme. Roles used: `surface`, `on-surface`, `surface-muted`, `outline`, `accent`, `on-primary`.

See [Design tokens](../02-Theming/DesignTokens.md).

## Related

[QCustomCodeEditor](QCustomCodeEditor.md) · [QCustomDataTable](QCustomDataTable.md) · [QCustomNodeGraph](QCustomNodeGraph.md) · [QCustomTableToolbar](QCustomTableToolbar.md) · [QCustomTreeWidget](QCustomTreeWidget.md)
