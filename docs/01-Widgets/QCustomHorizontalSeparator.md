# QCustomHorizontalSeparator

`QCustomHorizontalSeparator` is a custom horizontal separator widget that provides a themable, configurable dividing line for organizing UI layouts. It automatically adapts to the application's theme and offers flexible styling options.

---

## Overview

- **Theme-Aware Design:**  
  Automatically uses the application's text color from the palette for seamless theme integration.

- **Customizable Appearance:**  
  Configurable color, thickness (height), and margins for precise visual control.

- **Flexible Sizing:**  
  Intelligent size hints with proper expansion behavior for layout integration.

- **Designer Ready:**  
  Full Qt Designer integration with custom icon and property support.

- **Lightweight:**  
  Minimal resource usage with efficient painting implementation.

---

## Constructor

```python
QCustomHorizontalSeparator(parent=None, color=None, height=1, margin=8)
```

- **parent:**  
  The parent widget (defaults to `None`).

- **color:**  
  Custom color for the separator line (uses theme text color if `None`).

- **height:**  
  Thickness of the separator line in pixels (default: 1).

- **margin:**  
  Vertical margin around the separator line in pixels (default: 8).

---

## Key Properties

### `color` (QColor)
- **Purpose:**  
  Color of the separator line.

- **Getter:**  
  Returns the current separator color (automatically uses theme text color if not set).

- **Setter:**  
  Sets a custom color for the separator.

- **Example:**  
  ```python
  separator.color = QColor("#cccccc")
  separator.color = "red"
  ```

### `height` (int)
- **Purpose:**  
  Thickness of the separator line in pixels.

- **Getter:**  
  Returns the current line height.

- **Setter:**  
  Updates the line thickness and triggers repaint.

- **Example:**  
  ```python
  separator.height = 2  # 2px thick line
  separator.height = 5  # 5px thick line
  ```

### `margin` (int)
- **Purpose:**  
  Vertical margin around the separator line in pixels.

- **Getter:**  
  Returns the current margin value.

- **Setter:**  
  Updates the margin and adjusts widget sizing.

- **Example:**  
  ```python
  separator.margin = 4   # Tight spacing
  separator.margin = 16  # Loose spacing
  ```

---

## Methods

### `getColor()`
- **Description:**  
  Returns the current separator color, automatically falling back to theme text color.

- **Returns:**  
  QColor object representing the separator color.

### `setColor(color)`
- **Description:**  
  Sets a custom color for the separator line.

- **Parameters:**  
  - `color`: QColor, color string, or color name.

### `getHeight()`
- **Description:**  
  Returns the current line thickness.

- **Returns:**  
  Integer representing line height in pixels.

### `setHeight(height)`
- **Description:**  
  Sets the thickness of the separator line.

- **Parameters:**  
  - `height`: Line thickness in pixels.

### `getMargin()`
- **Description:**  
  Returns the current vertical margin.

- **Returns:**  
  Integer representing margin in pixels.

### `setMargin(margin)`
- **Description:**  
  Sets the vertical margin around the separator line.

- **Parameters:**  
  - `margin`: Margin size in pixels.

### `sizeHint()`
- **Description:**  
  Provides the recommended size for the separator.

- **Returns:**  
  QSize(100, height + 2 * margin)

### `minimumSizeHint()`
- **Description:**  
  Provides the minimum recommended size.

- **Returns:**  
  QSize(20, height + 2 * margin)

### `paintEvent(event)`
- **Description:**  
  Handles custom painting of the separator line with anti-aliasing.

---

## Usage Example

### Basic Separator
```python
from qtpy.QtWidgets import QApplication, QVBoxLayout, QWidget, QLabel
from Custom_Widgets.QCustomHorizontalSeparator import QCustomHorizontalSeparator

app = QApplication([])

window = QWidget()
layout = QVBoxLayout(window)

# Add content
layout.addWidget(QLabel("Section 1"))

# Add default separator (uses theme color)
separator = QCustomHorizontalSeparator()
layout.addWidget(separator)

# Add more content
layout.addWidget(QLabel("Section 2"))

window.show()
app.exec_()
```

### Custom Styled Separators
```python
# Thin gray separator
thin_separator = QCustomHorizontalSeparator()
thin_separator.color = "#e0e0e0"
thin_separator.height = 1
thin_separator.margin = 4

# Thick colored separator
thick_separator = QCustomHorizontalSeparator()
thick_separator.color = QColor(74, 144, 226)  # Blue
thick_separator.height = 3
thick_separator.margin = 12

# Theme-integrated separator (automatically matches text color)
theme_separator = QCustomHorizontalSeparator()
# No color set - automatically uses palette text color
```

### Layout Organization
```python
class SettingsDialog(QWidget):
    def __init__(self):
        super().__init__()
        layout = QVBoxLayout(self)
        
        # General settings section
        layout.addWidget(QLabel("General Settings"))
        layout.addWidget(self.create_setting_widget("Theme"))
        layout.addWidget(self.create_setting_widget("Language"))
        
        # Separator between sections
        layout.addWidget(QCustomHorizontalSeparator(margin=12))
        
        # Privacy settings section  
        layout.addWidget(QLabel("Privacy Settings"))
        layout.addWidget(self.create_setting_widget("Data Collection"))
        layout.addWidget(self.create_setting_widget("Cookies"))
        
        # Another separator
        layout.addWidget(QCustomHorizontalSeparator(margin=12))
        
        # Advanced settings section
        layout.addWidget(QLabel("Advanced Settings"))
        layout.addWidget(self.create_setting_widget("Debug Mode"))
    
    def create_setting_widget(self, name):
        # Returns a setting widget (implementation omitted)
        pass
```

### Dynamic Theme Adaptation
```python
class ThemedSeparator(QCustomHorizontalSeparator):
    def __init__(self, parent=None):
        super().__init__(parent)
        
        # Monitor palette changes for dynamic theming
        self.paletteChanged.connect(self.on_palette_changed)
    
    def on_palette_changed(self):
        # Force color update when palette changes
        self._color = self.palette().color(QPalette.Text)
        self.update()
```

### JSON Styling Integration
```json
{
  "QCustomHorizontalSeparator": [
    {
      "name": "sectionSeparator",
      "color": "#dee2e6",
      "height": 2,
      "margin": 16
    },
    {
      "name": "subtleSeparator", 
      "color": "#f8f9fa",
      "height": 1,
      "margin": 8
    }
  ]
}
```

---

## Visual Customization

### Color Options
- **Theme Default:** Automatically uses `QPalette.Text` color
- **Custom Colors:** Any QColor-compatible value
- **CSS Colors:** Hex codes, color names, RGB values

### Thickness Variations
```python
# Ultra-thin (hairline)
separator.height = 1

# Standard 
separator.height = 2

# Bold
separator.height = 4

# Section divider
separator.height = 6
```

### Margin Settings
```python
# Compact
separator.margin = 2

# Standard
separator.margin = 8

# Spacious
separator.margin = 16

# Very spacious  
separator.margin = 24
```

---

## Design Features

### Size Behavior
- **Width:** Expands to fill available horizontal space
- **Height:** Fixed based on line thickness and margins
- **Minimum Width:** 20 pixels for visibility in small containers

### Theme Integration
- **Automatic Adaptation:** Changes with application theme
- **Palette Awareness:** Respects system color schemes
- **High Contrast:** Maintains visibility in all theme conditions

### Layout Compatibility
- **QHBoxLayout:** Creates vertical separation in horizontal layouts
- **QVBoxLayout:** Creates horizontal separation in vertical layouts  
- **Grid Layout:** Functions as row or column dividers
- **Form Layout:** Separates form sections clearly

---

## Additional Notes

- **Performance:**  
  Extremely lightweight with minimal painting overhead.

- **Accessibility:**  
  Provides clear visual separation for better content organization.

- **Cross-Platform:**  
  Consistent appearance across Windows, macOS, and Linux.

- **Customization:**  
  All visual properties are dynamically adjustable.

- **Integration:**  
  Works seamlessly with all Qt layout managers and other custom widgets.

---

The `QCustomHorizontalSeparator` is ideal for organizing forms, settings dialogs, list views, card layouts, and any UI that requires clear visual separation between content sections with theme-aware styling.