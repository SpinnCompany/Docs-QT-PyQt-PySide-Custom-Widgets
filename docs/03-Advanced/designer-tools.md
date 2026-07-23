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
  right-click menu (Open, Open in Editor, Reveal, Copy Path). Double-click
  opens the form **in the current Designer window** (via a synthetic
  file-drop onto the workbench — the one visible-open route PySide6 leaves
  available); a separate window is used only if Designer refuses the drop.
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

A **Workspace menu** switches the whole session to another project
without restarting Designer — ui listing, styles, themes, bridge and the
Run target all follow — with a recent-workspaces list. *Open Workspace…*
also lives in the UI Workspace dock (while *Set Folder…* only changes
which folder's `.ui` files are listed).

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

**Session & forms**
- `designer_status`, `designer_launch`, `designer_quit`
- `designer_open_files`, `designer_close_files`, `designer_reload_forms`
- `designer_list_templates`, `designer_new_form` — list the starting
  templates (Dashboard / Login / Settings / Blank) and create a form from one
- `designer_set_form_xml`, `designer_new_form_xml` — build or replace a form
  live from `.ui` XML
- `designer_screenshot` — the agent's eyes on your forms
- `designer_get_ui_code`, `designer_get_object_info` — form source & tree
- `designer_set_widget_property` — set a widget property (undoable)

**Styling & theme**
- `designer_set_stylesheet`, `designer_refresh_icons`
- `designer_qss_window`, `designer_qss_screenshot` — drive the QSS / Theme
  editor window (see below)

**Designer chrome**
- `designer_list_docks`, `designer_arrange_dock` — show / hide / move panes
- `designer_list_dialogs`, `designer_dismiss_dialog` — see and dismiss modal
  dialogs that would otherwise block automation
- `designer_list_actions`, `designer_trigger_action`, `designer_window`

**Project**
- `project_list_ui_files`, `project_new_ui`, `project_convert_ui`,
  `project_write_style`

### Driving the QSS / Theme editor

The QSS / Theme editor is a separate floating top-level window the dock tools
can't reach, so it has its own driver:

```
designer_qss_window(action, enabled)
   action='open'    show + raise the window
   action='close'   hide it
   action='status'  report { open, paintEntireDesigner, currentFile }
   action='paint'   toggle "Paint entire Designer" (apply the full current
                    theme app-wide, or clear it) via `enabled`
designer_qss_screenshot()   capture the window
```

This makes the whole theming surface — opening the editor, toggling
**Paint entire Designer**, and verifying the result with a screenshot —
scriptable end-to-end.

### Observe & drive the *running* app

The app launched by **▶ Run** / `designer_run_app` is a separate process. When
it runs under the dev server it hosts an in-app control server, so agents can
see into and drive the live app — not just the Designer canvas:

- `app_status`, `app_list_windows`, `app_screenshot` — is it up, what windows,
  what does it look like
- `app_object_tree`, `app_find` — the live widget tree and locate widgets
- `app_click`, `app_set_text`, `app_set_property`, `app_invoke` — interact:
  click a button, type into a field, set a property, call a slot
- `app_window` — move / raise the app window

A typical autonomous loop: the agent edits a `.ui` file on disk →
`designer_reload_forms` → `designer_screenshot` to verify visually →
`project_convert_ui` → `designer_run_app` → `app_screenshot` / `app_click` to
exercise the live app. Combined with the theme engine, the agent designs with
the exact SVG icons and styles your app ships, then drives the result.
