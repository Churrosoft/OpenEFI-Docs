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
        alt: "OpenEFI Docs page",
        src: "img/logo.svg",
      },
      items: [
        { to: "/docs/intro", label: "Inicio", position: "left" },
        { to: "/docs/tuner/install", label: "Tuner", position: "left" },
        /*  { to: "/docs/hardware/intro", label: "Hardware", position: "left" },
        { to: "/docs/firmware/intro", label: "Firmware", position: "left" },
        { to: "/docs/mechanic/intro", label: "Mecanica", position: "left" },
        { to: "/docs/dashdash/intro", label: "DashDash", position: "left" }, */
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/openefi/OpenEFI",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
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
        "Pueden faltar secciones/items en esta documentación, la misma aún no está finalizada",
      isCloseable: true,
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
    /*   selector: '.markdown img', */
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: '#444444',
        scrollOffset: 0,
        /* container: '#zoom-container',
        template: '#zoom-template', */
      },
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
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Churrosoft.`,
            language: "es",
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    'plugin-image-zoom',
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
   /*  localeConfigs: {
      en: {
        label: "Español",
        direction: "ltr",
      },
      fr: {
        label: "English",
        direction: "ltr",
      },
    }, */
  },
};
