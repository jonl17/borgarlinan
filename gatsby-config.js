/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Borgarlínan`,
    subtitle: `beinustu leið til framtíðar`,
    seoTitle: `Verkefnastofa Borgarlínu`,
    about: `Borgarlína er nýtt og afkastamikið almenningssamgöngukerfi sem 
        sveitarfélögin á höfuðborgarsvæðinu undirbúa nú í sameiningu. Borgarlína 
        mun aka á sérakreinum að mestu aðskilin frá almennri umferð og tengja saman 
        sveitarfélögin á höfuðborgarsvæðinu.`,
    navbaritems: [`Borgarlínan`, `Um Verkefnastofu`, `English`],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/data/`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "dev.borgarlinan.is",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        concurrentRequests: 10,
        includedRoutes: [
          "**/media",
          "**/posts",
          "**/qanda",
          "**/news",
          "**/starfsfolk",
          "**/pages",
          "**/hopar",
        ],
        normalizer: function({ entities }) {
          return entities
        },
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}\\static\\data\\svg\\`, // See below to configure properly
        },
      },
    },
  ],
}
