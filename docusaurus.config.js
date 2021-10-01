const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Bitexbot",
  tagline:
    "Free Automate TradingView Alerts on Binance, Binance Futures and Bybit",
  url: "https://Bitexbot.github.io",
  baseUrl: "/documentations/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "Bitexbot",
  projectName: "documentations",
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "Bitexbot",
        src: "img/bitexbot-logo-text.svg",
      },
      items: [
        // {
        //   type: "doc",
        //   docId: "intro",
        //   position: "left",
        //   label: "Tutorial",
        // },
        {
          href: "https://github.com/Bitexbot/documentations",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Tutorial",
        //       to: "/",
        //     },
        //   ],
        // },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/bitexbot",
            },
            {
              label: "Discord",
              href: "https://discord.gg/G4vHmWEuXE",
            },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/bitexbot",
            // },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Bitexbot",
              href: "https://www.bitexbot.org",
            },
            {
              label: "GitHub",
              href: "https://github.com/Bitexbot/documentations",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bitexbot. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/Bitexbot/documentations/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
