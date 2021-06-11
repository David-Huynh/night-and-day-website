module.exports = {
  siteMetadata: {
    siteUrl:`https://dhuynh.ca`,
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
        host: 'https://dhuynh.ca',
        sitemap: 'https://dhuynh.ca/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Monoton`,
        ],
        display: 'swap'
      }
    },
  ],
};
