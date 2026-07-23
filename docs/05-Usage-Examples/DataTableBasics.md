---
title: 'DataTable: basics'
description: Build a QCustomDataTable — columns, data, formatters, sorting, filtering, pagination, and selection.
---

# DataTable: basics

Recipes for the free [QCustomDataTable](../01-Widgets/QCustomDataTable.md). Every
snippet is self-contained — apply the design tokens once, then build the table.

```python
from qtpy.QtWidgets import QApplication
from Custom_Widgets.QCustomDataTable import QCustomDataTable, DataTableColumn
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))
```

## Columns and data

Columns are `DataTableColumn` descriptors; rows are plain dicts keyed by each
column's `key`.

```python
table = QCustomDataTable()
table.setColumns([
    DataTableColumn("id",     "ID",     type="number", width=60),
    DataTableColumn("name",   "Name",   type="text"),
    DataTableColumn("price",  "Price",  type="number"),
    DataTableColumn("active", "Active", type="bool"),
])
table.setData([
    {"id": 1, "name": "Widget A", "price": 19.99, "active": True},
    {"id": 2, "name": "Widget B", "price": 4.50,  "active": False},
    {"id": 3, "name": "Gadget",   "price": 42.00, "active": True},
])
table.show()
```

Add or clear rows later:

```python
table.addRow({"id": 4, "name": "Gizmo", "price": 9.99, "active": True})
table.clear()
```

## Formatting a column

A `formatter` changes only the *display* — sorting and filtering still use the
raw value, so a price column stays numerically sorted:

```python
DataTableColumn("price", "Price", type="number",
                formatter=lambda v: f"${v:,.2f}")
```

## Sorting

```python
from qtpy.QtCore import Qt
table.sortBy(2, Qt.DescendingOrder)     # by column index (price, high -> low)
```

Users can also click headers when `sortable` is on (the default). Because the
grid sorts by the raw value (via `Qt.UserRole`), numbers and dates order
correctly regardless of their formatted text.

## Filtering

```python
table.setFilterText("widget")           # case-insensitive substring, all columns
table.setFilterText("")                 # clear
```

## Pagination

Pagination is on by default (25 rows/page). Configure it or drive it in code:

```python
table.pageSize = 10                     # rows per page (0 disables paging)
table.showPagination = True             # Prev/Next footer

table.nextPage(); table.prevPage()
table.setPage(0)
print(table.currentPage(), "/", table.pageCount())
```

## Selection

```python
table.selectionMode = QCustomDataTable.SelectionMode.MultiRow   # or SingleRow / Cell / NoSelection
table.rowSelected.connect(lambda row: print("current row:", row))
table.cellClicked.connect(lambda row, col: print("clicked", row, col))

# the selected source-model row indices:
print(table.selectedRows())
```

## Density and emphasis

```python
table.sizeVariant = "sm"                # sm / md / lg  (row density + font size)
table.variant = "outline"              # outline / ghost / primary (border emphasis)
```

## Next steps

For 100k+ rows, server-side data, inline editing, grouping/pivot, frozen columns,
or CSV/Excel export, use
[QCustomDataTablePro](../01-Widgets/QCustomDataTablePro.md) — the same API,
extended. See:

- [DataTable: virtualization & server-side data](./DataTableVirtualization.md)
- [DataTable: inline editing](./DataTableEditing.md)
- [DataTable: grouping & pivot](./DataTableGroupingPivot.md)
- [DataTable: frozen columns & export](./DataTableFrozenExport.md)
