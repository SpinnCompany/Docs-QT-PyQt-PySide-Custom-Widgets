---
title: 'DataTable: virtualization & server-side data'
description: Handle 100k+ rows and database/API sources with QCustomDataTablePro — providers, lazy fetching, and server-side sort/filter push-down.
---

# DataTable: virtualization & server-side data

Recipes for [QCustomDataTablePro](../01-Widgets/QCustomDataTablePro.md). Pro is
the commercial add-on (dev-time entitlement, royalty-free runtime — see
[Licensing](../07-Appendices/licensing.md)); the free table is in-memory only.

```python
from custom_widgets_pro import QCustomDataTablePro
from Custom_Widgets.QCustomDataTable import DataTableColumn
```

## Large in-memory data (still virtualized)

`setData` on the Pro table feeds rows through the **virtualized** path — only the
scrolled-to window is materialised, so 100k rows stay smooth:

```python
table = QCustomDataTablePro()
table.setColumns([DataTableColumn("id", type="number"),
                  DataTableColumn("name"), DataTableColumn("score", type="number")])
table.setData([{"id": i, "name": f"row {i}", "score": i * 7 % 1000}
               for i in range(100_000)])
table.show()
print(table.loadedRowCount(), "of", table.totalRowCount())   # window vs total
```

## A lazy fetch callback

When the data lives in a database or API, give the table a window-fetching
callback instead of all the rows. The table calls it as the user scrolls:

```python
def fetch(offset, limit):
    # return up to `limit` row dicts starting at `offset`
    return db.query("SELECT * FROM sales LIMIT ? OFFSET ?", (limit, offset))

table.setFetchCallback(fetch, total=db.count("sales"))
```

Pass `total=None` for a streaming/unknown-size source — the table fetches until a
short/empty window comes back.

## A full DataProvider (server-side sort & filter)

For correct ordering and filtering across the **whole** dataset (not just the
loaded window), implement a `DataProvider` and push sort/filter down to the
source:

```python
from custom_widgets_pro import DataProvider

class SalesProvider(DataProvider):
    def totalRowCount(self, filter=None):
        return db.count("sales", search=filter)

    def fetch(self, offset, limit, sort=None, filter=None):
        # sort is (column_key, ascending) or None; filter is a search string or None
        order = ""
        if sort:
            key, ascending = sort
            order = f"ORDER BY {key} {'ASC' if ascending else 'DESC'}"
        return db.query_sales(offset, limit, search=filter, order=order)

table.setDataProvider(SalesProvider())

# these now push down to the provider (whole-set correctness):
from qtpy.QtCore import Qt
table.sortBy(2, Qt.DescendingOrder)
table.setFilterText("acme")
```

## Adapting a plain callable

`CallableDataProvider` wraps a function; it auto-detects whether your callable
takes `(offset, limit)` or `(offset, limit, sort, filter)`:

```python
from custom_widgets_pro import CallableDataProvider
table.setDataProvider(CallableDataProvider(fetch, total=100_000))
```

## Related

- [DataTable: basics](./DataTableBasics.md)
- [DataTable: inline editing](./DataTableEditing.md)
- [DataTable: grouping & pivot](./DataTableGroupingPivot.md)
- [DataTable: frozen columns & export](./DataTableFrozenExport.md)
