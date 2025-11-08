---
layout: default
title: QPushButton Groups
parent: Other Functions
nav_order: 2
permalink: /docs/other-functions/qpushbutton-group
---

# QPushButton Groups

Create organized button groups with active/inactive state management using QT-PyQt-PySide-Custom-Widgets.

![QT Grouped Buttons](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/blob/main/images/qt-nav-buttons.png?raw=true)

## Overview

QPushButton Groups allow you to create navigation button sets where only one button can be active at a time. This is perfect for navigation menus, tab interfaces, and any scenario where you need mutually exclusive button selection.

### Key Features

- **Mutual Exclusion:** Only one button active per group
- **Custom Styling:** Separate styles for active and inactive states
- **Dynamic Groups:** Support for multiple independent button groups
- **Theme Integration:** Works with application theme variables
- **Easy Configuration:** Simple JSON-based setup

---

## Installation

```bash
pip install QT-PyQt-PySide-Custom-Widgets
```

---

## Basic Usage

### 1. Create JSON Configuration

Create or edit your `style.json` file:

```json
{
  "QPushButtonGroup": [
    {
      "Buttons": [
        "homeBtn",
        "profileBtn", 
        "settingsBtn",
        "helpBtn"
      ],
      "ActiveButton": "homeBtn",
      "Style": [
        {
          "Active": "background-color: #015371; color: white;",
          "NotActive": "background-color: transparent; color: gray;"
        }
      ]
    }
  ]
}
```

### 2. Load Configuration in Your Application

```python
from Custom_Widgets import loadJsonStyle

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)
        
        # Load button group configuration
        loadJsonStyle(self, self.ui, jsonFiles={"style.json"})
```

---

## Advanced Configuration

### Multiple Button Groups

Create separate groups for different sections of your application:

```json
{
  "QPushButtonGroup": [
    {
      "Buttons": ["navHome", "navProfile", "navSettings"],
      "ActiveButton": "navHome",
      "Style": [
        {
          "Active": "background-color: #015371; border-radius: 5px;",
          "NotActive": "background-color: transparent;"
        }
      ]
    },
    {
      "Buttons": ["tabOverview", "tabDetails", "tabHistory"],
      "ActiveButton": "tabOverview", 
      "Style": [
        {
          "Active": "background-color: #28a745; color: white; font-weight: bold;",
          "NotActive": "background-color: #f8f9fa; color: #333;"
        }
      ]
    }
  ]
}
```

### Using Theme Variables

Leverage your application's theme system for consistent styling:

```json
{
  "QPushButtonGroup": [
    {
      "Buttons": ["homeBtn", "meetingsBtn", "downloadsBtn"],
      "ActiveButton": "homeBtn",
      "Style": [
        {
          "Active": "QPushButton{background-color: $COLOR_BACKGROUND_4; color: $COLOR_TEXT_1;}",
          "NotActive": "QPushButton{background-color: transparent; color: $COLOR_TEXT_2;}"
        }
      ]
    }
  ]
}
```

### Complex Styling Examples

```json
{
  "QPushButtonGroup": [
    {
      "Buttons": ["btn1", "btn2", "btn3"],
      "ActiveButton": "btn1",
      "Style": [
        {
          "Active": """
            QPushButton {
              background-color: #007bff;
              color: white;
              border: 2px solid #0056b3;
              border-radius: 8px;
              padding: 8px 16px;
              font-weight: bold;
            }
            QPushButton:hover {
              background-color: #0056b3;
            }
          """,
          "NotActive": """
            QPushButton {
              background-color: #f8f9fa;
              color: #333;
              border: 1px solid #dee2e6;
              border-radius: 8px;
              padding: 8px 16px;
            }
            QPushButton:hover {
              background-color: #e9ecef;
            }
          """
        }
      ]
    }
  ]
}
```

---

## Programmatic Access

### Accessing Button Group Properties

```python
# Get the group number of a button
group_number = self.ui.homeBtn.getButtonGroup()

# Get active style for the group
active_style = self.ui.homeBtn.getButtonGroupActiveStyle()

# Get inactive style for the group  
not_active_style = self.ui.homeBtn.getButtonGroupNotActiveStyle()

# Get all buttons in the group
group_buttons = self.ui.homeBtn.getButtonGroupButtons()
```

### Dynamic Style Updates

Change styles programmatically at runtime:

```python
# Update active style
self.ui.homeBtn.setButtonGroupActiveStyle("""
    QPushButton {
        background-color: #28a745;
        color: white;
        border-radius: 10px;
    }
""")

# Update inactive style
self.ui.homeBtn.setButtonGroupNotActiveStyle("""
    QPushButton {
        background-color: #6c757d;
        color: white;
        border-radius: 5px;
    }
""")
```

---

## Real-World Examples

### Navigation Sidebar

```json
{
  "QPushButtonGroup": [
    {
      "Buttons": ["navDashboard", "navAnalytics", "navUsers", "navSettings"],
      "ActiveButton": "navDashboard",
      "Style": [
        {
          "Active": """
            QPushButton {
              background-color: #343a40;
              color: white;
              border-left: 4px solid #007bff;
              padding: 12px 20px;
              text-align: left;
              font-weight: bold;
            }
          """,
          "NotActive": """
            QPushButton {
              background-color: transparent;
              color: #adb5bd;
              padding: 12px 20px;
              text-align: left;
              border: none;
            }
            QPushButton:hover {
              background-color: #495057;
              color: white;
            }
          """
        }
      ]
    }
  ]
}
```

### Tab Interface

```json
{
  "QPushButtonGroup": [
    {
      "Buttons": ["tabGeneral", "tabAdvanced", "tabPrivacy"],
      "ActiveButton": "tabGeneral",
      "Style": [
        {
          "Active": """
            QPushButton {
              background-color: white;
              color: #007bff;
              border-bottom: 3px solid #007bff;
              padding: 8px 16px;
              font-weight: bold;
            }
          """,
          "NotActive": """
            QPushButton {
              background-color: #f8f9fa;
              color: #6c757d;
              border-bottom: 3px solid transparent;
              padding: 8px 16px;
            }
            QPushButton:hover {
              background-color: #e9ecef;
              color: #495057;
            }
          """
        }
      ]
    }
  ]
}
```

---

## Best Practices

### 1. Consistent Naming
Use descriptive names for your buttons that indicate their purpose and group affiliation.

### 2. Theme Variables
Always use theme variables (`$COLOR_VARIABLE`) for colors to maintain consistency across your application.

### 3. Performance
- Keep style definitions concise
- Use shared styles for multiple groups when possible
- Avoid complex CSS selectors in JSON

### 4. Error Handling
```python
try:
    loadJsonStyle(self, self.ui, jsonFiles={"style.json"})
except Exception as e:
    print(f"Error loading button groups: {e}")
    # Fallback to default styling
```

---

## Troubleshooting

### Common Issues

1. **Buttons Not Grouping**
   - Verify button names match exactly in JSON and UI
   - Check for typos in the JSON configuration
   - Ensure `loadJsonStyle` is called after UI setup

2. **Styles Not Applying**
   - Verify CSS syntax in style definitions
   - Check that theme variables are properly defined
   - Ensure JSON file is in the correct location

3. **Multiple Groups Interfering**
   - Ensure button names are unique across groups
   - Verify each group has distinct style definitions

---

## API Reference

### QCustomQPushButtonGroup Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `getButtonGroup()` | Get the group number | `int` |
| `getButtonGroupActiveStyle()` | Get active style for group | `str` |
| `getButtonGroupNotActiveStyle()` | Get inactive style for group | `str` |
| `getButtonGroupButtons()` | Get all buttons in group | `list` |
| `setButtonGroupActiveStyle(style)` | Update active style | `None` |
| `setButtonGroupNotActiveStyle(style)` | Update inactive style | `None` |

---

## Video Tutorial

For a complete walkthrough, watch the full video tutorial:

[![QPushButton Groups Tutorial](https://img.youtube.com/vi/fPgwQJUFPIw/0.jpg)](https://youtu.be/fPgwQJUFPIw)