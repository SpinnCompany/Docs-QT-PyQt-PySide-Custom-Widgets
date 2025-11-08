# Utils

## Overview

The `utils.py` module provides utility functions for working with Qt applications, particularly for handling file paths, resource conversion, and designer integration. These utilities support the Custom Widgets framework.

## Path Utilities

### `get_absolute_path(relative_path)`
Converts a relative path to an absolute path based on the main script's directory.

**Parameters:**
- `relative_path` (str): The path relative to the main script

**Returns:**
- Absolute path (str)

**Example:**
```python
abs_path = get_absolute_path("ui/main_window.ui")
```

### `replace_url_prefix(url, new_prefix)`
Replaces the prefix in a Qt resource URL with a new prefix.

**Parameters:**
- `url` (str): Original resource URL (e.g., ":/images/icon.png")
- `new_prefix` (str): New prefix to use

**Returns:**
- Modified URL (str)

**Example:**
```python
new_url = replace_url_prefix(":/images/icon.png", "Qss/icons")
```

### `get_icon_path(icon)`
Gets the correct path for a themed icon, handling both QIcon objects and string paths.

**Parameters:**
- `icon` (QIcon|str): Icon to process

**Returns:**
- Path to themed icon (str)

## Designer Utilities

### `is_in_designer(widget)`
Checks if a widget is being viewed in Qt Designer.

**Parameters:**
- `widget`: The widget to check

**Returns:**
- `True` if in Designer, `False` otherwise

**Example:**
```python
if is_in_designer(self):
    print("Running in Qt Designer")
```

## File Conversion Utilities

### `createQrcFile(contents, filePath)`
Creates a Qt Resource Collection (.qrc) file.

**Parameters:**
- `contents` (str): XML content for the QRC file
- `filePath` (str): Destination path for the QRC file

### `qrcToPy(qrcFile, pyFile)`
Converts a .qrc file to a Python resource file.

**Parameters:**
- `qrcFile` (str): Path to input .qrc file
- `pyFile` (str): Path to output .py file

**Automatically detects Qt binding (PySide/PyQt) and uses correct compiler.**

### `uiToPy(uiFile, pyFile)`
Converts a .ui file to a Python file.

**Parameters:**
- `uiFile` (str): Path to input .ui file
- `pyFile` (str): Path to output .py file

**Automatically detects Qt binding (PySide/PyQt) and uses correct compiler.**

**Example:**
```python
uiToPy("design/main_window.ui", "src/ui_main_window.py")
```

## File System Utilities

### `renameFolder(old_name, new_name)`
Renames a folder, removing the destination if it exists.

**Parameters:**
- `old_name` (str): Current folder path
- `new_name` (str): New folder path

## SharedData Class

Singleton class for managing shared file URLs across the application.

### Methods:
- `add_file_url(file_url)`: Adds a file URL to track
- `get_file_urls()`: Returns all tracked file URLs
- `clear_file_urls()`: Clears all tracked URLs
- `url_exists(file_url)`: Checks if URL is being tracked

**Example:**
```python
shared = SharedData()
shared.add_file_url("styles/main.qss")
if shared.url_exists("styles/main.qss"):
    print("File is tracked")
```

## Usage Notes

- Path utilities handle cross-platform path formatting
- Conversion functions automatically detect your Qt binding (PySide/PyQt)
- The `SharedData` class helps coordinate file monitoring across components
- All functions include error handling for file operations

## Error Handling

Functions will:
- Silently handle most file system errors
- Print error messages for conversion failures
- Maintain consistent path formats across platforms