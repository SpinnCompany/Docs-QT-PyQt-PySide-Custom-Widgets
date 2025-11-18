# Command-Line Interface (CLI / CMD)

The **Custom Widgets CLI** allows you to perform a variety of tasks related to custom widgets in your Qt Desktop projects. It is a simple way to automate workflows such as monitoring UI files for changes, converting them into Python code, launching Qt Designer with custom widgets, and creating a new project with the recommended structure for custom widgets.

## Overview

The CLI provides the following functionalities:

* **Monitor UI files** for changes and automatically generate new Python files with custom widgets.
* **Convert UI files** into Python files, including all necessary custom widget integration.
* **Launch Qt Designer** from your current venv with optional **Custom Widgets** plugins loaded.
* **Create a new project** with the recommended folder structure for the **QT-PyQt-PySide-Custom-Widgets** module.

## Usage

To use the CLI, execute the `Custom_Widgets` command from your terminal with any of the available options. Below are the available commands:

### 1. Monitor UI File for Changes

Use this option to monitor a `.ui` file for changes. The CLI will automatically generate the corresponding `.py` file and other necessary files for the custom widgets.

```bash
Custom_Widgets --monitor-ui path/to/your/file.ui --qt-library PySide6
```

* `--monitor-ui`: Specifies the path to the `.ui` file (or folder) to monitor.
* `--qt-library`: (Optional) Specifies the Qt library (e.g., `PySide6`, `PyQt5`).

This command starts a file listener that watches for changes and automatically generates the required files when updates are detected.

**Monitor Folder for UI File Changes:**

```bash
Custom_Widgets --monitor-ui path/to/your/folder --qt-library PySide6
```

---

### 2. Convert UI File to Python Code

Convert a `.ui` file into a `.py` file, including necessary changes to integrate custom widgets.

```bash
Custom_Widgets --convert-ui path/to/your/file.ui --qt-library PySide6
```

* `--convert-ui`: Path to the `.ui` file to be converted.
* `--qt-library`: (Optional) Specifies the Qt library (e.g., `PySide6`, `PyQt5`).

The generated Python code will include all necessary imports and custom widgets from the **QT-PyQt-PySide-Custom-Widgets** module.

---

### 3. Launch Qt Designer

You can launch **Qt Designer** directly from your venv, with optional loading of **Custom Widgets** plugins.

```bash
Custom_Widgets --start-designer --plugins
```

* `--start-designer`: Launches Qt Designer from the current venv.
* `--plugins`: (Optional) If provided, loads the `Custom_Widgets/Plugins` folder automatically into Designer. If omitted, Designer will start without custom plugins.

**Features:**

* Automatically detects which Qt library is in use (`PySide6`, `PySide2`, `PyQt6`, `PyQt5`) via `qtpy`.
* Works cross-platform (Linux, macOS, Windows).
* Ensures plugins load safely without executing GUI objects at import.
* Loads Designer from **current working directory** and venv environment.

---

### 4. Create a New Project

Initialize a new project with the recommended folder structure for the **Custom Widgets** module.

```bash
Custom_Widgets --create-project
```

Check out the [`Project Maker`](/API-Reference/ProjectMaker) for more details.

---

### Error Handling and Help

If you run the command without specifying any valid options, a usage message is displayed:

```bash
Use 
'Custom_Widgets --monitor-ui ui-path' 
'Custom_Widgets --convert-ui ui-path' 
'Custom_Widgets --start-designer [--plugins]'
'Custom_Widgets --create-project'
```

For detailed help on each command:

```bash
Custom_Widgets --help
```

---

## Example Workflow

1. **Create a New Project:**

```bash
Custom_Widgets --create-project
```

2. **Monitor UI File for Changes:**

```bash
Custom_Widgets --monitor-ui path/to/your/file.ui --qt-library PySide6
```

3. **Convert UI File to Python:**

```bash
Custom_Widgets --convert-ui path/to/your/file.ui --qt-library PySide6
```

4. **Launch Designer with Plugins:**

```bash
Custom_Widgets --start-designer --plugins
```

5. **Launch Designer without Plugins:**

```bash
Custom_Widgets --start-designer
```

---

## Conclusion

The **Custom Widgets CLI** streamlines the process of working with custom widgets in your Qt applications. It automates repetitive tasks such as UI file monitoring, conversion to Python code, launching Designer with plugins, and project setup — all while being cross-platform and Qt-library agnostic.


