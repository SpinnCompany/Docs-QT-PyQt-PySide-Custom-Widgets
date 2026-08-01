# SVG Theme Icons

## Vector icons for your app and Qt Designer

Theme icons are now generated and consumed as **SVG** instead of rasterized PNG. When a theme is applied, the icon set is created by recoloring the master SVG icons with your theme's icon color — a near-instant text operation. The old pipeline rendered every icon to PNG through `cairosvg`, which was slow on theme changes and required the native Cairo library.

### What you get

* **Fast theme switching** — a full icon set (2,400+ icons) generates in well under a second
* **Crisp icons at any scale** — SVG renders sharp on high-DPI displays; PNGs did not
* **Simpler installs and deployment** — `cairosvg`/Cairo is no longer a dependency, removing the common `OSError: no library called "cairo-2" was found` problem on Windows
* **Qt Designer uses the same vectors** — the Designer icon set and its `.qrc` file are generated as SVG too

### How it works

1. Master icons ship inside the package as white (`#ffffff`) SVGs (`feather`, `font_awesome`, `material_design` packs).
2. Your project has **one shared icon set** — like a web app's single assets folder. The app stylesheet, your `.ui` files and Qt Designer all read the same files:

```
Qss/
└── icons/
    ├── icons/                 # THE shared set (24x24 SVGs, viewBox kept)
    │   ├── feather/
    │   ├── font_awesome/
    │   └── material_design/
    └── _icons.qrc             # resource file over the same SVGs (Designer/uis)
```

3. When the resolved icon color changes (theme switch, config change, or a stylesheet override), the whole set is **regenerated in place** — a fast text recolor, well under a second — and the app refreshes its pixmap cache. That is the Qt equivalent of the browser recoloring SVGs dynamically.
4. Stylesheets reference the set through the `theme-icons:` search path, using the `$PATH_RESOURCES` SCSS variable:

```scss
QCheckBox::indicator:checked {
    image: url($PATH_RESOURCES+'feather/checkbox_checked.svg');
}
```

### Choosing the icon color

Resolution order (first match wins):

1. **Stylesheet override** — in `Qss/scss/defaultStyle.scss`:

   ```scss
   $ICONS_COLOR: #ff5722;
   ```

2. **`QtDesignerIconsColor`** in your json style — an explicit color applies
   to **all** icons (app and Designer alike); `"theme"` / `"auto"` falls
   through to:
3. **The active theme's `Icons-color`** (default).

The resolved color is also written to `_variables.scss` as `$ICONS_COLOR`, so
your styles can reuse it (e.g. for borders that should match the icons).

:::note
True per-widget `currentColor` (an icon inheriting its widget's QSS `color`
at paint time) is not possible with Qt's SVG renderer — it implements SVG
Tiny without CSS support, and QSS has no `icon-color` property. In-place
regeneration of the single set is the practical equivalent.
:::

:::tip
Icons are rendered by Qt's SVG plugin, which ships with PySide/PyQt wheels. When freezing your app (PyInstaller, cx_Freeze), the plugin is picked up automatically — no Cairo DLLs to bundle anymore.
:::

---

## Migrating an existing project

Projects created before the SVG pipeline reference `.png` icons in a few places. Migration is a one-time find-and-replace.

### 1. Update the package

```bash
pip install --upgrade QT-PyQt-PySide-Custom-Widgets
```

`cairosvg` is no longer required — you may remove it from your environment and requirements:

```bash
pip uninstall cairosvg
```

### 2. Update your SCSS files

Your project keeps its own copies of the style sheets in `Qss/scss/`. Replace the `.png` icon references with `.svg`:

**Linux / macOS**

```bash
sed -i "s/\.png'/\.svg'/g" Qss/scss/_styles.scss Qss/scss/defaultStyle.scss Qss/scss/main.scss
```

**Windows (PowerShell)**

```powershell
Get-ChildItem Qss/scss/*.scss | ForEach-Object {
    (Get-Content $_) -replace "\.png'", ".svg'" | Set-Content $_
}
```

Only themed icon references (lines using `$PATH_RESOURCES` or `theme-icons:`) need this change. If you reference your own PNG assets elsewhere in your styles, leave those untouched.

Alternatively, if you never customized `_styles.scss`, simply delete it — the library copies a fresh SVG-based template on the next run.

### 3. Delete the old generated PNG folders

The generated icon folders under `Qss/icons/` (named after your theme color, e.g. `Qss/icons/56aeff/`, plus the Designer set `Qss/icons/icons/`) contain the old PNGs. Delete them — they are regenerated as SVG on the next run:

```bash
rm -rf Qss/icons
```

### 4. Qt Designer / `.ui` files

The regenerated `Qss/icons/_icons.qrc` now lists `.svg` files. Existing `.ui` files that point at the old `.png` names keep working at runtime — the engine maps themed `.png` references to their `.svg` equivalent automatically — but Qt Designer will show missing icons until the references are updated.

To update your `.ui` files in place:

```bash
sed -i 's/\.png</\.svg</g' ui/*.ui
```

(or re-pick the icons from the resource browser inside Qt Designer).

### 5. Run your app

Start the app once — the SVG icon sets and the new `.qrc` are generated automatically, and your theme now renders fully from vectors.

---

## Qt Designer workflow

Designer consumes the same SVG icons through `Qss/icons/_icons.qrc`, which is
generated together with the theme icons. Launch Designer with the custom
widgets loaded:

```bash
Custom_Widgets --start-designer --plugins
```

### Designer shows the shared set

Designer displays the same `Qss/icons/icons/` SVGs the app uses — what you
design is exactly what ships. To control the color, use the resolution order
above:

```json
"ThemeSettings": {
    "QtDesignerIconsColor": "#D9DEE7"
}
```

- An explicit color applies to **all** icons — pick a **light** color
  (e.g. `#D9DEE7`) if your Qt Designer runs dark, a **dark** one for a light
  Designer, and design your app theme around it.
- `"theme"` / `"auto"` (or omitting the key) keeps icons matched to the
  active app theme — ideal when your app theme and Designer have similar
  brightness.
- Any change regenerates the set automatically on the next app run.

### Adding the icons to a new `.ui` file

Every form references the resource file once; after that, all SVG icons appear
in Designer's icon picker. Three ways:

1. **Scaffold**: `Custom_Widgets --create-project` — the template `.ui` is
   already wired to `_icons.qrc`.
2. **CLI**: `Custom_Widgets --new-ui MyForm` — creates `ui/MyForm.ui` with the
   resource pre-loaded (run your app once first so the qrc exists).
3. **Manually in Designer**: Resource Browser → *Edit Resources* (pencil
   icon) → *Open Resource File* → select `Qss/icons/_icons.qrc`.

Resource prefixes are the pack folder with underscores on every platform
(e.g. `:/font_awesome_solid/icons/font_awesome/solid/hand-pointer.svg`).
No special Designer build is needed — this is stock Qt Designer plus the
generated resource file.

---

## Notes for Qt 5 users

Qt 5's SVG renderer implements SVG Tiny. The bundled icon packs (plain paths and strokes) render identically, but if you add your own master SVGs, avoid advanced features like filters and masks for consistent results on PySide2/PyQt5.
