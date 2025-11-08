# QBadgeWidget

`QBadgeWidget` is a custom badge widget that displays text labels with colored backgrounds and rounded corners. It's perfect for showing status indicators, tags, notifications, or any short text labels with visual emphasis.

---

## Overview

- **Visual Badges:**  
  Creates attractive rounded badges with customizable colors and text.

- **Customizable Appearance:**  
  Fully configurable background color, text color, and content.

- **Click Interaction:**  
  Emits click signals for interactive badges.

- **Fixed Size Policy:**  
  Maintains consistent dimensions while allowing content adaptation.

- **Designer Integration:**  
  Provides XML description and icon for seamless Qt Designer integration.

---

## Constructor

```python
QBadgeWidget(
    parent=None,
    text="Badge text",
    background_color=QColor(255, 0, 0),
    text_color=QColor(255, 255, 255)
)
```

- **parent:**  
  The parent widget (defaults to `None`).

- **text:**  
  The text content displayed in the badge (default: "Badge text").

- **background_color:**  
  Background color of the badge (default: red).

- **text_color:**  
  Text color of the badge (default: white).

---

## Key Properties

### `text` (str)
- **Purpose:**  
  The text content displayed in the badge.

- **Getter:**  
  Returns the current badge text.

- **Setter:**  
  Updates the badge text and triggers repaint.

- **Example:**  
  ```python
  badge.text = "New"
  badge.text = "Status: Active"
  ```

### `backgroundColor` (QColor)
- **Purpose:**  
  Background color of the badge.

- **Getter:**  
  Returns the current background color.

- **Setter:**  
  Updates the background color and triggers repaint.

- **Example:**  
  ```python
  badge.backgroundColor = QColor("#3498db")
  badge.backgroundColor = QColor(52, 152, 219)
  ```

### `textColor` (QColor)
- **Purpose:**  
  Text color of the badge.

- **Getter:**  
  Returns the current text color.

- **Setter:**  
  Updates the text color and triggers repaint.

- **Example:**  
  ```python
  badge.textColor = QColor("#ffffff")
  badge.textColor = QColor(255, 255, 255)
  ```

---

## Methods

### `paintEvent(event)`
- **Description:**  
  Handles widget painting, rendering the rounded badge with text.

### `mousePressEvent(event)`
- **Description:**  
  Handles mouse click events and emits the `clicked` signal.

### `showEvent(event)`
- **Description:**  
  Ensures proper widget update when shown.

---

## Signals

### `clicked()`
- **Description:**  
  Emitted when the badge widget is clicked.

- **Usage:**  
  Connect to this signal to handle user interactions with the badge.

- **Example:**  
  ```python
  badge.clicked.connect(self.on_badge_clicked)
  ```

---

## Usage Example

### Basic Usage
```python
from qtpy.QtWidgets import QApplication, QVBoxLayout, QWidget
from qtpy.QtGui import QColor
from Custom_Widgets.QBadgeWidget import QBadgeWidget

app = QApplication([])

# Create main window
window = QWidget()
layout = QVBoxLayout(window)

# Create badge with default settings
badge = QBadgeWidget()

# Create badge with custom settings
custom_badge = QBadgeWidget(
    text="Premium",
    background_color=QColor(255, 215, 0),  # Gold
    text_color=QColor(0, 0, 0)             # Black
)

layout.addWidget(badge)
layout.addWidget(custom_badge)
window.show()

app.exec_()
```

### Status Indicators
```python
from qtpy.QtGui import QColor

def create_status_badge(status):
    """Create badges for different status types"""
    status_config = {
        'active': {'text': 'Active', 'bg_color': QColor(46, 204, 113), 'text_color': QColor(255, 255, 255)},
        'inactive': {'text': 'Inactive', 'bg_color': QColor(149, 165, 166), 'text_color': QColor(255, 255, 255)},
        'pending': {'text': 'Pending', 'bg_color': QColor(241, 196, 15), 'text_color': QColor(0, 0, 0)},
        'error': {'text': 'Error', 'bg_color': QColor(231, 76, 60), 'text_color': QColor(255, 255, 255)}
    }
    
    config = status_config.get(status, status_config['inactive'])
    return QBadgeWidget(
        text=config['text'],
        background_color=config['bg_color'],
        text_color=config['text_color']
    )

# Usage
active_badge = create_status_badge('active')
pending_badge = create_status_badge('pending')
error_badge = create_status_badge('error')
```

### Interactive Badges
```python
class TagSystem:
    def __init__(self):
        self.tags = []
        self.setup_ui()
    
    def setup_ui(self):
        self.layout = QVBoxLayout()
        
        # Create some tags
        tags_data = [
            {"text": "Python", "color": QColor(52, 152, 219)},
            {"text": "Qt", "color": QColor(155, 89, 182)},
            {"text": "GUI", "color": QColor(46, 204, 113)},
            {"text": "Widgets", "color": QColor(230, 126, 34)}
        ]
        
        for tag_data in tags_data:
            tag = QBadgeWidget(
                text=tag_data["text"],
                background_color=tag_data["color"],
                text_color=QColor(255, 255, 255)
            )
            tag.clicked.connect(lambda checked, t=tag_data["text"]: self.on_tag_clicked(t))
            self.tags.append(tag)
            self.layout.addWidget(tag)
    
    def on_tag_clicked(self, tag_text):
        print(f"Tag clicked: {tag_text}")
        # Filter content, show details, etc.
```

### Dynamic Badge Updates
```python
class NotificationBadge:
    def __init__(self):
        self.badge = QBadgeWidget(
            text="0",
            background_color=QColor(231, 76, 60),  # Red
            text_color=QColor(255, 255, 255)
        )
        self.notification_count = 0
    
    def add_notification(self):
        self.notification_count += 1
        self.update_badge()
    
    def clear_notifications(self):
        self.notification_count = 0
        self.update_badge()
    
    def update_badge(self):
        if self.notification_count > 0:
            self.badge.text = str(self.notification_count)
            # Make it more prominent for higher counts
            if self.notification_count > 9:
                self.badge.backgroundColor = QColor(192, 57, 43)  # Darker red
        else:
            self.badge.text = "0"
            self.badge.backgroundColor = QColor(149, 165, 166)  # Gray
    
    def connect_click(self):
        self.badge.clicked.connect(self.show_notifications)
    
    def show_notifications(self):
        print(f"Showing {self.notification_count} notifications")
        self.clear_notifications()
```

### Category Tags
```python
def create_category_tags(categories):
    """Create badges for different content categories"""
    category_colors = {
        'technology': QColor(52, 152, 219),
        'design': QColor(155, 89, 182),
        'business': QColor(46, 204, 113),
        'education': QColor(241, 196, 15),
        'entertainment': QColor(230, 126, 34)
    }
    
    tags = []
    for category in categories:
        color = category_colors.get(category.lower(), QColor(149, 165, 166))
        tag = QBadgeWidget(
            text=category.title(),
            background_color=color,
            text_color=QColor(255, 255, 255)
        )
        tags.append(tag)
    
    return tags

# Usage
categories = ['technology', 'design', 'business']
category_tags = create_category_tags(categories)
```

---

## Design Features

### Default Appearance
- **Size:** Approximately 80x30 pixels (adapts to content)
- **Corners:** 10px rounded corners for pill shape
- **Font:** Arial, 10pt
- **Cursor:** Pointing hand cursor indicates clickability
- **Alignment:** Centered text

### Visual Properties
- **Anti-aliasing:** Smooth edges for rounded corners
- **Fixed Size Policy:** Maintains consistent dimensions
- **Transparent Background:** Only the badge shape is visible
- **High Contrast:** Default white text on colored background

### Customization Options
- **Text Content:** Any string value
- **Colors:** Full RGB color support
- **Size:** Adapts to text length while maintaining height
- **Interactivity:** Optional click handling

---

## Additional Notes

- **Text Length:**  
  Automatically adjusts width to accommodate text content while maintaining consistent height.

- **Accessibility:**  
  Clickable area covers the entire badge for easy interaction.

- **Performance:**  
  Lightweight rendering with efficient paint events.

- **Theme Compatibility:**  
  Customizable colors work well with any application theme.

- **Use Cases:**  
  Ideal for status indicators, tags, labels, notifications, categories, and any short text that needs visual emphasis.

---

The `QBadgeWidget` is perfect for modern UI designs requiring visual indicators, status displays, interactive tags, or any situation where you need to present short text with strong visual impact and optional interactivity.