module.exports = {
  siteMetadata: {
    title: `Big Data at Berkeley`,
    description: `Big Data at Berkeley is a UC Berkeley student organization dedicated to promoting data science in our community through educational bootcamps and industry-level data consulting projects.`,
    keywords: ['Big Data at Berkeley', 'Big Data', 'Data Science', 'UC Berkeley', 'Big Data Bootcamp', 'Berkeley', 'Consulting', 'Education', 'Organization', 'RSO', 'Berkeley Club', 'ASUC'],
    url: "https://www.bd.berkeley.edu",
    ogImage: 'src/images/square_dark_logo.jpg',
    favicon: {
      ico: 'src/images/favicon.ico'
    },
    lang: `en`
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
