---
draft: true
authors:
- Khamisi Kibet
date: '2026-07-23'
slug: modern-widget-catalog-and-datatable
tags:
- PySide6
- PyQt6
- Python
- GUI
- Custom Widgets
- Design Tokens
- DataTable
title: 'A modern widget catalog, design tokens, and a new DataTable'
---

<!--
DRAFT — not published (draft: true). Set the final version number and date, flip
draft to false, and confirm the availability wording for the Pro add-on before
publishing. Do not add licensing or pricing claims that aren't yet in effect.
-->

This is our biggest update yet: **over 30 new, modern widgets**, a **design-token
theming system** with light/dark and variants, and a brand-new **DataTable** —
all built on `qtpy` so the same code runs on **PySide6** and **PyQt6**.

<!-- truncate -->

## A design-token theming system

Every new widget is styled from a single **design-token** system — Tailwind-like
primitives (colours, spacing, radius, type) mapped to Material-like **semantic
roles** (surface, primary, outline, success, destructive…). Switch the whole app
between **light and dark** by applying one token set, and emphasise components
with **variants** and **sizes**:

```python
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens
applyDesignTokens(app, tokens=DesignTokens(theme="dark"))

button.setProperty("variant", "primary")   # primary / secondary / outline / ghost / destructive
button.setProperty("sizeVariant", "lg")     # sm / md / lg
```

No more hand-tuned stylesheets per widget — colours follow the theme automatically.

## Over 30 new widgets

A full catalog of modern, themeable components, each with a headless test and a
runnable example:

- **Inputs & controls** — Switch, NumberInput, searchable ComboBox, Date / Time /
  DateRange editors, ColorPicker, RangeSlider, FileDropZone.
- **Feedback** — Toast, Alert (inline callout), Skeleton loader, EmptyState.
- **Navigation** — TabWidget, Accordion, Breadcrumbs, Pagination,
  SegmentedControl, CommandPalette (⌘/Ctrl-K), Drawer, Stepper.
- **Display** — StatCard, ProgressRing, Card, Badge, AvatarGroup, Timeline,
  Rating, Chip / ChipGroup, Popover.
- **Content & data** — TreeWidget, RichTextEditor, and the new **DataTable**.

## A real data grid: DataTable

`QCustomDataTable` is a proper model/view grid. Give it column descriptors and a
list of row dictionaries and you get client-side **sorting** (by real value, not
the display string), **substring filtering**, **pagination**, and **selection** —
fully themed:

```python
from Custom_Widgets.QCustomDataTable import QCustomDataTable, DataTableColumn

table = QCustomDataTable()
table.setColumns([
    DataTableColumn("name",  "Name",  type="text"),
    DataTableColumn("price", "Price", type="number",
                    formatter=lambda v: f"${v:,.2f}"),
    DataTableColumn("active", "Active", type="bool"),
])
table.setData([{"name": "Widget A", "price": 19.99, "active": True}, ...])
```

## Built for both bindings, with a fast dev loop

The library targets **PySide6** and **PyQt6** through `qtpy` — write once, run on
either. And the new dev command watches your project and restyles/reloads on save:

```bash
Custom_Widgets --dev            # runs ./main.py under supervision
```

## Upgrading

This release is part of the **v3** modernization, which includes some clean-break
API changes. See the [migration guide](https://qtcustomwidgets.spinncode.com/Appendices/v3-migration)
for the (short) list of find-and-replace edits — most projects migrate in
minutes.

## Coming next: a Pro data grid

We're also building **DataTable Pro** — a production-grade grid that adds
virtualization (100k+ rows), server-side data, frozen columns, inline editing,
grouping / pivot, and CSV / Excel export, all on the same API (*swap the class,
gain the features*). It's a commercial add-on under an **open-core** model that
keeps this library free and open source. Details and availability will follow in
a dedicated post.

## Explore the docs

- [Widget gallery & reference](https://qtcustomwidgets.spinncode.com/)
- [DataTable](https://qtcustomwidgets.spinncode.com/Widgets/QCustomDataTable) ·
  [Usage recipes](https://qtcustomwidgets.spinncode.com/Usage-Examples/DataTableBasics)
- [Theming](https://qtcustomwidgets.spinncode.com/Theming/designer-properties)

Thanks for building with Qt Custom Widgets. Feedback and issues are always
welcome on [GitHub](https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets).
