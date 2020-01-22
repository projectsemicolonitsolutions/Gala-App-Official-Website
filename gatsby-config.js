module.exports = {
  siteMetadata: {
    title: `Gala App`,
    description: `Imagine a one-stop app for all your travel details and getting a heads up as things happen throughout your journey.
    Gala will make your travel experience bring to a whole new level. Experience what it's like to travel with Gala app.
    
    Try the travel app that keeps up with you. So many travels, so many want to visit? Let Gala app worry about the details,
    so don't have to stress out searching for little information on your journey`,
    email: `lakwatsa.buddy@mygala.com`,
    social: {
      facebook: `http://www.facebook.com/GalaAppPh`,
      twitter: `http://www.twitter.com/GalaAppPh`,
      instagram: `http://www.instagram.com/GalaAppPh`,
      youtube: `http://www.youtube.com/GalaAppPh`,
    },
    contact: {
      mobile: `(+63) 977 164 9242`,
      telephone: ``,
    },
    author: `Project Semicolon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/blogs/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post-image`,
        path: `${__dirname}/src/blogs/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/meta/logo512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
