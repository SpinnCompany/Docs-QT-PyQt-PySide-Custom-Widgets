---
authors:
- Khamisi Kibet
date: '2025-11-12'
slug: qt-theme-styling-guide-qsscss-stylesheet
tags:
- PySide6
- Python
- GUI
- Custom Widgets
- Tutorial
title: 'Qt Theme Styling Guide: Qss/Css Stylesheet'
---

# Qt Theme Variables Guide: Using Auto-Generated Theme Variables in QSS

This guide explains how to use the auto-generated theme variables in your QSS/SCSS files to create dynamic, theme-aware styles for your Qt applications.

<!-- truncate -->

## Understanding Auto-Generated Theme Variables

When you define themes in your `style.json` file, the Custom Widgets system automatically generates SCSS variables that you can use throughout your stylesheets. These variables are created based on your theme colors and custom variables.

### Core Color Variables

The system generates a comprehensive color palette from your base theme colors:

- **Background colors**: `$COLOR_BACKGROUND_1` through `$COLOR_BACKGROUND_6` (6 shades from light to dark)
- **Text colors**: `$COLOR_TEXT_1` through `$COLOR_TEXT_4` (4 shades from light to dark)  
- **Accent colors**: `$COLOR_ACCENT_1` through `$COLOR_ACCENT_4` (4 shades from light to dark)
- **RGB components**: Individual RGB values for each color (e.g., `$CB1_R`, `$CB1_G`, `$CB1_B` for background colors)

### Additional Generated Variables

- **Borders**: Pre-defined border styles (`$BORDER_1`, `$BORDER_2`, `$BORDER_3`)
- **Selection borders**: Accent-colored borders (`$BORDER_SELECTION_1`, etc.)
- **Border radius**: `$SIZE_BORDER_RADIUS`
- **Tooltip opacity**: `$OPACITY_TOOLTIP`
- **Resource paths**: `$PATH_RESOURCES`, `$RELATIVE_FOLDER`

### Custom Theme Variables

Variables defined in your JSON theme under `"Other-variables"` are also available:

```json
"Other-variables": {
  "CARD_RADIUS": "12px",
  "FOOTER_BG": "#0f0f0f",
  "NAV_BG": "#1e1e1e"
}
```

## Using Theme Variables in QSS/SCSS

### Basic Widget Styling

```scss
QWidget {
    background-color: $COLOR_BACKGROUND_1;
    color: $COLOR_TEXT_1;
}

QPushButton {
    background-color: $COLOR_ACCENT_1;
    color: $COLOR_TEXT_1;
    border-radius: $SIZE_BORDER_RADIUS;
    border: $BORDER_1;
}
```

### Creating Gradients with RGB Components

Use the RGB variables to create dynamic gradients:

```scss
QFrame#gradientFrame {
    background: qlineargradient(
        x1:0, y1:0, x2:1, y2:1,
        stop:0 rgba($CB1_R, $CB1_G, $CB1_B, 255),
        stop:1 rgba($CB3_R, $CB3_G, $CB3_B, 255)
    );
}
```

### Component-Specific Styling

```scss
// Cards with custom radius
QFrame#card {
    background-color: $COLOR_BACKGROUND_2;
    border-radius: $CARD_RADIUS;
    border: $BORDER_2;
}

// Navigation elements
QWidget#navigation {
    background-color: $NAV_BG;
}

// Footer styling
QWidget#footer {
    background-color: $FOOTER_BG;
}
```

### Complex Component Styling

For more complex components, you can create custom variables:

```scss
// Define custom gradients using theme variables
$MY_GRADIENT: qlineargradient(
    x1:0, y1:0, x2:1, y2:0.869,
    stop:0 $COLOR_BACKGROUND_1,
    stop:1 $COLOR_BACKGROUND_3
);

QMainWindow#customWindow {
    background: $MY_GRADIENT;
    
    QPushButton {
        background-color: $COLOR_ACCENT_2;
        &:hover {
            background-color: $COLOR_ACCENT_1;
        }
    }
}
```

### Form Elements with Dynamic Borders

```scss
QLineEdit, QComboBox {
    background-color: $COLOR_BACKGROUND_2;
    border: 2px solid $COLOR_BACKGROUND_4;
    border-radius: 8px;
    padding: 8px;
    
    &:focus {
        border-color: $COLOR_ACCENT_1;
    }
}
```

### Status Indicators

```scss
// Use accent colors for status indicators
.status-success {
    color: $COLOR_ACCENT_1;
    border: 1px solid $COLOR_ACCENT_1;
}

.status-warning {
    color: $COLOR_ACCENT_2;
    border: 1px solid $COLOR_ACCENT_2;
}

.status-error {
    color: $COLOR_ACCENT_3;
    border: 1px solid $COLOR_ACCENT_3;
}
```

## Best Practices

### 1. Use Semantic Variable Names
Create meaningful variable names for your custom styles:

```scss
$CARD_BACKGROUND: $COLOR_BACKGROUND_2;
$HEADER_TEXT: $COLOR_TEXT_1;
$BUTTON_PRIMARY: $COLOR_ACCENT_1;
```

### 2. Leverage the Color Hierarchy
- Use `$COLOR_BACKGROUND_1` for main backgrounds
- Use `$COLOR_BACKGROUND_2` for cards and panels  
- Use `$COLOR_BACKGROUND_3` for nested elements
- Use accent colors for interactive elements

### 3. Create Reusable Mixins
For complex styles, create SCSS mixins:

```scss
@mixin card-style {
    background-color: $COLOR_BACKGROUND_2;
    border-radius: $CARD_RADIUS;
    border: $BORDER_2;
    padding: 16px;
}

.my-card {
    @include card-style;
}
```

### 4. Use RGB Components for Transparency
Create semi-transparent overlays using RGB variables:

```scss
.overlay {
    background-color: rgba($CB1_R, $CB1_G, $CB1_B, 0.8);
}
```

### 5. Theme-Aware Animations
Create animations that work with any theme:

```scss
QPushButton {
    background-color: $COLOR_ACCENT_2;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: $COLOR_ACCENT_1;
    }
}
```

## Dynamic Theme Switching

When users switch themes, all variables are automatically updated, and your styles will reflect the new color scheme without any code changes.

## Example: Complete Component

```scss
// Dashboard card component
#DashboardCard {
    background: qlineargradient(
        x1:0, y1:0, x2:1, y2:1,
        stop:0 $COLOR_BACKGROUND_2,
        stop:1 $COLOR_BACKGROUND_3
    );
    border-radius: $CARD_RADIUS;
    border: $BORDER_2;
    
    QLabel#title {
        color: $COLOR_TEXT_1;
        font-size: 16px;
        font-weight: bold;
    }
    
    QLabel#value {
        color: $COLOR_ACCENT_1;
        font-size: 24px;
        font-weight: bold;
    }
    
    QPushButton#action {
        background-color: $COLOR_ACCENT_2;
        color: $COLOR_TEXT_1;
        border-radius: 6px;
        padding: 8px 16px;
        
        &:hover {
            background-color: $COLOR_ACCENT_1;
        }
    }
}
```

By using these auto-generated theme variables, you create styles that automatically adapt to any theme defined in your JSON configuration, ensuring consistency and making theme switching seamless for your users.