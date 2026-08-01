# Hot Reload

Hot reload rebuilds your UI **in place when its generated source changes** — no
process restart, no lost window state. The library provides it at two levels:

- **Component hot reload** — leaf forms embedded in a
  [`QCustomComponentContainer`](../01-Widgets/QCustomComponentContainer.md)
  rebuild themselves when their compiled `.py` changes.
- **Main-window hot reload** — a top-level window rebuilds its whole UI
  (re-running `setupUi` **and** re-connecting signals) via `enable_hot_reload`.

Both pair with the dev workflow that regenerates `src/ui_*.py` from your `.ui`
files — the [dev server](../04-API-Reference/CMD.md), `--monitor-ui`, or the
**Run** button in [Designer](designer-tools.md). Edit a form, save, and the
running app updates.

---

## Why the split?

A **component** is a leaf form with no external references — the container owns
it, so it can be torn down and rebuilt freely.

A **main window** is different: its widgets are wired to your application code
(signal/slot connections, references you hold). Rebuilding them blindly would
orphan those connections. So the two paths differ: the container rebuilds
components automatically, while a main window supplies a `build()` callable that
re-creates the UI **and** re-wires it.

---

## Component hot reload

[`QCustomComponentContainer`](../01-Widgets/QCustomComponentContainer.md) loads a
**compiled** UI module (the `ui_<name>.py` produced by
`Custom_Widgets --convert-ui`). Its `hotReload` property (default **`True`**)
installs a file watcher on that module and rebuilds the embedded form in place
whenever it changes.

```python
from Custom_Widgets.QCustomComponentContainer import QCustomComponentContainer

container = QCustomComponentContainer()
container.filePath = "src/ui_dashboard.py"      # compiled module
container.formClassName = "Ui_Dashboard"
container.hotReload = True                        # default; rebuilds on change
```

Now, while the app runs, regenerating `src/ui_dashboard.py` (by saving
`ui/dashboard.ui` under the dev server or `--monitor-ui`) rebuilds the embedded
form instantly.

### `.ui` paths resolve automatically

The loader only accepts compiled modules at runtime, but you can still point
`filePath` at a **raw `.ui`** — it is transparently resolved to the sibling
`ui_<stem>.py` (looked up next to the `.ui` first, then in the default `src/`
output directory):

```python
container.filePath = "ui/dashboard.ui"   # -> resolves to ui_dashboard.py
```

Only a form with **no compiled module at all** is rejected (with a clear
message telling you to run `--convert-ui`). Existing projects that still point at
`.ui` files keep working with no edits.

---

## Main-window hot reload

`enable_hot_reload` rebuilds a top-level window's UI in place when its compiled
`Ui_` module(s) change. Because the window is wired to your app code, you pass a
`build()` callable that re-runs `setupUi` **and** re-connects signals; the helper
calls it now and again on every change. Window geometry is preserved.

```python
from Custom_Widgets import enable_hot_reload

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        # Build now, and rebuild in place whenever the compiled UI changes.
        enable_hot_reload(self, self.build)

    def build(self):
        # IMPORTANT: import the Ui_ class INSIDE build() so the reloaded
        # module is picked up on each rebuild.
        from src.ui_mainwindow import Ui_MainWindow
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)
        # re-connect signals every rebuild
        self.ui.saveButton.clicked.connect(self.on_save)
```

### Signature

```python
enable_hot_reload(window, build, watch=None, src_dir=None)
```

| Argument | Description |
|---|---|
| `window` | The top-level widget being (re)built by `build`. |
| `build` | Zero-arg callable that constructs the UI (`setupUi` + signal connections). Called once immediately, then after each change. **Import the `Ui_` class inside `build`.** |
| `watch` | Optional explicit list of `.py` files to watch. Default: the `ui_*.py` modules `build` imported (discovered after the first build), else every `ui_*.py` under `src_dir`. |
| `src_dir` | Generated-source directory (default `<projectRoot>/src`). |

Returns the `QFileSystemWatcher` (also stored on the window).

:::tip
New projects created with **ProjectMaker** already use this pattern — the
generated `main.py` wraps `setupUi` in `build()` and calls `enable_hot_reload`,
so main-window hot reload works out of the box.
:::

---

## How it fits the dev loop

When you run your app under the dev server (the CLI, or **Run** in Designer),
changes are classified so the right thing happens:

- **`.scss` / `.json`** — the app live-reloads styles.
- **`.ui`** — regenerated to `src/ui_*.py`; embedded **component** forms
  hot-reload in place. A form imported by the entry script (a main-window form)
  triggers a restart **unless** the app opted into `enable_hot_reload`, in which
  case it rebuilds in place too.
- **Hand-written `.py`** outside the generated dir — a full restart.

The result: design in Qt Designer, press **Ctrl+S**, and see the change in the
live app — components and (with `enable_hot_reload`) the main window included.

---

## See also

- [QCustomComponentContainer](../01-Widgets/QCustomComponentContainer.md) — the
  embedding container and its `hotReload` / `filePath` properties.
- [Designer Tools, Live Bridge & MCP](designer-tools.md) — running the app from
  Designer and the live style bridge.
- [Command-Line Interface](../04-API-Reference/CMD.md) — `--monitor-ui`,
  `--convert-ui`, and the dev server.
