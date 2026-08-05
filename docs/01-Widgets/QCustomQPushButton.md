# QCustomQPushButton

`QCustomQPushButton` is a highly customizable button widget that extends Qt's standard `QPushButton` with advanced animations, themes, icons, and shadow effects. It provides a modern, interactive button experience with extensive styling options.

![Custom QPushButtons](/img/showcase/qpushbutton.png)

---

## Overview

- **Animated Transitions:**  
  Smooth background, border, and shadow animations with customizable easing curves.

- **Predefined Themes:**  
  13 built-in color themes with gradient effects and border animations.

- **Custom Themes:**  
  Support for custom color combinations with gradient or uniform backgrounds.

- **Icon Integration:**  
  Seamless integration with Iconify library for vector icons with animations.

- **Shadow Effects:**  
  Configurable drop shadows with animation capabilities.

- **Event-Driven Animations:**  
  Animations triggered by hover, click, or other user interactions.

---

## Installation

```bash
pip install QT-PyQt-PySide-Custom-Widgets
```

---

## Quick Start

### 1. Add it in Qt Designer

`QCustomQPushButton` is **registered as a native custom widget**, so once the
Custom Widgets Designer plugin is active you can drag it straight from the
widget box — no promotion step required.

- Open Qt Designer through the package's Designer launcher (which loads the
  Custom Widgets plugin).
- In the **widget box**, find **QCustomQPushButton** under the **Buttons**
  group and drag it onto your form.
- Select it and use the **property editor** to set its
  [`variant` and `sizeVariant`](#variants--sizes-design-tokens) — the styling
  updates live from the design tokens.

> **Promotion (alternative / no plugin):** if you are not running the Custom
> Widgets Designer plugin, you can still use the classic promotion route — add a
> `QPushButton`, right-click → **Promote widgets…**, with **Base class name**
> `QPushButton`, **Promoted class name** `QCustomQPushButton`, and **Header
> file** `Custom_Widgets.QCustomQPushButton.h`.

![QT Designer Promotion](/img/showcase/qpushbutton.png)

### 2. Basic Usage

```python
from Custom_Widgets import QCustomQPushButton

# Create custom button
button = QCustomQPushButton("Click Me")

# Apply theme
button.setObjectTheme(2)  # Theme number 2

# Set animation trigger
button.setObjectAnimateOn("hover")
```

---

## Variants & sizes (design tokens)

Alongside the classic gradient themes, `QCustomQPushButton` exposes two
**declared Qt properties** that style it from the design-token system — the same
tokens the rest of the modern widget catalog uses. They are set from the Qt
Designer property editor (or in code) and follow the active theme.

| Property | Type | Values | Default | Description |
|---|---|---|---|---|
| `variant` | str | `primary` / `secondary` / `outline` / `ghost` / `destructive` | `primary` | Semantic role — colour comes from the matching token. |
| `sizeVariant` | str | `sm` / `md` / `lg` | `md` | Padding / font size. Named `sizeVariant` (not `size`) so it does not shadow `QWidget.size()`. |

```python
from qtpy.QtWidgets import QApplication, QWidget, QHBoxLayout
from Custom_Widgets.QCustomQPushButton import QCustomQPushButton
from Custom_Widgets.JSonStyles.tokens import DesignTokens, applyDesignTokens

app = QApplication([])
applyDesignTokens(app, tokens=DesignTokens(theme="light"))

w = QWidget()
row = QHBoxLayout(w)
for variant in ("primary", "secondary", "outline", "ghost", "destructive"):
    b = QCustomQPushButton(variant.capitalize())
    b.variant = variant
    row.addWidget(b)

# sizes
small = QCustomQPushButton("Small"); small.sizeVariant = "sm"
large = QCustomQPushButton("Large"); large.sizeVariant = "lg"
row.addWidget(small)
row.addWidget(large)

w.show()
app.exec()
```

These are driven by tokenized QSS attribute selectors
(`QCustomQPushButton[variant="…"]`, see `button_qss` in
`Custom_Widgets/JSonStyles/tokens.py`) using the `primary`, `secondary`,
`outline`, `destructive`, and related roles. They work independently of the
gradient themes below — use whichever fits your design.

---

## Theming

### Predefined Themes

Apply one of 13 built-in themes:

```python
# Apply theme 1-13
button.setObjectTheme(1)   # Dark teal gradient
button.setObjectTheme(2)   # Pink to cyan gradient  
button.setObjectTheme(3)   # Lime to dark gradient
# ... up to theme 13
```

### Custom Themes

Create custom color themes:

```python
# Gradient background
button.setObjectCustomTheme("#2596be", "#1CB5E0")

# Uniform background  
button.setObjectCustomTheme("#ffffff", "#ffffff")
```

---

## Animations

### Animation Types

```python
# Animate background only
button.setObjectAnimation("background")

# Animate border only  
button.setObjectAnimation("border")

# Animate both (default)
button.setObjectAnimation("both")
```

### Animation Triggers

```python
# Animate on hover
button.setObjectAnimateOn("hover")

# Animate on click
button.setObjectAnimateOn("click")
```

### Animation Configuration

```python
# Set duration
button._animation.setDuration(1000)  # 1 second

# Set easing curve
from qtpy.QtCore import QEasingCurve
button._animation.setEasingCurve(QEasingCurve.InOutElastic)
```

---

## Icon System

### Basic Icon Setup

```python
from Custom_Widgets import iconify

# Apply icon
iconify(
    button,
    icon="font-awesome:solid:cloud-download-alt"
)
```

### Icon Customization

```python
iconify(
    button,
    icon="feather:loader",
    color="#ffffff",      # Icon color
    size=32,             # Icon size
    animation="spin",    # Animation type
    animateOn="hover"    # Trigger event
)
```

### Available Animations

- `"spin"` - Continuous rotation
- `"breathe"` - Pulsing opacity effect  
- `"spin and breathe"` - Combined effects

### Trigger Events

- `"hover"` - Animate on mouse hover
- `"click"` - Animate on mouse click
- `"all"` - Always animated

---

## Shadow Effects

### Basic Shadow

```python
from Custom_Widgets import applyButtonShadow

applyButtonShadow(button)
```

### Custom Shadow Configuration

```python
applyButtonShadow(
    button,
    color="#ffffff",           # Shadow color
    blurRadius=100,           # Blur intensity
    xOffset=2,                # Horizontal offset
    yOffset=2,                # Vertical offset
    animateShadow=True,       # Enable animation
    applyShadowOn="hover",    # Trigger event
    animateShadowDuration=500 # Animation duration
)
```

### Shadow Trigger Events

- `"hover"` - Show shadow on hover
- `"click"` - Show shadow on click
- (None) - Always visible

---

## Advanced Styling

### Default Style

Style applied during and after animations:

```python
button.setObjectDefaultStyle("""
    border-style: solid;
    border-width: 2px;
    border-radius: 3px;
    color: #d3dae3;
    padding: 5px;
""")
```

### Fallback Style

Style applied after animation completes:

```python
button.setObjectFallBackStyle("""
    background-color: green;
    border: 1px solid darkgreen;
""")
```

---

## JSON Configuration

### Basic Structure

```json
{
  "QPushButton": [
    {
      "name": "myButton",
      "theme": "2",
      "animateOn": "hover"
    }
  ]
}
```

### Complete JSON Example

```json
{
  "QPushButton": [
    {
      "name": "pushButton",
      "customTheme": [
        {
          "color1": "#2596be",
          "color2": "rgb(37, 150, 190)"
        }
      ],
      "animateOn": "hover",
      "animation": "both",
      "animationDuration": 1000,
      "iconify": [
        {
          "icon": "dash:admin-generic",
          "color": "white",
          "size": 32,
          "animation": "breathe",
          "animateOn": "hover"
        }
      ],
      "shadow": [
        {
          "color": "white",
          "applyShadowOn": "hover",
          "animateShadow": true,
          "animateShadowDuration": 500,
          "blurRadius": 100,
          "xOffset": 2,
          "yOffset": 2
        }
      ],
      "defaultStyle": [
        "border-style: solid;",
        "border-width: 2px;",
        "border-radius: 3px;",
        "color: #d3dae3;",
        "padding: 5px;"
      ],
      "fallBackStyle": [
        "background-color: green"
      ]
    }
  ]
}
```

### Loading JSON Styles

```python
from Custom_Widgets import loadJsonStyle

# Apply JSON styles
loadJsonStyle(self, self.ui)

# Check if button was themed
if not button.wasThemed:
    # Apply fallback styling
    applyAnimationThemeStyle(button, 2)
```

---

## Complete Example

```python
from qtpy.QtWidgets import QApplication, QWidget, QVBoxLayout
from Custom_Widgets import QCustomQPushButton, iconify, applyButtonShadow

app = QApplication([])

# Create main window
window = QWidget()
layout = QVBoxLayout(window)

# Create custom button
button = QCustomQPushButton("Animated Button")

# Apply theme and animations
button.setObjectTheme(2)
button.setObjectAnimateOn("hover")
button._animation.setDuration(800)

# Add icon with animation
iconify(
    button,
    icon="font-awesome:solid:rocket",
    color="#ffffff",
    size=24,
    animation="spin",
    animateOn="hover"
)

# Apply shadow
applyButtonShadow(
    button,
    color="rgba(0,0,0,50)",
    blurRadius=20,
    animateShadow=True,
    applyShadowOn="hover"
)

# Set custom styles
button.setObjectDefaultStyle("""
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
""")

layout.addWidget(button)
window.show()
app.exec_()
```

---

## Event Handling

### Mouse Events

- **enterEvent:** Triggered when mouse enters button
- **leaveEvent:** Triggered when mouse leaves button  
- **mousePressEvent:** Triggered on mouse button press
- **mouseReleaseEvent:** Triggered on mouse button release

### Animation States

- **Forward:** Plays animation from start to end
- **Backward:** Plays animation from end to start
- **Finished:** Emitted when animation completes

---

## Customization Reference

### Theme Colors

| Theme | Color 1 | Color 2 |
|-------|---------|---------|
| 1 | #091b1b | #55ffff |
| 2 | #f035da | #3dd9f5 |
| 3 | #c0db50 | #100e19 |
| ... | ... | ... |

### Easing Curves

- `Linear`
- `InQuad`, `OutQuad`, `InOutQuad`
- `InCubic`, `OutCubic`, `InOutCubic`
- `InElastic`, `OutElastic`, `InOutElastic`
- And many more Qt easing curves

### Icon Libraries

- **Font Awesome:** `font-awesome:solid:icon-name`
- **Feather:** `feather:icon-name`  
- **Material Design:** `material-design:icon-name`
- **Dash:** `dash:icon-name`

---

## Additional Resources

### Video Tutorials

- [Customize QPushButton Animations, Shadow, Border, Background, Icon - Modern GUI Design](https://youtu.be/qwShmLzYv4s)
- [Animate QPushButton, Install Font Libraries, Using ICONIFY Library](https://youtu.be/y9qQXn836K0)

### Example Downloads

[Download complete examples](https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets/tree/main/examples)

---

The `QCustomQPushButton` provides a comprehensive solution for creating modern, interactive buttons with extensive customization options for animations, themes, icons, and shadows.

<!-- generated:api-reference -->

## API reference

*Generated from the widget's live metaobject — do not edit by hand.*

### Properties

| Property | Type | Default |
|---|---|---|
| `text` | `string` | — |
| `icon` | `QIcon` | — |
| `iconSize` | `QSize` | — |
| `shortcut` | `QKeySequence` | — |
| `checkable` | `bool` | — |
| `checked` | `bool` | — |
| `autoRepeat` | `bool` | — |
| `autoExclusive` | `bool` | — |
| `autoRepeatDelay` | `int` | — |
| `autoRepeatInterval` | `int` | — |
| `down` | `bool` | — |
| `autoDefault` | `bool` | — |
| `default` | `bool` | — |
| `flat` | `bool` | — |
| `variant` | `enum: `primary` / `secondary` / `outline` / `ghost` / `destructive`` | `primary` |
| `sizeVariant` | `enum: `sm` / `md` / `lg`` | `md` |
| `iconColor` | `color` | — |
| `iconColorActive` | `color` | — |

### Methods

| Method | Description |
|---|---|
| `applyDefaultStyle()` | Apply the default style. |
| `doNothing()` | Do nothing. |
| `iconColor(*args, **kwargs)` | Icon color. |
| `iconColorActive(*args, **kwargs)` | Icon color active. |
| `removeButtonShadow()` | Remove a button shadow. |
| `setIconSize(size)` | Set the icon size. |
| `setObjectAnimateOn(trigger)` | Set the object animate on. |
| `setObjectAnimation(animation)` | Set the object animation. |
| `setObjectCustomTheme(color1, color2)` | Set the object custom theme. |
| `setObjectDefaultStyle(style)` | Set the object default style. |
| `setObjectFallBackStyle(style)` | Set the object fall back style. |
| `setObjectTheme(theme)` | Set the object theme. |
| `sizeVariant(*args, **kwargs)` | Size variant. |
| `variant(*args, **kwargs)` | Variant. |

<!-- /generated:api-reference -->
