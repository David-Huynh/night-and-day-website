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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.dhuynh.ca/',
          site_name: 'dhuynh',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://dhuynh.ca',
        sitemap: 'https://dhuynh.ca/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-next-seo',
    `gatsby-plugin-offline`,
  ],
};
