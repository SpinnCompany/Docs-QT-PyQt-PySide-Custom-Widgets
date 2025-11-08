# Filemonitor

## Overview

The Custom Widgets CLI provides simple commands to automate your Qt development workflow. These commands help you monitor UI changes, convert UI files to Python, and set up new projects.

## Basic Commands

### 1. Monitor UI Files for Changes

**Command:**
```bash
Custom_Widgets --monitor-ui [PATH] --qt-library [LIBRARY]
```

**What it does:**
- Watches your `.ui` file (or folder) for changes
- Automatically converts to Python when changes occur
- Keeps running until you stop it (Ctrl+C)

**Examples:**
```bash
# Monitor single file
Custom_Widgets --monitor-ui design/main_window.ui --qt-library PySide6

# Monitor entire folder
Custom_Widgets --monitor-ui design/ --qt-library PyQt5
```

**Options:**
- `--monitor-ui`: Path to file or folder
- `--qt-library`: Your Qt library (PySide6, PyQt5, etc.) - optional (default: PySide6)

### 2. Convert UI Files to Python

**Command:**
```bash
Custom_Widgets --convert-ui [PATH] --qt-library [LIBRARY]
```

**What it does:**
- Converts your `.ui` file to Python code
- Includes all custom widget integrations
- Runs once and exits

**Examples:**
```bash
# Convert single file
Custom_Widgets --convert-ui design/main_window.ui --qt-library PySide6

# Convert all files in folder
Custom_Widgets --convert-ui design/ --qt-library PyQt5
```

**Options:**
- `--convert-ui`: Path to file or folder
- `--qt-library`: Your Qt library - optional (default: PySide6)

### 3. Create New Project

**Command:**
```bash
Custom_Widgets --create-project
```

**What it does:**
- Sets up a new project with recommended structure
- Creates all necessary folders
- Prepares the environment for custom widgets

**Example:**
```bash
Custom_Widgets --create-project
```

## Getting Help

### Show Available Commands
```bash
Custom_Widgets
```
(Shows basic command summary)

### Detailed Help
```bash
Custom_Widgets --help
```
(Shows full help with all options)

## Common Workflow

1. **Start a new project:**
   ```bash
   Custom_Widgets --create-project
   ```

2. **Design your UI in Qt Designer**

3. **While designing, monitor changes:**
   ```bash
   Custom_Widgets --monitor-ui ui/main_window.ui
   ```

4. **Or convert when ready:**
   ```bash
   Custom_Widgets --convert-ui ui/main_window.ui
   ```

## Tips

- If you don't specify `--qt-library`, PySide6 will be used by default
- You can monitor a whole folder of UI files at once
- Generated Python files go in the `src/` folder
- JSON metadata files are created in `generated-files/json/`

## Troubleshooting

- Make sure your `.ui` file exists at the path you specify
- Supported Qt libraries: PySide6, PySide2, PyQt6, PyQt5
- If monitoring stops, check if the file was temporarily deleted (common in some editors)
