/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'Introduction/intro',
        'Introduction/installation',
        'Introduction/getting-started'
      ]
    },
    {
      type: 'category',
      label: 'Core Widgets',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCustomQMainWindow',
        'Widgets/QCustomCodeEditor',
        'Widgets/QCustomQDialog',
        'Widgets/QCustomModals',
        'Widgets/QCustomEmbededWindow',
        'Widgets/QCustomComponent',
        'Widgets/QCustomComponentContainer',
        'Widgets/QCustomComponentLoader'
      ]
    },
    {
      type: 'category',
      label: 'Navigation & Layout',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCustomSidebar',
        'Widgets/QCustomSidebarButton',
        'Widgets/QCustomSidebarLabel',
        'Widgets/QCustomQStackedWidget',
        'Widgets/QCustomFlowLayout',
        'Widgets/QCustomHorizontalSeparator',
        'Widgets/QDraggableWidget'
      ]
    },
    {
      type: 'category',
      label: 'Input & Controls',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCustomQPushButton',
        'Widgets/QCustomQPushButtonGroup',
        'Widgets/QCustomQSlider',
        'Widgets/QCustomCheckBox',
        'Widgets/QCustomTagEdit',
        'Widgets/QCustomEmojiPicker',
        'Widgets/AnalogGaugeWidget'
      ]
    },
    {
      type: 'category',
      label: 'Progress & Loading',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCustom3CirclesLoader',
        'Widgets/QCustomArcLoader',
        'Widgets/QCustomPerlinLoader',
        'Widgets/QCustomSpinner',
        'Widgets/QCustomQProgressBar',
        'Widgets/QCustomProgressIndicator',
        'Widgets/QCustomRoundProgressBar',
        'Widgets/QFlowProgressBar'
      ]
    },
    {
      type: 'category',
      label: 'Display & Information',
      collapsible: true,
      collapsed: false,
      items: [
        'Widgets/QCardWidget',
        'Widgets/QAvatarWidget',
        'Widgets/QBadgeWidget',
        'Widgets/QCustomAnnotationWidget',
        'Widgets/QCustomQToolTip',
        'Widgets/QCustomTipOverlay'
      ]
    },
    {
      type: 'category',
      label: 'Theming & Styling',
      collapsible: true,
      collapsed: false,
      items: [
        'Theming/QCustomTheme',
        'Theming/QCustomThemeDarkLightToggle',
        'Theming/QCustomThemeList',
        'Theming/StylingGuide',
        'Appendices/json-styles',
        'Appendices/qss-guide'
      ]
    },
    {
      type: 'category',
      label: 'Advanced Features',
      collapsible: true,
      collapsed: false,
      items: [
        'Advanced/Plugins',
        'Advanced/FileMonitor',
        'Advanced/QAppSettings',
        'Advanced/Logging',
        'Advanced/WidgetsWorker'
      ]
    },
    {
      type: 'category',
      label: 'Usage Examples',
      collapsible: true,
      collapsed: false,
      items: [
        'Usage-Examples/BasicUsage',
        'Usage-Examples/AdvancedLayouts',
        'Usage-Examples/RealWorldScenarios'
      ]
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsible: true,
      collapsed: true,
      items: [
        'API-Reference/CMD',
        'API-Reference/Utils',
        'API-Reference/QPropertyAnimation',
        'API-Reference/ProjectMaker'
      ]
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsible: true,
      collapsed: true,
      items: [
        'Troubleshooting/common-issues',
        'Troubleshooting/compatibility',
        'Troubleshooting/faq'
      ]
    },
    {
      type: 'category',
      label: 'Resources',
      collapsible: true,
      collapsed: true,
      items: [
        'Appendices/resources'
      ]
    }
  ]
};

module.exports = sidebars;