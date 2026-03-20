/* eslint-disable @typescript-eslint/no-var-requires */
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Statzy Studio',
    tagline:
      'Open-Source Framework for AI content automation',
    url: 'https://dev.statzystudio.ai',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'yourusername',
    projectName: 'statzy-studio',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: 'docs',
            sidebarPath: 'sidebars.js',
            editUrl:
              'https://github.com/yourusername/statzy-studio/edit/main/docs/',
            versions: {
              current: {
                label: 'current',
              },
            },
            lastVersion: 'current',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    plugins: ['tailwind-loader'],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        
        navbar: {
          hideOnScroll: true,
          logo: {
            alt: 'Statzy Studio',
            src: 'img/logo.png',
          },
          items: [
            // left
            {
              label: 'Docs',
              to: 'docs/how-to-install',
              position: 'right',
            },
            // right
            {
              type: 'docsVersionDropdown',
              position: 'right',
            },
            {
              href: 'https://github.com/yourusername/statzy-studio',
              position: 'right',
              className: 'header-github-link',
            },
          ],
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        announcementBar: {
          content:
            '⭐️ If you like Statzy Studio, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/yourusername/statzy-studio">GitHub</a>! ⭐️',
        },
        footer: {
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Getting Started',
                  to: 'docs/how-to-install',
                },

              ],
            },
            {
              title: 'Statzy Studio',
              items: [
                {
                  label: 'Issues',
                  to: 'https://github.com/yourusername/statzy-studio/issues',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  to: 'https://discord.com/invite/bRTacwYrfX',
                },
              ],
            },
            {
              title: 'Social',
              items: [
                {
                  label: 'GitHub',
                  to: 'https://github.com/yourusername/statzy-studio',
                },
                {
                  label: 'Twitter',
                  to: 'https://twitter.com/yourhandle',
                },
              ],
            },
          ],
          copyright: `Statzy Studio ${new Date().getFullYear()}`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
