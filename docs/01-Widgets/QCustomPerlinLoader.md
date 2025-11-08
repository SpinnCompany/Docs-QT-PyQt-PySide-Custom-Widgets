# QCustomPerlinLoader

> **Reference Video:** [YouTube](https://www.youtube.com/watch?v=daVpOpvsCKQ&t=20s)  
> **All Rights Reserved**  
> **Edits and improvements:** Khamisi Kibet  
> **QT GUI by:** SPINN TV (YouTube)

---

## Overview

`QCustomPerlinLoader` is a custom animated loading widget built with Qt that uses Perlin Noise to generate dynamic, deformed circular patterns. This loader displays a loading message along with three animated, deformed circles, creating a visually engaging loading indicator. The animation is driven by a `QVariantAnimation` that continuously updates a noise-based offset, affecting the deformation of the circle paths.

---

![QCustomArcLoader GIF](https://github.com/KhamisiKibet/Docs-QT-PyQt-PySide-Custom-Widgets/raw/main/images/custom-perlin-loader.gif)

## Key Features

- **Dynamic Animation:**  
  Uses Perlin noise to deform circle points, resulting in smoothly animated, organically shifting shapes.

- **Customizable Appearance:**  
  Configure the size, colors, text message, font, and animation duration to match your application's style.

- **Smooth Rendering:**  
  Renders deformed circles using `QPainterPath` and anti-aliasing for a polished look.

- **Interactive Animation:**  
  The animation continuously updates and repaints the widget, creating a seamless loading effect.

---

## Constructor & Parameters

```python
QCustomPerlinLoader(
    parent: Optional[QWidget] = None,
    size: QSize = QSize(600, 600),
    message: str = "LOADING...",
    color = QColor("white"),
    fontFamily = "Ebrima",
    fontSize = 30,
    rayon: int = 200,
    duration: int = 60 * 1000,
    noiseOctaves: float = 0.8,
    noiseSeed: int = int(time.time()),
    backgroundColor: QColor = QColor("transparent"),
    circleColor1: QColor = QColor("#ff2e63"),
    circleColor2: QColor = QColor("#082e63"),
    circleColor3: QColor = QColor(57, 115, 171, 100)
) -> None
```

- **`parent`**: The parent widget.
- **`size`**: The fixed size of the loader widget (default: 600×600).
- **`message`**: Text message to display (default: "LOADING...").
- **`color`**: Color for the loading text.
- **`fontFamily` & `fontSize`**: Font settings for the loading message.
- **`rayon`**: Base radius used for calculating deformed circle points.
- **`duration`**: Total duration of the animation in milliseconds (default: 60,000 ms).
- **`noiseOctaves`**: Octaves parameter for the Perlin noise generator.
- **`noiseSeed`**: Seed for noise generation (default: current time).
- **`backgroundColor`**: Background color of the widget.
- **`circleColor1`, `circleColor2`, `circleColor3`**: Colors used for drawing the animated circles.

---

## Methods

### `start_animation()`
Initializes and starts the main animation using a `QVariantAnimation`. The animation runs for the specified duration, updating the `start` offset, which drives the deformation of the circles.

### `update_start_angle(new_value: float) -> None`
Slot connected to the animation's `valueChanged` signal. Updates the `start` variable with the new value and triggers a widget repaint.

### `get_deformed_point(angle: float, noise_generator: Noise) -> QPointF`
Calculates a deformed point on the circle based on the provided angle and a given noise generator.  
- Converts the angle to radians and computes the base coordinates.
- Applies a noise offset to deform the radius.
- Returns the computed `QPointF` for the deformed position.

### `draw_deformed_circles(painter: QPainter) -> None`
Draws three deformed circles using `QPainterPath`:
- **Path Creation:**  
  Begins paths for three circles using different noise generators.
- **Path Building:**  
  Iterates through angles from 1° to 360°, updating each path with deformed points.
- **Drawing & Coloring:**  
  Draws the paths and applies brushes to fill intersected regions with different colors.

### `draw_message(painter: QPainter) -> None`
Draws the loading message at the center of the widget:
- Sets the font using `fontFamily` and `fontSize`.
- Applies letter spacing.
- Renders the text centered within the widget.

### `paintEvent(e: QPaintEvent) -> None`
Overrides the default paint event to:
- Set up a `QPainter` with anti-aliasing.
- Draw a rounded rectangle as the background.
- Call `draw_deformed_circles()` to render the animated circles.
- Call `draw_message()` to display the loading text.
- Ends the painter.

---

## Usage Example

```python
from qtpy.QtWidgets import QApplication
from qtpy.QtGui import QColor
from Custom_Widgets.LoadingIndicators import QCustomPerlinLoader  # Adjust the import as needed

if __name__ == "__main__":
    app = QApplication([])

    # Create an instance of QCustomPerlinLoader with custom settings
    loader = QCustomPerlinLoader(
        size=QSize(600, 600),
        message="LOADING...",
        color=QColor("white"),
        fontFamily="Ebrima",
        fontSize=30,
        rayon=200,
        duration=60 * 1000,
        noiseOctaves=0.8,
        noiseSeed=42,  # Example seed
        backgroundColor=QColor("transparent"),
        circleColor1=QColor("#ff2e63"),
        circleColor2=QColor("#082e63"),
        circleColor3=QColor(57, 115, 171, 100)
    )
    
    loader.show()
    app.exec_()
```

---

## Notes

- **Perlin Noise Dependency:**  
  This widget uses the `perlin_noise` module. Ensure it is installed and available in your environment.

- **Animation Duration:**  
  The default animation duration is set to 60 seconds. Adjust the `duration` parameter to control how fast the animation runs.

- **Customization:**  
  Modify parameters such as colors, font settings, and `rayon` to tailor the loader's appearance to your application's theme.

---