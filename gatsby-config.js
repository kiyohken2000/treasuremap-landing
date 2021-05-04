module.exports = {
  siteMetadata: {
    siteTitle: `Find Good One`,
    defaultTitle: `Find Good One`,
    siteTitleShort: `Find Good One`,
    siteDescription: `Find Good One landing page`,
    siteUrl: `https://findgoodone.ml`,
    siteAuthor: `@votepurchase`,
    siteImage: `/logo-lg.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Find Good One`,
        short_name: `Find Good One`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/logo-lg.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
         trackingId: `UA-181015020-6`,
       },
     },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://findgoodone.ml`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
