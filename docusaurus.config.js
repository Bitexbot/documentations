const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Bitexbot",
  tagline:
    "Free Automate TradingView Alerts on Binance, Binance Futures, Bybit and FTX.",
  url: "https://docs.bitexbot.org",
  baseUrl: "/",
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
          href: "https://github.com/bitexbot/documentations",
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
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/bitexbot",
            // },
            {
              label: "Discord",
              href: "https://discord.gg/G4vHmWEuXE",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/bitex_bot",
            },
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
              href: "https://github.com/bitexbot/documentations",
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
          editUrl: "https://github.com/bitexbot/documentations/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "monthly",
          priority: 0.5,
        },
      },
    ],
  ],
};
