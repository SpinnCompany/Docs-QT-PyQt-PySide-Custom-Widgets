# Command-Line Interface (CLI / CMD)

The **Custom Widgets CLI** allows you to perform a variety of tasks related to custom widgets in your Qt Desktop projects. It is a simple way to automate workflows such as monitoring UI files for changes, converting them into Python code, and creating a new project with the recommended structure for custom widgets.

## Overview

The CLI provides the following functionalities:

- **Monitor UI files** for changes and automatically generate new Python files with custom widgets.
- **Convert UI files** into Python files, including all necessary custom widget integration.
- **Create a new project** with the recommended folder structure for the **QT-PyQt-PySide-Custom-Widgets** module.

## Usage

To use the CLI, execute the `Custom_Widgets` command from your terminal with any of the available options. Below are the available commands:

### 1. Monitor UI File for Changes
Use this option to monitor a `.ui` file for changes. The CLI will automatically generate the corresponding `.py` file and other necessary files for the custom widgets.

```bash
Custom_Widgets --monitor-ui path/to/your/file.ui --qt-library PySide6
```

- `--monitor-ui`: Specifies the path to the `.ui` file to monitor.
- `--qt-library`: (Optional) Specifies the Qt library (e.g., `PySide6`, `PyQt5`).
  
This command starts a file listener that watches for changes to the `.ui` file and automatically generates the required files when changes are detected.

**Monitor Folder for UI File Changes:**
   If you are working with multiple `.ui` files in a folder and want to automatically update the corresponding Python files whenever changes are detected, use:
   ```bash
   Custom_Widgets --monitor-ui path/to/your/folder --qt-library PySide6
   ```

### 2. Convert UI File to Python Code
This command is used to convert a `.ui` file into a `.py` file, which includes necessary changes to integrate custom widgets into the code.

```bash
Custom_Widgets --convert-ui path/to/your/file.ui --qt-library PySide6
```

- `--convert-ui`: Specifies the path to the `.ui` file to be converted.
- `--qt-library`: (Optional) Specifies the Qt library (e.g., `PySide6`, `PyQt5`).

The generated Python code will include all necessary imports and custom widgets from the **QT-PyQt-PySide-Custom-Widgets** module.

### 3. Create a New Project
This command initializes a new project with the recommended folder structure for the **Custom Widgets** module.

```bash
Custom_Widgets --create-project
```

Checkout the [`Project Maker`](/API-Reference/ProjectMaker) for more.

### Error Handling and Help
If you run the command without specifying any valid options, you will see a usage message with available options:

```bash
Use 
'Custom_Widgets --monitor-ui ui-path' 
'Custom_Widgets --convert-ui ui-path' 
'Custom_Widgets --create-project'
```

To get more details on each command, you can run the help command:

```bash
Custom_Widgets --help
```

## Example Workflow

1. **Create a New Project:**
   Start by setting up a new project with the following command:
   ```bash
   Custom_Widgets --create-project
   ```

2. **Monitor UI File for Changes:**
   If you are working on a `.ui` file and want to automatically update the corresponding Python file whenever you make changes, use:
   ```bash
   Custom_Widgets --monitor-ui path/to/your/file.ui --qt-library PySide6
   ```

3. **Convert UI File to Python:**
   Once you're done editing your `.ui` file and want to convert it into Python code, use:
   ```bash
   Custom_Widgets --convert-ui path/to/your/file.ui --qt-library PySide6
   ```

## Conclusion

The **Custom Widgets CLI** streamlines the process of working with custom widgets in your QT applications. It saves time by automating repetitive tasks such as UI file monitoring, conversion to Python code, and project setup.
