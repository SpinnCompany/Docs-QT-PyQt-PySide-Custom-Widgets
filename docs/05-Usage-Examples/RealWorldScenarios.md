---
title: Real-world examples
sidebar_label: Real-world examples
description: Complete applications shipped with the repository, and what each one demonstrates.
mdx:
  format: md
---

# Real-world examples

The repository ships **96 runnable examples** under `examples/PySide6/`. These
are the ones worth reading first, because each demonstrates a whole approach
rather than a single widget.

Run any of them with:

```bash
python examples/PySide6/<Name>/main.py
```

## Complete applications

| Example | What it shows |
|---|---|
| `GlassHome` | A visionOS-style smart-home dashboard. The full forms pipeline: `.ui` files, compiled `src/`, JSON themes, SCSS `$TOKENS`, live theme switching. See [the walkthrough](GlassHomeShowcase.md). |
| `AuroraDeckPro` | The reference architecture for a real multi-page app — GuiFunctions managers, background workers, and a clean split between UI and logic. |
| `AuroraChat` | A complete chat client: conversation list, message thread with bubbles, voice messages, inline media albums and an emoji picker. |
| `AuroraCommandDeck` | The code-first path at scale — no `.ui` files, everything built in Python and themed with `applyDesignTokens`. |
| `WinningDashboard_CorrectArchitecture` | The same dashboard as `WinningDashboard`, restructured the way the library intends. Read them side by side. |

## Dashboards

| Example | What it shows |
|---|---|
| `FinanceDashboard` | Stat cards, mini bar charts and a data table working together |
| `CryptoDashboard` | Live-updating series and candlestick charts |
| `CashFlowDashboard` | Diverging bars and flow visualisation |
| `AuroraJobsTable_CorrectArchitecture` | A data-heavy table screen done properly |
| `NodeStudio` | The node graph as a working editor |

## Focused demos

Smaller, single-topic examples: `DesignTokens` for the token system,
`LoadingIndicators` for the loader family, `QAppSettings` for persisted
settings, `HeatmapDemo`, `LiquidGaugeDemo`, `CompassDemo`, `BubbleDemo`,
`PieEnhanceDemo`, `DonutEnhanceDemo`, `AgendaDemo`, `DateRangeDemo`,
`NewWidgetsShowcase` and `PrismShowcase`.

## Which to copy

- Starting a **new application** → `AuroraDeckPro`
- Starting with **Qt Designer forms** → `GlassHome`
- **No `.ui` files, pure Python** → `AuroraCommandDeck`
- Building a **dashboard** → `FinanceDashboard`
- Building a **chat UI** → `AuroraChat`
