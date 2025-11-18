---
authors:
- Khamisi Kibet
date: '2025-11-12'
slug: qt-theme-styling-guide-json-stylesheet
tags:
- PySide6
- Python
- GUI
- Custom Widgets
- Tutorial
- version
- news
title: 'Qt Theme Styling Guide: Json Stylesheet'
---

# Creating Qt Dark and Light Themes for Custom Widgets

In this guide, we'll walk through creating professional Qt Dark and Light themes for your custom widgets applications. These themes follow Qt's design language while providing modern, visually appealing interfaces.

<!-- truncate -->

## Theme Color Palettes

### Qt Dark Theme Colors
- **Background**: `#1e1e1e` (Dark gray)
- **Text**: `#e0e0e0` (Light gray)
- **Accent**: `#41cd52` (Qt green)
- **Icons**: `#41cd52` (Qt green)
- **Cards**: `#2c2c2c` (Slightly lighter dark gray)
- **Footer**: `#111111` (Near black)

### Qt Light Theme Colors  
- **Background**: `#ffffff` (Pure white)
- **Text**: `#1e1e1e` (Dark gray)
- **Accent**: `#41cd52` (Qt green)
- **Icons**: `#41cd52` (Qt green)
- **Cards**: `#f8f8f8` (Off-white)
- **Footer**: `#e5e5e5` (Light gray)

## Complete Theme Configuration

Here's how to implement both themes in your `style.json`:

```json
{
  "QSettings": [
    {
      "ThemeSettings": {
        "QtDesignerIconsColor": "#41CD52",
        "CustomThemes": [
          {
            "Theme-name": "Qt-Dark-Theme",
            "Background-color": "#1e1e1e",
            "Text-color": "#e0e0e0",
            "Accent-color": "#41cd52",
            "Icons-color": "#41cd52",
            "Default-Theme": true,
            "Create-icons": true,
            "Other-variables": {
              "CARD_RADIUS": "12px",
              "FOOTER_BG": "#111111",
              "NAV_BG": "#1e1e1e",
              "CARD_BG": "#2c2c2c",
              "BORDER_COLOR": "rgba(65, 205, 82, 0.3)",
              "HOVER_GLOW": "0 12px 32px rgba(65, 205, 82, 0.45)",
              "GRADIENT": "linear-gradient(135deg, #41cd52, #2fa440)"
            }
          },
          {
            "Theme-name": "Qt-Light-Theme",
            "Background-color": "#ffffff",
            "Text-color": "#1e1e1e",
            "Accent-color": "#41cd52",
            "Icons-color": "#41cd52",
            "Default-Theme": false,
            "Create-icons": true,
            "Other-variables": {
              "CARD_RADIUS": "12px",
              "FOOTER_BG": "#e5e5e5",
              "NAV_BG": "#f5f5f5",
              "CARD_BG": "#f8f8f8",
              "BORDER_COLOR": "rgba(65, 205, 82, 0.2)",
              "HOVER_GLOW": "0 12px 32px rgba(65, 205, 82, 0.25)",
              "GRADIENT": "linear-gradient(135deg, #41cd52, #2fa440)"
            }
          }
        ]
      }
    }
  ]
}
```

## Key Design Principles

### 1. Color Contrast
- **Dark Theme**: High contrast between background (`#1e1e1e`) and text (`#e0e0e0`)
- **Light Theme**: Strong contrast between background (`#ffffff`) and text (`#1e1e1e`)
- **Accessibility**: Both themes maintain WCAG AA compliance for text readability

### 2. Consistent Accent Color
- Uses Qt's signature green (`#41cd52`) across both themes
- Provides visual consistency when switching between themes
- Green color represents Qt's brand identity

### 3. Layered Backgrounds
- **Dark Theme**: Three levels of darkness for depth
- **Light Theme**: Three levels of lightness for hierarchy
- Each layer serves a specific purpose in the UI

### 4. Modern Effects
- **Border Radius**: Consistent 12px rounded corners
- **Shadows**: Theme-appropriate glow effects
- **Gradients**: Subtle green gradients for visual interest

## Theme Variables Explained

### Core Colors
- `Background-color`: Main application background
- `Text-color`: Primary text color for readability  
- `Accent-color`: Primary brand color for interactive elements
- `Icons-color`: Color for all icon assets

### Additional Variables
- `CARD_RADIUS`: Border radius for cards and containers
- `FOOTER_BG`: Background color for footer areas
- `NAV_BG`: Background for navigation elements
- `CARD_BG`: Background for card components
- `BORDER_COLOR`: Border colors with theme-appropriate opacity
- `HOVER_GLOW`: Shadow effects for interactive states
- `GRADIENT`: CSS gradients for visual enhancements

## Implementation Tips

### 1. Setting Default Theme
```json
"Default-Theme": true
```
Set this to `true` for your preferred default theme. The other theme should have `false`.

### 2. Icon Generation
```json
"Create-icons": true
```
This ensures icons are automatically generated in your theme colors.

### 3. Opacity Adjustments
Notice how border colors use rgba with different opacity:
- Dark theme: `rgba(65, 205, 82, 0.3)` (more visible)
- Light theme: `rgba(65, 205, 82, 0.2)` (more subtle)

### 4. Shadow Intensity
- Dark theme shadows are more pronounced (`0.45` opacity)
- Light theme shadows are more subtle (`0.25` opacity)

## Theme Switching

To implement theme switching in your application:

1. Set one theme as default with `"Default-Theme": true`
2. Use the other theme for the alternative mode
3. Implement a toggle mechanism in your UI
4. Reload the theme configuration when switching

## Benefits of This Approach

### 1. Brand Consistency
- Maintains Qt's visual identity with the green accent color
- Professional appearance suitable for commercial applications

### 2. User Experience
- Dark theme reduces eye strain in low-light environments
- Light theme provides familiarity for traditional desktop apps
- Smooth transitions between themes

### 3. Developer Experience
- Clear variable naming makes customization easy
- Consistent design tokens across all components
- Easy to extend with additional color variations

### 4. Performance
- Efficient color scheme with minimal variables
- Optimized for both dark and light mode rendering

## Customization Examples

### Changing Accent Color
To use a different accent color, simply replace all instances of `#41cd52` with your preferred color:

```json
"Accent-color": "#0078d4",
"Icons-color": "#0078d4",
"QtDesignerIconsColor": "#0078d4"
```

### Adjusting Contrast
For higher contrast in the dark theme:
```json
"Background-color": "#121212",
"Text-color": "#ffffff"
```

### Modifying Border Radius
For softer or sharper corners:
```json
"CARD_RADIUS": "8px"  // Softer
"CARD_RADIUS": "16px" // Rounder
```

## Conclusion

These Qt Dark and Light themes provide a solid foundation for creating professional applications with custom widgets. The color schemes are carefully chosen to be both aesthetically pleasing and functionally effective, following modern design principles while staying true to Qt's visual identity.

Remember to test your themes in different lighting conditions and consider user preferences when deciding which theme to set as default. The flexibility of this system allows you to easily create additional theme variations or customize the existing ones to match your specific application needs.

For more advanced theming options, refer to the Custom Widgets documentation on GitHub and explore additional styling variables available for specific widget types.