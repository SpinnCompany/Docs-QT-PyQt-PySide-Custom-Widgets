# QCustomAnnotationWidget

`QCustomAnnotationWidget` (Canvas) is a powerful image annotation tool that provides a comprehensive drawing canvas for creating and managing annotations on images. It supports multiple shape types, Bezier curves, polygonal annotations, and exports annotations to JSON format for machine learning datasets.

---

## Overview

- **Multi-Shape Annotation:**  
  Supports rectangles, ellipses, lines, polylines, polygons, and Bezier curves.

- **Project Management:**  
  Organizes annotations into project folders with automatic image and JSON file management.

- **Real-time Drawing:**  
  Interactive drawing with live preview and smooth cursor tracking.

- **JSON Export:**  
  Exports annotations in standardized JSON format compatible with machine learning frameworks.

- **Zoom Capabilities:**  
  Built-in zoom functionality for detailed annotation work.

- **Label Management:**  
  Supports multiple labels and organizes shapes by label categories.

---

## Constructor

```python
Canvas()
```

Creates a new annotation canvas with default settings.

---

## Key Properties

### `draw_shape` (str)
- **Purpose:**  
  Current drawing shape type.

- **Available Values:**  
  `"rectangle"`, `"ellipse"`, `"line"`, `"polyline"`, `"bezier"`, `"polygon"`

### `pen_color` (QColor)
- **Purpose:**  
  Current drawing pen color.

### `current_label` (str)
- **Purpose:**  
  Current annotation label for newly drawn shapes.

### `project_folder` (str)
- **Purpose:**  
  Path to the project folder for saving annotations.

### `zoom_factor` (float)
- **Purpose:**  
  Current zoom level multiplier.

---

## Methods

### `setProjectFolder(folder)`
- **Description:**  
  Sets the project folder path for saving annotations and images.

- **Parameters:**  
  - `folder`: Path to project directory.

### `setLabel(label)`
- **Description:**  
  Sets the current label for new annotations.

- **Parameters:**  
  - `label`: Label name string.

### `setBackgroundImage(image_path)`
- **Description:**  
  Loads an image as the canvas background and loads existing annotations.

- **Parameters:**  
  - `image_path`: Path to the image file.

### `setPenColor(c)`
- **Description:**  
  Sets the drawing pen color.

- **Parameters:**  
  - `c`: Color string or QColor object.

### `setDrawShape(shape)`
- **Description:**  
  Sets the current drawing shape type.

- **Parameters:**  
  - `shape`: Shape type string.

### `saveData()`
- **Description:**  
  Saves all annotations to JSON file in the project folder.

- **Returns:**  
  `True` if successful, `False` otherwise.

- **Features:**  
  - Copies image to project "images" folder
  - Creates JSON annotation file
  - Groups shapes by labels
  - Maintains coordinate data

### `loadImageAnnotations(image_url)`
- **Description:**  
  Loads annotations from JSON file for the specified image.

- **Parameters:**  
  - `image_url`: Path to the image file.

### `deleteShapeFromJson(image_url, shape_to_delete)`
- **Description:**  
  Removes a specific shape from the annotation JSON file.

- **Parameters:**  
  - `image_url`: Path to the image file.
  - `shape_to_delete`: Shape tuple to remove.

- **Returns:**  
  `True` if successful, `False` otherwise.

### `readLabelsFromJsonFiles()`
- **Description:**  
  Reads all unique labels from all JSON files in the project folder.

- **Returns:**  
  Set of unique label strings.

### `updateCanvas(update=False)`
- **Description:**  
  Redraws the canvas with all shapes and current drawing preview.

- **Parameters:**  
  - `update`: If `True`, includes current drawing preview.

### `deleteShape(shape)`
- **Description:**  
  Removes a shape from the canvas and JSON file.

- **Parameters:**  
  - `shape`: Shape tuple to delete.

### `zoomIn()`
- **Description:**  
  Increases zoom level by 10%.

### `zoomOut()`
- **Description:**  
  Decreases zoom level by 10%.

### `exportToPng()`
- **Description:**  
  Exports the current canvas (image + annotations) as PNG file.

---

## Signals

### `shapeAdded(shape_type, color, label, coordinates)`
- **Description:**  
  Emitted when a new shape is added to the canvas.

- **Parameters:**  
  - `shape_type`: Type of shape drawn
  - `color`: Pen color used
  - `label`: Annotation label
  - `coordinates`: Shape coordinates list

---

## Drawing Modes

### Rectangle & Ellipse
- **Mouse Press:** Set start point
- **Mouse Drag:** Live preview
- **Mouse Release:** Finalize shape

### Line
- **Mouse Press:** Set start point
- **Mouse Drag:** Live preview
- **Mouse Release:** Finalize line

### Polyline
- **Left Click:** Add point
- **Mouse Drag:** Continuous drawing
- **Right Click:** Finish polyline

### Bezier Curve
- **Left Click:** Add control point
- **Mouse Drag:** Adjust last control point
- **Right Click:** Finish curve

### Polygon
- **Left Click:** Add vertex
- **Mouse Drag:** Adjust last vertex
- **Right Click:** Finish polygon

---

## Usage Example

### Basic Setup
```python
from Custom_Widgets.QCustomAnnotationWidget import Canvas

# Create canvas
canvas = Canvas()

# Set project folder
canvas.setProjectFolder("/path/to/project")

# Load image for annotation
canvas.setBackgroundImage("/path/to/image.jpg")

# Set annotation label
canvas.setLabel("person")

# Set drawing color
canvas.setPenColor("#ff0000")  # Red

# Set drawing shape
canvas.setDrawShape("rectangle")
```

### Complete Annotation Workflow
```python
class AnnotationTool:
    def __init__(self):
        self.canvas = Canvas()
        self.setup_canvas()
    
    def setup_canvas(self):
        # Connect to shape added signal
        self.canvas.shapeAdded.connect(self.on_shape_added)
        
        # Set project structure
        self.canvas.setProjectFolder("my_annotation_project")
        
        # Set initial settings
        self.canvas.setLabel("object")
        self.canvas.setPenColor("#3498db")
        self.canvas.setDrawShape("rectangle")
    
    def load_image(self, image_path):
        self.canvas.setBackgroundImage(image_path)
    
    def on_shape_added(self, shape_type, color, label, coordinates):
        print(f"Shape added: {shape_type}, Label: {label}, Points: {len(coordinates)}")
    
    def save_annotations(self):
        if self.canvas.saveData():
            print("Annotations saved successfully!")
        else:
            print("Failed to save annotations.")
    
    def export_visualization(self):
        self.canvas.exportToPng()
```

### Multi-Label Annotation
```python
# Switch between different labels
canvas.setLabel("vehicle")
canvas.setPenColor("#e74c3c")  # Red
canvas.setDrawShape("rectangle")

# Annotate vehicles...

canvas.setLabel("pedestrian") 
canvas.setPenColor("#2ecc71")  # Green
canvas.setDrawShape("polygon")

# Annotate pedestrians...

# Save all annotations
canvas.saveData()
```

### Loading Existing Annotations
```python
# Load image with existing annotations
canvas.setBackgroundImage("project/images/image_001.jpg")

# The annotations are automatically loaded from:
# project/image_001.jpg.json

# Get all unique labels in project
labels = canvas.readLabelsFromJsonFiles()
print("Available labels:", labels)
```

---

## JSON Output Format

Annotations are saved in this standardized format:

```json
{
  "image_path": "images/sample.jpg",
  "annotations": [
    {
      "label": "person",
      "shapes": [
        {
          "type": "rectangle",
          "color": "#ff0000",
          "coordinates": [100, 150, 200, 300]
        },
        {
          "type": "polygon", 
          "color": "#00ff00",
          "coordinates": [
            [150, 200],
            [180, 220],
            [160, 250],
            [140, 230]
          ]
        }
      ]
    }
  ]
}
```

---

## Advanced Features

### Bezier Curve Mathematics
- Uses Bernstein polynomials for smooth curve calculation
- Supports multiple control points
- High precision with 1000 interpolation steps

### Polygon Support
- Creates closed polygonal shapes
- Useful for irregular object boundaries
- Maintains vertex order and connectivity

### Zoom Implementation
- Maintains aspect ratio during scaling
- Smooth zoom transitions
- High-quality image rendering

### Event Handling
- Comprehensive mouse event management
- Real-time drawing feedback
- Context-aware right-click actions

---

## Additional Notes

- **Image Formats:**  
  Supports all image formats supported by Qt (PNG, JPG, BMP, etc.)

- **Coordinate System:**  
  Uses image pixel coordinates for precise annotation

- **Performance:**  
  Efficient redrawing with selective updates

- **Compatibility:**  
  JSON output compatible with popular ML frameworks (YOLO, COCO, etc.)

- **Error Handling:**  
  Robust error handling for file operations and invalid inputs

---

The `QCustomAnnotationWidget` is ideal for computer vision projects, machine learning datasets, image labeling applications, and any scenario requiring precise image annotation with export capabilities.