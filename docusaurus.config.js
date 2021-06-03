/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Docs",
  tagline: "Dinosaurs are cool",
  url: "https://docs.openefi.tech",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "openefi", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "OpenEFI | Docs",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/docs/intro", label: "Inicio", position: "left" },
        { to: "/docs/tuner/install", label: "Tuner", position: "left" },
        { to: "/docs/hardware/intro", label: "Hardware", position: "left" },
        { to: "/docs/firmware/intro", label: "Firmware", position: "left" },
        { to: "/docs/mechanic/intro", label: "Mecanica", position: "left" },
        { to: "/docs/dashdash/intro", label: "DashDash", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/openefi/OpenEFI",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        /*   {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        }, */
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/openefi/OpenEFI",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenEFI Built with Docusaurus.`,
    },
    announcementBar: {
      id: "non_complete_bar",
      content:
        "Pueden faltar secciones/items en esta documentacion, la misma aun no esta finalizada",
      isCloseable: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/openefi/docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/openefi/docs/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
};
