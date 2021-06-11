module.exports = {
  siteMetadata: {
    siteUrl:`https://dhuynh.ca`,
    title: "Night and Day Website",
  },
  plugins: 
    ["gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "DavidSite",
        short_name: "DavidSite",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#ae79df",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dhuynh.ca',
        sitemap: 'https://dhuynh.ca/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-offline`,
  ],
};
