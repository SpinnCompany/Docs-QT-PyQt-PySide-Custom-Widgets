---
title: MCP server
sidebar_label: MCP server
sidebar_class_name: sidebar-pro
description: Drive Qt Designer, run your app and read the widget catalogue from an AI agent, over MCP.
mdx:
  format: md
---

# MCP server

:::info Pro feature

The MCP server ships in **Custom Widgets Pro**. The free package under GPLv3
does not include it.

[See plans](https://customwidgets.org/pricing/)

:::

Custom Widgets exposes an **MCP** (Model Context Protocol) server, so an AI
agent can do the things you would otherwise do by hand: open a form in Qt
Designer, change a property, run the app, take a screenshot, read the widget
catalogue, click a button and check what happened.

It is not a chat wrapper around the docs. The agent drives the *real*
Designer process and the *real* running app.

## Starting it

This is the part that catches everyone, so it comes first.

```bash
python -m Custom_Widgets.mcp --transport http --port 8765
```

Leave it running. Agent sessions then connect automatically.

:::warning An HTTP MCP server is never started by the client

The client only *dials in*. If nothing is already listening on port 8765,
every session reports the server as unavailable — with no error explaining
why. Nine times out of ten "MCP is broken" means "the daemon is not running".

Check it:

```bash
ss -ltn | grep 8765          # expect LISTEN on 127.0.0.1:8765
```

:::

The transport flag is **not** optional. The default is `stdio`, while clients
are configured for `http`, so starting it bare gives you a working server that
nothing is configured to reach.

### Why HTTP and not stdio

Deliberate. The server is a *shared daemon*: several sessions and agents dial
into one process, so commands against a project are serialised by that
project's worker. A stdio server could not do that — every client would spawn
its own isolated copy, and two agents editing the same form would race.

### `Custom_Widgets-mcp` says command not found

That console script only exists once the package is installed
(`pip install -e .`). Working straight from a source tree, it is not on
`PATH`. Use `python -m Custom_Widgets.mcp` — the same entry point.

## Client configuration

```json
{
  "mcpServers": {
    "custom-widgets": { "type": "http", "url": "http://127.0.0.1:8765/mcp" }
  }
}
```

## Options

| Flag | Default | Notes |
|---|---|---|
| `--transport` | `stdio` | Must be `http` to match the client config |
| `--host` | `127.0.0.1` | Loopback only |
| `--port` | `8765` | Must match the client config |
| `--project-dir` | cwd | The server chdirs here and sets the project root |

## What the agent can do

51 tools, in five groups.

### Qt Designer

Launch and quit it, open and close forms, create a form from a template or
from raw `.ui` XML, read a form's generated source, inspect the widget tree,
set widget properties undoably, screenshot it, and drive its menus and docks.

| Tool | Purpose |
|---|---|
| `designer_launch` / `designer_quit` | Start and stop Designer |
| `designer_open_files` / `designer_close_files` | Manage open forms |
| `designer_new_form` / `designer_new_form_xml` | Create from a template or from XML |
| `designer_set_form_xml` | Replace a live form's XML |
| `designer_get_ui_code` | Read the generated source |
| `designer_get_object_info` | Inspect the widget tree |
| `designer_set_widget_property` | Change a property (undoable) |
| `designer_screenshot` | See the current state |

### The running app

Run, stop and restart the project app, read its output, then treat it as a
live target: list windows, find widgets, click, set text, set properties,
invoke slots, screenshot.

| Tool | Purpose |
|---|---|
| `designer_run_app` / `designer_stop_app` / `designer_restart_app` | Lifecycle |
| `designer_app_logs` | Read stdout and stderr |
| `app_find` / `app_click` / `app_set_text` | Drive the UI |
| `app_invoke` / `app_set_property` | Reach past the UI |
| `app_screenshot` / `app_object_tree` | Observe the result |

This is what makes the agent able to *verify* its own change rather than
assume it worked.

### The widget catalogue

| Tool | Purpose |
|---|---|
| `widgets_catalog` | Every widget, its properties, signals and defaults |
| `widget_signature` | The `.pyi` type signature for one widget |
| `render_widget` | Render a widget headless and look at it |
| `search_examples` | Search the shipped examples and docs |

### Styling

`designer_set_stylesheet`, `designer_qss_window`, `designer_refresh_icons`
and `project_write_style` drive the QSS/theme editor and write project SCSS.

### Design rules

`design_lint` runs the same checks as the CLI — glyph icons used as icons,
hardcoded hex colours that should be token roles, drop shadows — so an agent
gets told off for the same things a human would.

## Workspaces

`workspaces_status` and `designer_open_workspace` exist because one daemon
serves several projects. Switching workspace re-points Designer and the app
runner at another project folder without restarting anything.

## See also

- [Designer tools](designer-tools.md) — the same capabilities, by hand
- [Hot reload](hot-reload.md) — save a form, see the app restart
