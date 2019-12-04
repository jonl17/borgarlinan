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
    navbaritems: [
      { name: `Borgarlínan`, url: `/` },
      { name: `Um Verkefnastofu`, url: "/um-verkefnastofu/" },
      // { name: `Fréttasafn`, url: "/frettasafn/" },
    ],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `frettir`,
        path: `${__dirname}/static/content/frettir`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `spurt_og_svarad`,
        path: `${__dirname}/static/content/spurt_og_svarad`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hopar`,
        path: `${__dirname}/static/content/hopar`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `starfsfolk`,
        path: `${__dirname}/static/content/starfsfolk`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `verkefnastofa_borgarlinu`,
        path: `${__dirname}/static/content/verkefnastofa_borgarlinu`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-layout`,
  ],
}
