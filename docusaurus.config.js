// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Qt Custom Widgets',
  tagline: 'Professional PyQt and PySide Custom Widgets & Components',
  favicon: 'img/favicon.ico',

  // GitHub Pages configuration
  url: 'https://SpinnCompany.github.io',
  baseUrl: '/Docs-QT-PyQt-PySide-Custom-Widgets/',
  
  // GitHub repo information
  organizationName: 'SpinnCompany',
  projectName: 'Docs-QT-PyQt-PySide-Custom-Widgets',
  
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  customFields: {
    dangerouslyAllowDynamicHTML: true,
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/SpinnCompany/Docs-QT-PyQt-PySide-Custom-Widgets/tree/main/',
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/SpinnCompany/Docs-QT-PyQt-PySide-Custom-Widgets/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          showLastUpdateTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
          lastmod: null,
        },
        gtag: {
          trackingID: 'G-KGCCVJQ9ZS',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [],

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      'data-ad-client': 'ca-pub-2317654735642',
    },
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'PyQt, PySide, Qt, Python, GUI, widgets, custom components, theming',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Professional PyQt and PySide custom widgets library with dynamic theming, enhanced UI components, and comprehensive documentation',
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: 'PyQt, PySide, Qt, Python, GUI, widgets' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      
      image: 'img/social-card.png',
      
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },
      
      announcementBar: {
        id: 'support_us',
        content: '⭐️ If you like Qt Custom Widgets, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets">GitHub</a>! ⭐️',
        backgroundColor: 'var(--qt-green)',
        textColor: 'white',
        isCloseable: true,
      },
      
      navbar: {
        title: 'Qt Custom Widgets',
        logo: {
          alt: 'Qt Custom Widgets Logo',
          src: 'img/logo.png',
          width: 32,
          height: 32,
        },
        hideOnScroll: true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { 
            to: '/blog', 
            label: 'Blog', 
            position: 'left',
            activeBaseRegex: '/blog/',
          },
          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'Widget Gallery',
                to: '/Widgets/QCustomQMainWindow',
              },
              {
                label: 'Examples',
                to: '/Usage-Examples/BasicUsage',
              },
              {
                label: 'API Reference',
                to: '/API-Reference/CMD',
              },
            ],
          },
          {
            href: 'https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'Main Module Repository',
          },
          {
            href: 'https://github.com/SpinnCompany/Docs-QT-PyQt-PySide-Custom-Widgets',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'Documentation Repository',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      
      footer: {
        logo: {
          alt: 'Qt Custom Widgets',
          src: 'img/logo.png',
          href: '/',
          width: 60,
          height: 60,
        },
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/Introduction/intro',
              },
              {
                label: 'Widget Gallery',
                to: '/Widgets/QCustomQMainWindow',
              },
              {
                label: 'Theming Guide',
                to: '/Theming/QCustomTheme',
              },
              {
                label: 'API Reference',
                to: '/API-Reference/CMD',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Usage Examples',
                to: '/Usage-Examples/BasicUsage',
              },
              {
                label: 'Troubleshooting',
                to: '/Troubleshooting/common-issues',
              },
              {
                label: 'Styling Guide',
                to: '/Appendices/qss-guide',
              },
              {
                label: 'Blog & Tutorials',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Main Module',
                href: 'https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets',
              },
              {
                label: 'Documentation Repo',
                href: 'https://github.com/SpinnCompany/Docs-QT-PyQt-PySide-Custom-Widgets',
              },
              {
                label: 'Issue Tracker',
                href: 'https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets/issues',
              },
              {
                label: 'PyQt Official',
                href: 'https://www.riverbankcomputing.com/software/pyqt/',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Common Issues',
                to: '/Troubleshooting/common-issues',
              },
              {
                label: 'FAQ',
                to: '/Troubleshooting/faq',
              },
              {
                label: 'Compatibility Guide',
                to: '/Troubleshooting/compatibility',
              },
              {
                label: 'Contribute',
                href: 'https://github.com/SpinnCompany/QT-PyQt-PySide-Custom-Widgets/blob/main/CONTRIBUTING.md',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Qt Custom Widgets. Built with Docusaurus.`,
      },
    
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'python',
          'bash',
          'json',
          'css',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
        ],
      },
      
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;