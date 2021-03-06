let date = new Date().toJSON();
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: [
      "/",
      "/foreword.md",
      {
        title: "Flared Basics",
        collapsable: false,
        children: [
          "/intro/introduction.md",
          "/intro/how-to-read.md",
          "/intro/buttplug-ethics.md",
          "/intro/architecture.md",
        ]
      },
      {
        title: "Sticking Buttplug In",
        collapsable: false,
        children: [
          "/writing-buttplug-applications/intro.md",
          "/writing-buttplug-applications/api-basics.md",
          "/writing-buttplug-applications/connectors.md",
          "/writing-buttplug-applications/connecting.md",
          "/writing-buttplug-applications/logging.md",
          "/writing-buttplug-applications/device-enum.md",
          "/writing-buttplug-applications/device-control.md",
          "/writing-buttplug-applications/application.md",
        ]
      },
      {
        title: "Inflating Buttplug",
        collapsable: false,
        children: [
          "/extending-buttplug-core/intro.md"
        ]
      },
    ],
    repo: 'buttplugio/buttplug-developer-guide',
  },
  plugins: [
    [
      "vuepress-plugin-matomo",
      {
        'siteId': 9,
        'trackerUrl': "https://matomo.nonpolynomial.com/"
      }
    ],
    "@vuepress/plugin-back-to-top",
    "vuepress-plugin-tabs"
  ],
  evergreen: true,
  title: "Buttplug Developer Guide",
  description: "Manual for developing applications using the Buttplug Intimate Hardware Control Library.",
  head: [
    ['link', { rel: 'icon', href: '/buttplug.svg' }],
    ["meta", {property: "og:type", content:"website"}],
    ["meta", {property: "og:title", content:"Buttplug Developer Guide"}],
    ["meta", {property: "og:url", content:"https://buttplug-developer-guide.docs.buttplug.io"}],
    ["meta", {property: "og:site_name", content:"Buttplug Developer Guide"}],
    ["meta", {property: "og:description", content:"Manual for developing applications using the Buttplug Intimate Hardware Control Library."}],
    ["meta", {property: "og:locale", content:"default"}],
    ["meta", {property: "og:image", content:"https://buttplug-developer-guide.docs.buttplug.io/buttplug-logo-opengraph.png"}],
    ["meta", {property: "og:updated_time", content:date}],
    ["meta", {name:"twitter:card", content:"summary"}],
    ["meta", {name:"twitter:title", content:"Buttplug Developer Guide"}],
    ["meta", {name:"twitter:description", content:"Manual for developing applications using the Buttplug Intimate Hardware Control Library."}],
    ["meta", {name:"twitter:image", content:"https://buttplug-developer-guide.docs.buttplug.io/buttplug-logo-opengraph.png"}],
    ["meta", {name:"twitter:creator", content:"@buttplugio"}],
  ]
};
