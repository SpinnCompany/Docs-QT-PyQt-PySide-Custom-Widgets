/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  moduleSidebar: [
    {
      type: 'html',
      value: '<div class="sidebar-section">Module Reference</div>',
      defaultStyle: true,
    },
    {
      type: 'doc',
      id: 'module-reference/overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'doc',
        id: 'module-reference/installation',
      },
      items: [
        'module-reference/installation/pip',
        'module-reference/installation/source',
        'module-reference/installation/dependencies',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      link: {
        type: 'doc',
        id: 'module-reference/development',
      },
      items: [
        'module-reference/development/setup',
        'module-reference/development/contributing',
        'module-reference/development/testing',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'module-reference/api/core',
        'module-reference/api/widgets',
        'module-reference/api/theming',
      ],
    },
    {
      type: 'link',
      label: '📦 PyPI Package',
      href: 'https://pypi.org/project/qt-pyqt-pyside-custom-widgets/',
    },
    {
      type: 'link',
      label: '🐛 Issue Tracker',
      href: 'https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets/issues',
    },
    {
      type: 'link',
      label: '💻 Source Code',
      href: 'https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets',
    },
  ],
};

module.exports = sidebars;