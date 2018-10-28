module.exports = {
  siteMetadata: {
    title: 'aka Tatuu | Portfolio',
    description: 'Tatuu is a San Francisco based web developer.',
    keywords: 'web developer, web designer, portfolio'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'qkthrflj8i4q',
        accessToken: '6b93606ba1e34acac7049fe0a4db9e572bba843628a0da7875cca88be59b5b67',
      }
    },
  ],
}
