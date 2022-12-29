module.exports = {
  siteMetadata: {
    title: "The Devs Network",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Devs",
        short_name: "The Devs",
        start_url: "/",
        background_color: "#f5f5f5",
        theme_color: "#7c4ad4",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
    },
  ],
};
