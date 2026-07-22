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

- **UI Workspace** — your project's `.ui` files; double-click to open
- **QSS Editor** — syntax highlighting, property autocomplete, basic lint
  (`Check`), and `Apply to forms` for instant preview styling
- **Logs** — library and plugin messages, live

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
