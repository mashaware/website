module.exports = {
  siteMetadata: {
    title: `Masha Ware`,
    description: `Hi! I’m Masha, a UX designer & doodler with a background in language teaching and psychology ready to disrupt learning.`,
    author: `Masha Ware`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Masha Ware UX designer`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fbd0ef`,
        theme_color: `#fbd0ef`,
        icon: 'src/images/my face.png',
        display: `browser`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Mono']
        }
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
   
    // `gatsby-plugin-postcss`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
