require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `QCouture`,
    siteTitleAlt: `QCouture | The Fabric Doctor`,
    siteUrl: `https://qcouture.netlify.app/`,
    siteLanguage: `en`,
    siteDescription: `I'm here to introduce you to my world of fabrics, and threads, and designs beyond wildest imaginations.`,
    author: `@lekoarts_de`,
    siteImage: `/banner.jpg`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/DrAderinsinuola`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/q_couture_/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-168581843-1',
        exclude: ['/admin/**'],
        respectDNT: true,
        cookieDomain: 'qcouture.netlify.app',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `QCouture | The Fabric Doctor`,
        short_name: `QCouture`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
  ],
};
