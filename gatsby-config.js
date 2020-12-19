module.exports = {
  siteMetadata: {
    title: "The Devs Network",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: require("./src/theme"),
      },
    },
  ],
};
