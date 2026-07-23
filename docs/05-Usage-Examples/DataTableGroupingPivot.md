---
title: 'DataTable: grouping & pivot'
description: Group QCustomDataTablePro rows with per-group aggregates, expand/collapse, and cross-tab pivots.
---

# DataTable: grouping & pivot

Grouping, aggregation, and pivot are
[QCustomDataTablePro](../01-Widgets/QCustomDataTablePro.md) features (the
commercial add-on — see [Licensing](../07-Appendices/licensing.md)).

```python
from custom_widgets_pro import QCustomDataTablePro
from Custom_Widgets.QCustomDataTable import DataTableColumn

rows = [
    {"region": "East", "category": "Hardware", "amount": 120, "qty": 3},
    {"region": "East", "category": "Software", "amount": 300, "qty": 1},
    {"region": "West", "category": "Hardware", "amount": 90,  "qty": 2},
    {"region": "West", "category": "Software", "amount": 200, "qty": 4},
]

table = QCustomDataTablePro()
table.setColumns([DataTableColumn("region"), DataTableColumn("category"),
                  DataTableColumn("amount", type="number"),
                  DataTableColumn("qty", type="number")])
table.setData(rows)
table.show()
```

## Grouping with aggregates

Group by one or more column keys; the second argument maps a column to an
aggregate shown on each group header:

```python
table.groupBy(["region"], {"amount": "sum", "qty": "avg"})
```

Aggregates: `sum`, `avg`, `count`, `min`, `max`, `first`, `last`, or a callable
`fn(values) -> result`. Group by several keys for nested groups:

```python
table.groupBy(["region", "category"], {"amount": "sum"})
```

## Expand / collapse

Click a group header to toggle it, or drive it in code:

```python
table.expandAllGroups()
table.collapseAllGroups()
table.groupToggled.connect(lambda path, expanded: print(path, "expanded" if expanded else "collapsed"))
```

Clear grouping to return to the flat, virtualized view:

```python
table.clearGrouping()
print(table.isGrouped(), table.groupKeys())
```

## Pivot (cross-tab)

Reshape into a matrix: one row per `index` value, one column per distinct
`columns` value, each cell an aggregate of `values`:

```python
table.pivot(index="region", columns="category", values="amount", aggfunc="sum")
# -> columns: Region | Hardware | Software | Total
```

Options: `pivot(index, columns, values, aggfunc="sum", totals=True, fill=None)`.
`index` may be a list of keys for nested row headers. Restore the flat table with:

```python
table.clearPivot()
print(table.isPivoted())
```

> Grouping and pivot are **mutually exclusive** — starting one clears the other.

## Related

- [DataTable: basics](./DataTableBasics.md)
- [DataTable: virtualization & server-side data](./DataTableVirtualization.md)
- [DataTable: inline editing](./DataTableEditing.md)
- [DataTable: frozen columns & export](./DataTableFrozenExport.md)
