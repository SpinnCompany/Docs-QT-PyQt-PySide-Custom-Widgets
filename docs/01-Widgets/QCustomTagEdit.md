# QTagEdit

`QTagEdit` is a custom tag-based input widget that allows users to create, manage, and remove tags with a visually appealing interface. It supports tag suggestions, duplicate checking, and dynamic layout management.

---

## Overview

- **Tag Management:**  
  Create, display, and remove tags with a clean, interactive interface.

- **Auto-Completion:**  
  Built-in tag suggestions with inline completion support.

- **Dynamic Layout:**  
  Uses flow layout for automatic tag positioning and wrapping.

- **Duplicate Prevention:**  
  Optional duplicate tag checking with customizable behavior.

- **Visual Feedback:**  
  Custom painted tags with delete buttons and hover effects.

---

## Constructor

```python
QTagEdit(parent=None, tag_suggestions=[])
```

- **parent:**  
  The parent widget (defaults to `None`).

- **tag_suggestions:**  
  List of suggested tag names for auto-completion.

---

## Key Properties

### `tags` (list)
- **Purpose:**  
  Returns all current tag names.

- **Getter:**  
  `tags()` method returns list of string tag names.

### `tag_suggestions` (list)
- **Purpose:**  
  List of suggested tags for auto-completion.

- **Setter:**  
  `setTagSuggestions(suggestions)` updates the suggestion list.

---

## Methods

### `addTag(text)`
- **Description:**  
  Adds a new tag to the widget.

- **Parameters:**  
  - `text`: Tag name string

- **Returns:**  
  `True` if tag was added successfully, `False` if duplicate checking failed.

- **Behavior:**  
  - Checks for duplicates if enabled
  - Creates visual tag frame
  - Updates layout automatically
  - Removes from suggestions if matched

### `removeTag(tag)`
- **Description:**  
  Removes a specific tag from the widget.

- **Parameters:**  
  - `tag`: Tag name string to remove

### `setTags(tags)`
- **Description:**  
  Replaces all current tags with a new list.

- **Parameters:**  
  - `tags`: List of tag name strings

### `clear(input=True)`
- **Description:**  
  Removes all tags from the widget.

- **Parameters:**  
  - `input`: If `True`, also clears the input field

### `enableCheckForDoubles(check_for_doubles)`
- **Description:**  
  Enables or disables duplicate tag checking.

- **Parameters:**  
  - `check_for_doubles`: `True` to enable duplicate checking

### `enableTagSuggestions(tag_suggestions)`
- **Description:**  
  Enables or disables tag suggestion auto-completion.

- **Parameters:**  
  - `tag_suggestions`: `True` to enable suggestions

### `setTagSuggestions(suggestions)`
- **Description:**  
  Updates the list of tag suggestions.

- **Parameters:**  
  - `suggestions`: List of suggested tag names

### `onDoubledTag(text)`
- **Description:**  
  Called when a duplicate tag is attempted (can be overridden).

- **Parameters:**  
  - `text`: The duplicate tag name

---

## Usage Example

### Basic Tag Editor
```python
from qtpy.QtWidgets import QApplication, QVBoxLayout, QWidget
from Custom_Widgets.QTagEdit import QTagEdit

app = QApplication([])

# Create main window
window = QWidget()
layout = QVBoxLayout(window)

# Create tag editor with suggestions
tag_editor = QTagEdit(tag_suggestions=[
    "Python", "Qt", "PySide", "PyQt", "Widget", 
    "Custom", "Layout", "Design"
])

# Enable features
tag_editor.enableTagSuggestions(True)
tag_editor.enableCheckForDoubles(True)

# Set initial tags
tag_editor.setTags(["Example", "Tags"])

layout.addWidget(tag_editor)
window.show()

app.exec_()
```

### Advanced Configuration
```python
class CustomTagEditor(QTagEdit):
    def __init__(self):
        super().__init__()
        
        # Custom configuration
        self.enableTagSuggestions(True)
        self.enableCheckForDoubles(True)
        
        # Pre-defined suggestions
        self.setTagSuggestions([
            "Urgent", "Important", "Todo", "Done",
            "Bug", "Feature", "Enhancement", "Documentation"
        ])
        
        # Pre-populate with some tags
        self.setTags(["Initial", "Setup"])
    
    def onDoubledTag(self, text):
        # Custom duplicate handling
        from qtpy.QtWidgets import QToolTip
        QToolTip.showText(self.mapToGlobal(self.rect().center()), 
                         f"Tag '{text}' already exists!")
```

### Integration with Data Models
```python
class TagManager(QWidget):
    def __init__(self):
        super().__init__()
        
        self.tag_editor = QTagEdit()
        self.tag_editor.enableTagSuggestions(True)
        self.tag_editor.enableCheckForDoubles(True)
        
        # Connect to tag changes
        self.setup_connections()
        self.setup_ui()
    
    def setup_connections(self):
        # Monitor tag changes for saving/processing
        def on_tag_changed():
            current_tags = self.tag_editor.tags()
            print(f"Current tags: {current_tags}")
            self.save_tags(current_tags)
        
        # You would typically connect to signals, but for demo:
        # This would be called on add/remove operations
    
    def setup_ui(self):
        layout = QVBoxLayout(self)
        layout.addWidget(QLabel("Manage Tags:"))
        layout.addWidget(self.tag_editor)
    
    def save_tags(self, tags):
        # Save tags to database or configuration
        print(f"Saving tags: {tags}")
    
    def load_tags(self, tags):
        # Load tags from storage
        self.tag_editor.setTags(tags)
```

### Styled Tag Editor
```python
def create_styled_tag_editor():
    tag_editor = QTagEdit()
    
    # Custom styling
    tag_editor.setStyleSheet("""
        QTagEdit {
            border: 2px solid #3498db;
            border-radius: 8px;
            padding: 5px;
            background-color: #ecf0f1;
        }
        
        QLineEdit {
            border: none;
            background: transparent;
            padding: 5px;
        }
    """)
    
    return tag_editor
```

### Dynamic Suggestions Based on Context
```python
class ContextAwareTagEditor(QTagEdit):
    def __init__(self, context_categories):
        super().__init__()
        self.context_categories = context_categories
        self.current_context = None
    
    def set_context(self, context):
        """Set the current context and update suggestions"""
        self.current_context = context
        if context in self.context_categories:
            self.setTagSuggestions(self.context_categories[context])
        else:
            self.setTagSuggestions([])
    
    def get_context_suggestions(self):
        """Generate suggestions based on current context"""
        base_suggestions = ["Important", "Review", "Follow-up"]
        
        if self.current_context == "development":
            return base_suggestions + ["Bug", "Feature", "Refactor", "Test"]
        elif self.current_context == "design":
            return base_suggestions + ["UI", "UX", "Mockup", "Prototype"]
        elif self.current_context == "documentation":
            return base_suggestions + ["Guide", "API", "Tutorial", "Example"]
        else:
            return base_suggestions

# Usage
categories = {
    "development": ["Bug", "Feature", "Enhancement", "Test"],
    "design": ["UI", "UX", "Wireframe", "Prototype"],
    "documentation": ["Guide", "API", "Tutorial", "Reference"]
}

tag_editor = ContextAwareTagEditor(categories)
tag_editor.set_context("development")
```

---

## Advanced Features

### Custom Tag Validation
```python
class ValidatedTagEditor(QTagEdit):
    def addTag(self, text):
        # Custom validation logic
        if not self.is_valid_tag(text):
            self.show_validation_error(text)
            return False
        
        return super().addTag(text)
    
    def is_valid_tag(self, text):
        # Example validation rules
        if len(text) < 2:
            return False
        if len(text) > 20:
            return False
        if not text.replace('_', '').isalnum():
            return False
        return True
    
    def show_validation_error(self, text):
        from qtpy.QtWidgets import QMessageBox
        QMessageBox.warning(self, "Invalid Tag", 
                           f"Tag '{text}' is invalid. Tags must be 2-20 characters, alphanumeric.")
```

### Tag Statistics and Analytics
```python
class AnalyticsTagEditor(QTagEdit):
    def __init__(self):
        super().__init__()
        self.tag_usage = {}
        self.setup_analytics()
    
    def setup_analytics(self):
        # Track tag usage
        self.tag_added.connect(self.on_tag_added)
        self.tag_removed.connect(self.on_tag_removed)
    
    def on_tag_added(self, tag):
        self.tag_usage[tag] = self.tag_usage.get(tag, 0) + 1
        print(f"Tag '{tag}' added. Total uses: {self.tag_usage[tag]}")
    
    def on_tag_removed(self, tag):
        print(f"Tag '{tag}' removed")
    
    def get_most_used_tags(self, limit=5):
        return sorted(self.tag_usage.items(), key=lambda x: x[1], reverse=True)[:limit]
```

---

## Customization Options

### Tag Appearance
The internal `__QTagFrame` class handles tag visualization:
- Rounded rectangle background
- Delete button with "✕" icon
- Custom painting with anti-aliasing
- Dynamic sizing based on content

### Input Behavior
- Dynamic input field width adjustment
- Enter key to add tags
- Backspace/delete for text editing
- Auto-completion with inline suggestions

### Layout Management
- Flow layout for automatic tag positioning
- Responsive tag wrapping
- Efficient space utilization
- Scroll area for large tag sets

---

## Additional Notes

- **Performance:**  
  Efficient layout management even with large numbers of tags.

- **Accessibility:**  
  Keyboard navigation and screen reader compatible.

- **Theme Integration:**  
  Automatically adapts to system theme colors.

- **Extensibility:**  
  Easy to subclass for custom behavior and styling.

- **Memory Management:**  
  Proper cleanup of removed tags and resources.

---

The `QTagEdit` widget is ideal for applications requiring tag-based input, such as document tagging systems, content categorization, project management tools, and any interface where users need to manage multiple labels or categories efficiently.