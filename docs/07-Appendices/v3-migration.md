---
title: Migrating to v3
description: Breaking changes in QT-PyQt-PySide-Custom-Widgets v3 and how to update your project.
---

# Migrating to v3

v3 is a clean break: misspelled public names were fixed **without aliases**,
support was narrowed to the bindings that actually work, and several
structural improvements landed. Most projects migrate with a handful of
find-and-replace edits.

## Supported bindings

| Binding | v2 claim | v3 reality |
|---|---|---|
| PySide6 | ✅ | ✅ everything (widgets, theming, Designer plugins, bridge, MCP) |
| PyQt6 | ✅ | ✅ widgets, theming, ui conversion (Designer integration is PySide6-only) |
| PySide2 / PyQt5 | claimed | ❌ removed (importing already crashed on PySide2 in v2) |

## Renamed: `style.json` keys

Update your `json-styles/style.json`:

| Old key | New key |
|---|---|
| `OrginizationName` | `OrganizationName` |
| `OrginizationDormain` | `OrganizationDomain` |
| `QMainWindow.tittle` | `QMainWindow.title` |
| `QMainWindow.navigation.tittleBar` | `QMainWindow.navigation.titleBar` |
| `QMainWindow.transluscentBg` | `QMainWindow.translucentBg` |

The old keys are **ignored** in v3 — a window keeping `tittleBar` will
simply lose its custom title bar until the key is renamed.

## Renamed: Python API

| Old | New |
|---|---|
| `from Custom_Widgets import QMainWindow` | `from Custom_Widgets import QCustomMainWindow` |
| `QCustomQMainWindow(tittleBar=...)` | `QCustomQMainWindow(titleBar=...)` |
| `Custom_Widgets.QCustomEmbededWindow.QCustomEmbededWindow` | `Custom_Widgets.QCustomEmbeddedWindow.QCustomEmbeddedWindow` |
| `themeEngine.orginazationName` / `.orginazationDomain` | `.organizationName` / `.organizationDomain` |

The `QMainWindow` change matters most: v2 **shadowed Qt's own class** when
you used `from Custom_Widgets import *`. In v3 that star import gives you
Qt's plain `QMainWindow`; subclass `QCustomMainWindow` explicitly to get
the frameless window + theme engine behavior:

```python
from Custom_Widgets import QCustomMainWindow

class MainWindow(QCustomMainWindow):
    def __init__(self, parent=None):
        QCustomMainWindow.__init__(self)
        ...
```

## New: explicit project root

Apps were previously tied to being launched from the project folder
(`os.getcwd()`). Pin the root at the top of your `main.py` and the app
becomes location-independent:

```python
from Custom_Widgets.Project import setProjectRoot
setProjectRoot(__file__)   # this file's folder is the project root
```

Tooling can also set the `CUSTOM_WIDGETS_PROJECT_ROOT` environment
variable. Without either, the cwd fallback still behaves like v2.

## Dependencies became extras

`pip install QT-PyQt-PySide-Custom-Widgets` is much lighter in v3
(matplotlib/scipy/qrcode/etc. are no longer hard dependencies). Niche
widgets need their extra:

```bash
pip install "QT-PyQt-PySide-Custom-Widgets[qr]"        # QCustomQRGenerator
pip install "QT-PyQt-PySide-Custom-Widgets[acrylic]"   # acrylic blur effect
pip install "QT-PyQt-PySide-Custom-Widgets[loaders]"   # QCustomPerlinLoader
pip install "QT-PyQt-PySide-Custom-Widgets[all]"       # everything
```

## New: the dev loop

Instead of juggling `--monitor-ui` in a second terminal:

```bash
Custom_Widgets --dev            # runs ./main.py under supervision
Custom_Widgets --dev app.py     # or any entry script
```

Saving a `.ui` regenerates `src/ui_*.py` and restarts the app; saving a
`.py` restarts it; saving `.scss`/`style.json` restyles the running app
live (when `LiveCompileQss` is enabled). If the app crashes, the
supervisor reports it and relaunches on your next save.

## Behavior fixes worth knowing about

- The theme engine singleton no longer dies with the first window that
  created it (it never adopts a QObject parent now).
- `_variables.scss` is only written when its content changes, and the
  SCSS→QSS compile is skipped when no `.scss` input changed — theme
  refreshes are much cheaper.
- Designer gained a **Custom Properties dock**: click any Custom_Widgets
  widget on a form (or right-click → *Custom Properties…*) for dropdown /
  color-picker / widget-reference editors of its custom properties.
