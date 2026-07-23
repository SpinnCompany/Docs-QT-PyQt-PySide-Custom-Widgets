---
title: Licensing
description: How QT-PyQt-PySide-Custom-Widgets is licensed, your separate Qt licensing responsibility, and the third-party icon/font attributions bundled with the package.
---

# Licensing

This page explains how the library itself is licensed, the **separate** Qt
license you are responsible for, and the third-party assets bundled with the
package.

:::info Not legal advice
This is a plain-language summary, not legal advice. The authoritative terms are
the `LICENSE` file in the repository and the licenses of the components listed
below. When in doubt, consult the actual license texts or a lawyer.
:::

## The library license

`QT-PyQt-PySide-Custom-Widgets` (the free library, the `Custom_Widgets` package)
is currently licensed under the **GNU General Public License v3.0 (GPLv3)** — see
the [`LICENSE`](https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets/blob/master/LICENSE)
file, which is the authoritative source.

Under GPLv3, if you distribute an application that incorporates this library, the
application must itself be released under a GPL-compatible license and its source
made available. Internal/personal use is unrestricted.

:::note LGPL relicense in progress
To make the library easier to use inside **proprietary and commercial**
applications, the project is relicensing the free core from GPLv3 to
**LGPLv3**. This page and the repository will be updated when that change lands;
until then the license above (GPLv3) is what applies. Always trust the `LICENSE`
file in the version you actually install.
:::

## Qt is licensed separately (important)

This library builds on Qt through [`qtpy`](https://github.com/spyder-ide/qtpy)
and works with **PySide6** or **PyQt6**. **Qt is not covered by this project's
license — you are responsible for complying with the license of the Qt binding
you use:**

| Binding | License | Notes |
|---|---|---|
| **PySide6** (Qt for Python) | LGPLv3 / commercial | You can ship closed-source commercial apps for free if you comply with the LGPL (dynamic linking, allow replacement of the Qt libraries, include notices). |
| **PyQt6** (Riverbank) | GPLv3 / commercial | Shipping a closed-source app requires Riverbank's commercial license. |

**For commercial, closed-source apps, PySide6 is the recommended binding** — it's
the supported LGPL path and needs no extra Qt payment when you comply with the
LGPL.

Neither this library grants you any rights to Qt, PySide, or PyQt. "Qt" is a
trademark of The Qt Company Ltd. This is an independent, unofficial project, not
affiliated with or endorsed by The Qt Company or Riverbank Computing.

## Bundled third-party assets & attributions

The package bundles a few third-party icon sets and a font under their own
licenses. Full notices and the license texts ship **inside the package** at
`Custom_Widgets/THIRD_PARTY_NOTICES.md` and `Custom_Widgets/licenses/`.

- **Icons by [Font Awesome](https://fontawesome.com)** — Free icons under
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) (© Fonticons, Inc.);
  fonts under SIL OFL 1.1, code under MIT. Icons may be recoloured/resized.
- **[Material Design Icons](https://github.com/google/material-design-icons)** —
  Apache License 2.0 (© Google and contributors).
- **[Feather](https://github.com/feathericons/feather)** — MIT
  (© 2013-2017 Cole Bemis).
- **[Rosario](https://github.com/Omnibus-Type/Rosario)** — SIL Open Font License
  1.1 (the bundled UI font).

When you redistribute your application, keep these notices with it (they are
already included inside the installed package).

## A note on the commercial add-on

A separate, commercially-licensed **Pro add-on** (starting with an advanced data
grid) is in development under an **open-core** model — the library on this page
stays free and open source. Commercial terms, pricing, and availability will be
published here when the add-on launches; nothing on this page commits you to any
paid terms.

## Questions

For licensing questions, open an issue on the
[GitHub repository](https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets/issues).
