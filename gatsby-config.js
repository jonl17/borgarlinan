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
        name: `schemadata`,
        path: `${__dirname}/static/schemadata/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `qanda`,
        path: `${__dirname}/static/qanda/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/static/news/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `staff`,
        path: `${__dirname}/static/staff/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/static/about/`,
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
