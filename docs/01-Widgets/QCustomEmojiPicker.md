# QCustomEmojiPicker

`QCustomEmojiPicker` is a comprehensive emoji selection widget that provides a user-friendly interface for browsing and selecting emojis from a complete emoji library. It features search capabilities, categorized display, and seamless integration with text input widgets.

---

## Overview

- **Complete Emoji Library:**  
  Includes a comprehensive collection of emojis organized into logical categories.

- **Smart Search:**  
  Real-time search functionality with performance-optimized filtering options.

- **Visual Preview:**  
  Hover preview shows emoji details including visual representation and name.

- **Target Integration:**  
  Automatically inserts selected emojis into target text widgets (QLineEdit, QTextEdit, etc.).

- **Customizable Layout:**  
  Configurable items per row and tail positioning for overlay display.

---

## Constructor

```python
QCustomEmojiPicker(
    parent=None, 
    target=None, 
    tailPosition="top-center", 
    itemsPerRow=8, 
    performanceSearch=True, 
    howForm=None
)
```

- **parent:**  
  The parent widget (defaults to `None`).

- **target:**  
  Target widget where selected emojis will be inserted (QLineEdit, QTextEdit, etc.).

- **tailPosition:**  
  Position of the tip overlay tail relative to target widget.

- **itemsPerRow:**  
  Number of emoji buttons to display per row in the grid.

- **performanceSearch:**  
  If `True`, only shows emojis starting with search text for better performance.

---

## Key Properties

### `selected_emoji` (str)
- **Purpose:**  
  Stores the currently selected emoji character.

- **Type:**  
  String containing the emoji Unicode character.

### `items_per_row` (int)
- **Purpose:**  
  Controls the grid layout density for emoji display.

### `performance_search` (bool)
- **Purpose:**  
  Optimizes search performance by matching only from the beginning of emoji names.

### `emojis` (dict)
- **Purpose:**  
  Dictionary containing categorized emoji data loaded from JSON.

### `total_emojis` (dict)
- **Purpose:**  
  Flat dictionary of all emojis for efficient searching.

---

## Methods

### `select() -> Union[str, None]`
- **Description:**  
  Displays the emoji picker and returns the selected emoji.

- **Returns:**  
  Selected emoji string if an emoji was chosen, `None` if dialog was closed without selection.

- **Example:**  
  ```python
  emoji = picker.select()
  if emoji:
      print(f"Selected emoji: {emoji}")
  ```

### `on_input(text: str)`
- **Description:**  
  Handles search input changes and filters emojis based on search text.

- **Parameters:**  
  - `text`: Search query string for filtering emojis.

- **Behavior:**  
  - Shows/hides emoji categories based on search
  - Creates "Search results" group for filtered emojis
  - Optimizes search based on `performance_search` setting

### `updateTargetText()`
- **Description:**  
  Inserts the selected emoji into the target widget.

- **Supported Widgets:**  
  - `QLineEdit`: Appends emoji to current text
  - `QTextEdit`: Inserts emoji at cursor position
  - `QPlainTextEdit`: Inserts emoji at cursor position

---

## Usage Example

### Basic Emoji Picker
```python
from Custom_Widgets.QCustomEmojiPicker import QCustomEmojiPicker
from qtpy.QtWidgets import QLineEdit, QApplication

app = QApplication([])

# Create target text field
text_input = QLineEdit()
text_input.show()

# Create emoji picker targeting the text field
picker = QCustomEmojiPicker(
    target=text_input,
    tailPosition="top-center",
    itemsPerRow=10
)

# Show picker when needed (e.g., on button click)
picker.show()
```

### Programmatic Emoji Selection
```python
def get_emoji_from_user():
    picker = QCustomEmojiPicker()
    selected_emoji = picker.select()
    
    if selected_emoji:
        return selected_emoji
    else:
        return "No emoji selected"

# Usage
emoji = get_emoji_from_user()
print(f"User selected: {emoji}")
```

### Integrated with Text Editor
```python
class TextEditorWithEmoji:
    def __init__(self):
        self.text_edit = QTextEdit()
        self.emoji_button = QPushButton("😊")
        self.emoji_button.clicked.connect(self.show_emoji_picker)
    
    def show_emoji_picker(self):
        picker = QCustomEmojiPicker(
            target=self.text_edit,
            tailPosition="bottom-center",
            itemsPerRow=12
        )
        picker.show()
```

### Custom Search Configuration
```python
# Performance-optimized search (faster)
fast_picker = QCustomEmojiPicker(
    performanceSearch=True  # Only matches beginning of names
)

# Comprehensive search (slower but more thorough)
thorough_picker = QCustomEmojiPicker(
    performanceSearch=False  # Matches anywhere in names
)
```

---

## Emoji Data Structure

The emoji picker loads data from `components/json/emojis.json` with this structure:

```json
{
  "Smileys & Emotion": {
    "😀": "grinning face",
    "😃": "grinning face with big eyes",
    "😄": "grinning face with smiling eyes"
  },
  "People & Body": {
    "👋": "waving hand", 
    "🤚": "raised back of hand",
    "🖐️": "hand with fingers splayed"
  },
  "Animals & Nature": {
    "🐵": "monkey face",
    "🐒": "monkey",
    "🦍": "gorilla"
  }
}
```

---

## Customization Options

### Layout Configuration
```python
# Dense layout - more emojis per row
dense_picker = QCustomEmojiPicker(itemsPerRow=12)

# Sparse layout - fewer emojis per row  
sparse_picker = QCustomEmojiPicker(itemsPerRow=6)
```

### Styling
The emoji buttons use built-in styling:
```css
QPushButton {
  font-size: 20px;
  border-radius: 50%;
}
QPushButton:hover {
  background-color: [darker button color]
}
```

### Positioning
```python
# Different tail positions for overlay
top_picker = QCustomEmojiPicker(tailPosition="top-center")
bottom_picker = QCustomEmojiPicker(tailPosition="bottom-center")
left_picker = QCustomEmojiPicker(tailPosition="left-middle")
right_picker = QCustomEmojiPicker(tailPosition="right-middle")
```

---

## Advanced Features

### Hover Preview System
- **Real-time Updates:** Shows emoji and name when hovering over buttons
- **Context-Aware:** Displays category-specific information
- **Search Integration:** Works with both categorized and search result emojis

### Performance Optimization
```python
# Fast search - ideal for large emoji sets
fast_picker = QCustomEmojiPicker(performanceSearch=True)

# This only matches emojis where the name starts with search text
# Example: Searching "cat" matches "cat", "cat face" but not "wildcat"
```

### Target Widget Support
The picker automatically detects and supports:
- **QLineEdit:** Appends to text content
- **QTextEdit:** Inserts at cursor position with rich text support
- **QPlainTextEdit:** Inserts at cursor position
- **Extensible:** Easy to add support for other editable widgets

---

## Internal Classes

### `__QHoverPushButton`
- **Purpose:** Custom button with hover detection for emoji preview
- **Features:**
  - Mouse enter/leave event handling
  - Automatic preview updates
  - Target text insertion on click
  - Visual feedback on hover

---

## Additional Notes

- **Unicode Support:**  
  Fully supports Unicode emoji characters and modern emoji standards.

- **Accessibility:**  
  Provides visual feedback and search functionality for easy emoji discovery.

- **Memory Efficient:**  
  Loads emoji data once and manages UI elements dynamically.

- **Cross-Platform:**  
  Works consistently across all platforms supported by Qt.

- **Extensible:**  
  Easy to add new emoji categories or customize the emoji dataset.

---

The `QCustomEmojiPicker` is perfect for chat applications, social media interfaces, comment systems, note-taking apps, and any application that benefits from easy emoji insertion with a modern, user-friendly interface.