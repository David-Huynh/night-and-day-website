module.exports = {
  siteMetadata: {
    siteUrl: `https://dhuynh.ca/`,
    title: "Night and Day Website",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "DavidSite",
        short_name: "DavidSite",
        start_url: "/",
        description: "My portfolio",
        background_color: "#FFF",
        theme_color: "#8034c6",
        display: "standalone",
        icon: "src/images/icon.png",
        icon_options: {
          purpose: `any maskable`,
        },
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://dhuynh.ca/`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://dhuynh.ca",
        sitemap: "https://dhuynh.ca/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
