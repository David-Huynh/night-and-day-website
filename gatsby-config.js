module.exports = {
  siteMetadata: {
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
  ],
};
