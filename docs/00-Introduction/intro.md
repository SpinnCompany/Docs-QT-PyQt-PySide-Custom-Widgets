---
title: Qt Custom Widgets
sidebar_label: Introduction
sidebar_position: 1
description: 164 production-ready widgets for PySide6 and PyQt, designed for Qt Designer and themed by design tokens.
mdx:
  format: md
---

# Qt Custom Widgets

**164 production-ready widgets for PySide and PyQt** — charts, data tables,
chat interfaces, dashboards, loaders, forms — that drop into Qt Designer and
theme themselves from a single call.

![Aurora dashboard built with Custom Widgets](/img/showcase/glasshome-light.png)

## Why this library

**It works in Qt Designer.** Every widget is a real Designer plugin with its
custom properties exposed in the property editor, so a form can be laid out
visually and still use the good components.

**Theming is one call.** Widgets style themselves from semantic
[design tokens](../02-Theming/DesignTokens.md) — `surface`, `on-surface`,
`primary`, `outline` — so `applyDesignTokens(app, theme="dark")` flips an
entire application, including widgets you never touched.

**It is not a widget dump.** Each widget has a typed stub, a headless paint
test, a Designer registration and a documented API.

## Start here

| | |
|---|---|
| **[Getting started](getting-started.md)** | A themed window in twenty lines |
| **[Widget gallery](../gallery.mdx)** | All 164, grouped by what you are building |
| **[Design tokens](../02-Theming/DesignTokens.md)** | How theming actually works |
| **[Real-world examples](../05-Usage-Examples/RealWorldScenarios.md)** | Complete apps to copy |

## A taste

<div class="widget-gallery">

<a class="wg-card" href="../Widgets/QCustomStatCard"><img src="../img/showcase/statcard.png" alt="Stat card" loading="lazy" /><span class="wg-name">Stat card</span></a>
<a class="wg-card" href="../Widgets/QCustomLineChart"><img src="../img/showcase/linechart.gif" alt="Line chart" loading="lazy" /><span class="wg-name">Charts<span class="wg-pro">PRO</span></span></a>
<a class="wg-card" href="../Widgets/QCustomDataTable"><img src="../img/showcase/datatable.png" alt="Data table" loading="lazy" /><span class="wg-name">Data table<span class="wg-pro">PRO</span></span></a>
<a class="wg-card" href="../Widgets/QCustomChatThread"><img src="../img/showcase/chatthread.png" alt="Chat thread" loading="lazy" /><span class="wg-name">Chat</span></a>
<a class="wg-card" href="../Widgets/QCustomSpinner"><img src="../img/showcase/spinner.gif" alt="Loaders" loading="lazy" /><span class="wg-name">Loaders</span></a>
<a class="wg-card" href="../Widgets/QCustomCommandPalette"><img src="../img/showcase/commandpalette.gif" alt="Command palette" loading="lazy" /><span class="wg-name">Command palette</span></a>

</div>

## Free and Pro

The library is **free and open source under GPLv3**, and that is a real
licence, not a formality: if you ship a closed-source commercial application
you need a
[commercial licence](https://customwidgets.org/pricing/).

**Pro** adds the analytics chart set, the data table, rich media widgets, the
Designer tooling and the [MCP server](../03-Advanced/mcp-server.md) for driving
it all from an AI agent. Pro widgets are marked throughout these docs.

See [Licensing](../07-Appendices/licensing.md) for the details, including the
separate question of how Qt itself is licensed.
