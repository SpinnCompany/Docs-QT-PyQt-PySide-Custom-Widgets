# QCustomStatCard

![QCustomStatCard screenshot](/img/showcase/statcard.png)

`QCustomStatCard` is a **KPI / metric card** — a compact dashboard tile showing a
small label, a large value, an optional trend-coloured delta, and an optional
caption.

---

## Overview

- **Label + big value** with an optional **delta** and **caption**.
- The delta's **trend** (`up` / `down` / `flat`) colours it from the semantic
  tokens (`up` = success/green, `down` = destructive/red, `flat` = muted) and
  prefixes an arrow glyph.
- Tokenized card surface; follows the active theme.

---

## Constructor

```python
QCustomStatCard(parent=None, label="", value="", delta="", trend="flat", caption="")
```

- **label** — small caption above the value.
- **value** — the headline metric (any string).
- **delta** — change text, e.g. `"12.5%"` (hidden when empty).
- **trend** — `up` / `down` / `flat` (colours the delta).
- **caption** — small trailing note next to the delta.

---

## Properties

| Property | Type | Description |
|---|---|---|
| `label` | str | The label text. |
| `value` | str | The headline value. |
| `caption` | str | The caption text. |
| `trend` | str | `up` / `down` / `flat`. |

## Methods

| Method | Description |
|---|---|
| `setLabel(text)` | Set the label. |
| `setValue(text)` | Set the headline value. |
| `setDelta(text, trend=None)` | Set the delta text and, optionally, the trend. |
| `setTrend(trend)` | Set the trend (re-colours the existing delta). |
| `setCaption(text)` | Set the caption. |

---

## Usage example

```python
from qtpy.QtWidgets import QApplication, QWidget, QHBoxLayout
from Custom_Widgets.QCustomStatCard import QCustomStatCard
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))

w = QWidget()
row = QHBoxLayout(w)
row.addWidget(QCustomStatCard(label="Revenue", value="$48.2k",
                              delta="12.5%", trend="up", caption="vs last mo"))
row.addWidget(QCustomStatCard(label="Churn", value="2.1%",
                              delta="0.4%", trend="down", caption="vs last mo"))
row.addWidget(QCustomStatCard(label="Sign-ups", value="1,204",
                              delta="0%", trend="flat", caption="this week"))
w.show()
app.exec()
```

## Theming

Styled from the design tokens (`statcard_qss`) via `applyDesignTokens`; the trend
colours use the `success` / `destructive` / `outline` roles. See
[Theming](../02-Theming/designer-properties.md).

<!-- generated:api-reference -->

## API reference

*Generated from the widget's live metaobject — do not edit by hand.*

### Properties

| Property | Type | Default |
|---|---|---|
| `label` | `string` | — |
| `value` | `string` | — |
| `caption` | `string` | — |
| `trend` | `enum: `up` / `down` / `flat`` | `flat` |

### Methods

| Method | Description |
|---|---|
| `caption(*args, **kwargs)` | Caption. |
| `label(*args, **kwargs)` | Label. |
| `setCaption(text)` | Set the caption. |
| `setDelta(text, trend=None)` | Set the delta text (e.g. "+12.5%") and, optionally, the trend |
| `setLabel(text)` | Set the label. |
| `setTrend(trend)` | Set the trend. |
| `setValue(text)` | Set the value. |
| `trend(*args, **kwargs)` | Trend. |
| `value(*args, **kwargs)` | Value. |

<!-- /generated:api-reference -->
