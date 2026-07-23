---
title: 'DataTable: inline editing'
description: Make QCustomDataTablePro cells editable with type coercion, validation, and bool checkboxes.
---

# DataTable: inline editing

Inline editing is a [QCustomDataTablePro](../01-Widgets/QCustomDataTablePro.md)
feature (the free table is read-only). Pro is the commercial add-on — see
[Licensing](../07-Appendices/licensing.md).

```python
from custom_widgets_pro import QCustomDataTablePro
from Custom_Widgets.QCustomDataTable import DataTableColumn

table = QCustomDataTablePro()
table.setColumns([
    DataTableColumn("name",   "Name",   type="text"),
    DataTableColumn("price",  "Price",  type="number"),
    DataTableColumn("active", "Active", type="bool"),
])
table.setData([{"name": "Widget A", "price": 19.99, "active": True},
               {"name": "Widget B", "price": 4.50,  "active": False}])
table.show()
```

## Choosing editable columns

```python
table.setEditable(["name", "price", "active"])   # a list of column keys
# or:
table.setEditable(True)                          # all columns
table.setEditable(False)                         # none (read-only)
```

Values are **coerced to the column `type`**: a `number` column parses to `int` /
`float`, and a `bool` column renders an in-cell **checkbox**.

## Validation

Attach a validator per column. Return `True` to accept, or an error **string** to
reject (the edit is discarded and `validationFailed` fires):

```python
table.setColumnValidator("price", lambda v: v >= 0 or "must be ≥ 0")
table.setColumnValidator("name",  lambda v: bool(v.strip()) or "name required")
```

## Reacting to edits

```python
table.cellEdited.connect(
    lambda row, key, old, new: print(f"row {row}: {key} {old!r} -> {new!r}"))

table.validationFailed.connect(
    lambda row, key, value, message: print(f"rejected {key}={value!r}: {message}"))
```

- `cellEdited(row, key, old, new)` — a value changed.
- `validationFailed(row, key, value, message)` — an edit was rejected.

## Read the current editable set

```python
print(table.editableColumns())      # -> set of column keys
```

## Related

- [DataTable: basics](./DataTableBasics.md)
- [DataTable: virtualization & server-side data](./DataTableVirtualization.md)
- [DataTable: grouping & pivot](./DataTableGroupingPivot.md)
- [DataTable: frozen columns & export](./DataTableFrozenExport.md)
