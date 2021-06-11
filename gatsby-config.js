module.exports = {
  siteMetadata: {
    siteUrl:`https://www.dhuynh.ca`,
    title: "Night and Day Website",
  },
  plugins: 
    ["gatsby-plugin-gatsby-cloud",
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
        host: 'https://www.dhuynh.ca',
        sitemap: 'https://www.dhuynh.ca/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
};
