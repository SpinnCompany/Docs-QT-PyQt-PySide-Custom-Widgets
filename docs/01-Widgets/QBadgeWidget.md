---
title: QBadgeWidget (removed)
description: QBadgeWidget was replaced by QCustomBadge in v3.
---

# QBadgeWidget (removed)

![QBadgeWidget](/img/showcase/badge.png)


:::warning Removed in v3
`QBadgeWidget` has been **removed** and replaced by
[**`QCustomBadge`**](./QCustomBadge.md) — a themed badge whose colour comes from
a semantic variant (so it follows the light/dark theme), with new **count** and
**dot** modes and an **overlay** helper. There is no import alias.
:::

Update your imports and API:

```python
# old (removed)
from Custom_Widgets.QBadgeWidget import QBadgeWidget
badge = QBadgeWidget(text="Error", background_color=QColor(231, 76, 60))

# new
from Custom_Widgets.QCustomBadge import QCustomBadge
badge = QCustomBadge("Error", variant="destructive")
```

See the [**v3 migration note**](../07-Appendices/v3-migration.md#qbadgewidget-to-qcustombadge)
for the full property/API map, and the
[**`QCustomBadge` reference**](./QCustomBadge.md) for the new widget.
