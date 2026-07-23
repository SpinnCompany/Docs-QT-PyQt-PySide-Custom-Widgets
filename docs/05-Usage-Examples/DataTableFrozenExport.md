---
title: 'DataTable: frozen columns & export'
description: Pin columns and export the current view to CSV or Excel (XLSX) with QCustomDataTablePro.
---

# DataTable: frozen columns & export

Frozen columns and export are
[QCustomDataTablePro](../01-Widgets/QCustomDataTablePro.md) features (the
commercial add-on — see [Licensing](../07-Appendices/licensing.md)).

```python
from custom_widgets_pro import QCustomDataTablePro
from Custom_Widgets.QCustomDataTable import DataTableColumn

table = QCustomDataTablePro()
table.setColumns([DataTableColumn("id", type="number"), DataTableColumn("name"),
                  DataTableColumn("city"), DataTableColumn("score", type="number")])
table.setData([{"id": i, "name": f"n{i:03d}", "city": f"C{i % 5}", "score": i}
               for i in range(1, 500)])
table.show()
```

## Frozen (pinned) columns

Keep the leftmost columns visible while the rest scroll horizontally:

```python
table.setFrozenColumnCount(2)       # pin the leftmost 2 columns
print(table.frozenColumnCount())
```

Or pin by column key — this freezes every column up to and including the
right-most key you name:

```python
table.pinColumns(["name"])          # freezes id + name
table.pinColumns([])                # unpin all
```

## Export to CSV / Excel

Export the **current view** — respecting the active sort and filter — to CSV or
XLSX. Rows are **streamed** from the source, so a large export isn't held in
memory, and XLSX uses a pure-stdlib writer (no extra dependency):

```python
table.exportTo("out.csv")                          # format inferred from the extension
table.exportTo("report.xlsx", sheetName="Sales")   # Excel with a named sheet
table.exportTo("data.txt", fmt="csv")              # force a format explicitly
```

Because export follows the active sort + filter, "what you see is what you
export":

```python
from qtpy.QtCore import Qt
table.setFilterText("C2")
table.sortBy(3, Qt.DescendingOrder)
table.exportTo("filtered.xlsx")                    # only the C2 rows, score desc
```

## Related

- [DataTable: basics](./DataTableBasics.md)
- [DataTable: virtualization & server-side data](./DataTableVirtualization.md)
- [DataTable: inline editing](./DataTableEditing.md)
- [DataTable: grouping & pivot](./DataTableGroupingPivot.md)
