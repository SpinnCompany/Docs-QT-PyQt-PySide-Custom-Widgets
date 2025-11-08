# QDraggableWidget

`QDraggableWidget` provides custom drag-and-drop functionality for PyQt/PySide applications. It includes two main classes: `QDragItem` for draggable elements and `QDragWidget` as a container that accepts and manages draggable items.

---

## Overview

- **Drag & Drop Support:**  
  Enables intuitive drag-and-drop reordering of widgets within containers.

- **Visual Feedback:**  
  Provides visual indicators during drag operations with drop targets.

- **Flexible Integration:**  
  Works with both programmatic creation and Qt Designer promotion.

- **Event Handling:**  
  Comprehensive mouse event handling for smooth drag interactions.

- **Customizable Appearance:**  
  Supports styling through standard Qt stylesheets.

---

## Installation

```bash
pip install QT-PyQt-PySide-Custom-Widgets
```

---

## Classes

### QDragItem
A custom widget that can be dragged within a `QDragWidget` container.

### QDragWidget  
A container widget that accepts `QDragItem` widgets and manages their drag-and-drop ordering.

---

## Usage

### Programmatic Creation

```python
from qtpy.QtWidgets import QApplication, QVBoxLayout
from Custom_Widgets.QDraggableWidget import QDragItem, QDragWidget

app = QApplication([])

# Create draggable items
drag_item1 = QDragItem()
drag_item1.setText("Item 1")
drag_item1.data = "item1_data"

drag_item2 = QDragItem() 
drag_item2.setText("Item 2")
drag_item2.data = "item2_data"

# Create drag container
drag_widget = QDragWidget()
layout = QVBoxLayout(drag_widget)
layout.addWidget(drag_item1)
layout.addWidget(drag_item2)

# Connect to order changes
drag_widget.orderChanged.connect(lambda order: print(f"New order: {order}"))

drag_widget.show()
app.exec_()
```

### Qt Designer Integration

#### Promoting to QDragWidget
1. **Open Qt Designer** and design your interface
2. **Right-click** the container widget (QWidget, QFrame, etc.)
3. **Select "Promote to..."**
4. **Configure promotion:**
   - Base class name: `QWidget` (or your container's type)
   - Promoted class name: `QDragWidget`
   - Header file: `Custom_Widgets.QDraggableWidget`

#### Promoting to QDragItem
1. **Right-click** the widget to make draggable
2. **Select "Promote to..."**
3. **Configure promotion:**
   - Base class name: `QWidget` (or your widget's type)
   - Promoted class name: `QDragItem`
   - Header file: `Custom_Widgets.QDraggableWidget`

---

## Key Features

### Drag Item Features
- **Mouse Event Handling:** Left-click and drag to initiate movement
- **Visual Feedback:** Custom cursor changes during drag operations
- **Data Storage:** Separate data storage from visual representation
- **Position Tracking:** Remembers original position for cancellation

### Drag Widget Features
- **Drop Target Visualization:** Shows visual indicator during drag operations
- **Flexible Layouts:** Supports both vertical and horizontal layouts
- **Order Tracking:** Emits signals when item order changes
- **Boundary Checking:** Validates drop positions within container bounds

---

## Properties

### QDragItem Properties
- `data` (any): Custom data associated with the drag item
- `original_parent` (QWidget): Reference to original parent widget
- `original_pos` (QPoint): Original position before dragging

### QDragWidget Signals
- `orderChanged(list)`: Emitted when drag items are reordered, contains list of item data

---

## Methods

### QDragItem Methods
- `mousePressEvent(e)`: Initiates drag operation on left click
- `mouseMoveEvent(e)`: Handles drag movement with visual feedback
- `mouseReleaseEvent(e)`: Resets cursor after drag completion
- `paintEvent(event)`: Custom widget painting

### QDragWidget Methods
- `dragEnterEvent(e)`: Accepts drag events
- `dragLeaveEvent(e)`: Hides target indicator on drag leave
- `dragMoveEvent(e)`: Updates drop target position during drag
- `dropEvent(e)`: Handles final drop and reordering
- `findDropLocation(e)`: Calculates optimal drop position
- `getItemData()`: Returns list of all item data in current order
- `paintEvent(event)`: Custom widget painting

---

## Advanced Usage

### Custom Styling
```python
# Style drag items
drag_item.setStyleSheet("""
    QDragItem {
        background-color: #3498db;
        color: white;
        padding: 10px;
        border-radius: 5px;
    }
    QDragItem:hover {
        background-color: #2980b9;
    }
""")

# Style drag container
drag_widget.setStyleSheet("""
    QDragWidget {
        background-color: #f8f9fa;
        border: 2px dashed #dee2e6;
        border-radius: 8px;
    }
""")
```

### Dynamic Item Management
```python
class DynamicDragManager:
    def __init__(self):
        self.drag_widget = QDragWidget()
        self.layout = QVBoxLayout(self.drag_widget)
        
    def add_item(self, text, data):
        item = QDragItem()
        item.setText(text)
        item.data = data
        self.layout.addWidget(item)
        
    def get_current_order(self):
        return self.drag_widget.getItemData()
        
    def clear_items(self):
        for i in reversed(range(self.layout.count())):
            widget = self.layout.itemAt(i).widget()
            if widget:
                widget.setParent(None)

# Usage
manager = DynamicDragManager()
manager.add_item("Task 1", {"id": 1, "priority": "high"})
manager.add_item("Task 2", {"id": 2, "priority": "medium"})
```

### Integration with Data Models
```python
class DataDrivenDragWidget(QDragWidget):
    def __init__(self, data_model):
        super().__init__()
        self.data_model = data_model
        self.layout = QVBoxLayout(self)
        self.populate_from_model()
        
        self.orderChanged.connect(self.on_order_changed)
    
    def populate_from_model(self):
        for item_data in self.data_model:
            item = QDragItem()
            item.setText(item_data['name'])
            item.data = item_data
            self.layout.addWidget(item)
    
    def on_order_changed(self, new_order):
        # Update data model based on new visual order
        self.data_model = new_order
        print(f"Model updated: {[item['name'] for item in new_order]}")
```

---

## Event Handling

### Drag Operations
1. **Drag Start:** Left mouse press on QDragItem
2. **Drag Move:** Mouse movement with left button held
3. **Drag Over:** Visual indicator shows drop position
4. **Drop:** Item inserted at target position, orderChanged signal emitted
5. **Drag Cancel:** Item returns to original position if dropped outside container

### Custom Event Handling
```python
class CustomDragItem(QDragItem):
    def mousePressEvent(self, e):
        if e.button() == Qt.LeftButton:
            print(f"Dragging item with data: {self.data}")
            super().mousePressEvent(e)
    
    def mouseReleaseEvent(self, e):
        print("Drag operation completed")
        super().mouseReleaseEvent(e)
```

---

## Additional Notes

- **Layout Compatibility:** Works with QVBoxLayout and QHBoxLayout
- **Performance:** Efficient rendering during drag operations
- **Accessibility:** Proper cursor feedback for user interaction
- **Error Handling:** Graceful handling of invalid drop positions
- **Cross-Platform:** Consistent behavior across Windows, macOS, and Linux

---

## Support Development

If you find these custom widgets helpful and would like to support their development, consider becoming a patron:

[Support us on Patreon](https://www.patreon.com/spinntv)

Your support helps maintain and improve these custom widgets for the community.

---

The `QDraggableWidget` module is ideal for creating sortable lists, customizable dashboards, task organizers, and any interface requiring intuitive drag-and-drop reordering of elements.