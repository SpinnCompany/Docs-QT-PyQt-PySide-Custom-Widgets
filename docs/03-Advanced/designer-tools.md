# Designer Tools, Live Bridge & MCP

Launching Qt Designer through the library gives you more than the custom
widgets — it installs tool docks, a live control bridge, and (optionally)
an MCP server so AI agents can drive Designer autonomously.

```bash
Custom_Widgets --start-designer --plugins    # run from your project folder
```

## Tool docks inside Designer

Python re-implementations of the classic
[QtDesignerPlugins](https://github.com/PyQt5/QtDesignerPlugins) suite:

- **UI Workspace** — the `.ui` files of one chosen folder (defaults to the
  project's `ui/`), deduplicated; **Set Folder** and **New Form** buttons; a
  right-click menu (Open, Reveal, Copy Path). Forms open in a Designer window
  (PySide6 can't open a form into the already-running instance's workspace).
- **QSS Editor** — opens the project's `Qss/scss/defaultStyle.scss` by
  default; **New Style File** creates an scss file and auto-`@import`s it into
  `defaultStyle.scss`. Editor keys: Tab/Shift+Tab indent, Ctrl+/ comment,
  Ctrl+D duplicate, Ctrl+S save, plus property autocomplete. **Auto-compile &
  apply on change** compiles the SCSS (qtsass) and applies it live to open
  form previews; **Repaint entire Designer window** extends that to the whole
  Designer. Styles live in scss — never inline in `.ui` files.
- **Custom Properties** — a selection-following panel of *rich* editors for
  custom widget properties: theme-name dropdowns, widget-reference dropdowns
  (filtered by type from the open form), easing-curve and choice dropdowns,
  color pickers and file pickers. It docks as a tab **next to Designer's own
  Property Editor**. Every registered widget declares its editors in a
  `DESIGNER_CUSTOM_PROPS` spec; right-click any custom widget →
  *Custom Properties…* to raise the panel. Edits go through the form cursor,
  so undo/redo works and values persist to the `.ui`.
- **Logs** — library and plugin messages, live, with a footer: level filter
  (All/Info/Warn/Error), search, clear, and warning/error counts. Hidden by
  default — the status-bar chip reopens it, and it raises itself when your
  app crashes. Output of the app you run from Designer streams here as
  `[app]` lines.
- Show/hide any pane from the **View** menu. Your dock arrangement is
  remembered between sessions; *View → Reset Custom Widgets Layout* restores
  the defaults.

## Run your app from Designer

The **Custom Widgets toolbar** closes the design loop without leaving
Designer:

- **▶ Run (F5)** starts the project's `main.py` under the dev-server
  supervisor. While it runs, **saving a form regenerates `src/ui_*.py` and
  hot-restarts the app** — design, Ctrl+S, see it live.
- **⏹ Stop (Shift+F5)** / **↻ Restart**, with a ●/○ state indicator.
- The **Theme** combo previews any `style.json` theme on the open form
  (undo-aware; Designer's own chrome is untouched).
- App output lands in the Logs dock; crashes raise it automatically.

**New Form…** in the UI Workspace offers starting templates — *Dashboard*
(sidebar + stacked pages), *Login*, *Settings page*, or *Blank* with the
theme-icons resource prewired — and the context menu can open any file in
your code editor.

## The live bridge

A control server (QLocalServer) runs inside Designer. A running
Custom_Widgets app connects automatically after every theme change, so:

- open forms **recolor** when the shared icon set regenerates
- form previews are **restyled** with the compiled theme QSS

No configuration needed — the socket name is derived from the project
folder, so launch both the app and Designer from the project root.

Protocol (newline-delimited JSON, for your own tooling):

| method | params | effect |
|---|---|---|
| `ping` | – | liveness check |
| `refreshIcons` | `color` | clear pixmap caches, repaint forms |
| `setStyleSheet` | `qss` | style open form previews |
| `reloadForms` | – | reload unmodified forms from disk |
| `openFiles` / `closeFiles` | `files`, `all` | manage forms |
| `getObjectInfos` | – | widget tree of open forms |
| `getUiCode` | `type`: `xml`/`pyside6` | current (dirty-aware) form source |
| `getScreenShot` | `type`: `current`/`all`/`main` | base64 PNG |

## MCP server for AI agents

Agents get the same run loop as the toolbar: `designer_run_app`,
`designer_stop_app`, `designer_restart_app`, `designer_app_status` and
`designer_app_logs` (last stdout/stderr lines, including tracebacks).

Expose the bridge and project workflow to agents (Claude Code, etc.) over
the Model Context Protocol:

```bash
pip install QT-PyQt-PySide-Custom-Widgets[mcp]
cd your-project
claude mcp add custom-widgets -- Custom_Widgets-mcp --project-dir .
```

Tools an agent gets:

- `designer_status`, `designer_launch`
- `designer_open_files`, `designer_close_files`, `designer_reload_forms`
- `designer_screenshot` — the agent's eyes on your forms
- `designer_get_ui_code`, `designer_get_object_info` — form source & tree
- `designer_set_stylesheet`, `designer_refresh_icons`
- `project_list_ui_files`, `project_new_ui`, `project_convert_ui`

A typical autonomous loop: the agent edits a `.ui` file on disk →
`designer_reload_forms` → `designer_screenshot` to verify visually →
`project_convert_ui` → run the app. Combined with the theme engine, the
agent designs with the exact SVG icons and styles your app ships.
