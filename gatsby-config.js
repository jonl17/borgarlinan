/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

module.exports = {
  siteMetadata: {
    title: `Borgarlínan`,
    subtitle: `beinustu leið til framtíðar`,
    subtitleEnska: `The Future of Public Transport`,
    seoTitle: `Verkefnastofa Borgarlínu`,
    about: `Borgarlína er nýtt og afkastamikið almenningssamgöngukerfi sem 
        sveitarfélögin á höfuðborgarsvæðinu undirbúa nú í sameiningu. Borgarlína 
        mun aka á sérakreinum að mestu aðskilin frá almennri umferð og tengja saman 
        sveitarfélögin á höfuðborgarsvæðinu.`,
    image: "/data/borgarlina_infographic_2b.jpg",
    favicon: "/data/borg_fav.png",
    url: `https://www.borgarlinan.is/`,
    navbaritems: [
      { name: `Borgarlínan`, url: `/` },
      {
        name: `Um Verkefnastofu`,
        name_en: `Project Office`,
        url: "/um-verkefnastofu/",
      },
      { name: `Fréttasafn`, url: "/frettir/" },
      { name: `Útgefið efni`, name_en: `Archive`, url: "/utgefid-efni/" },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `skyrslur`,
        path: `${__dirname}/static/content/skyrslur`,
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
              maxWidth: 930,
            },
          },
        ],
      },
    },
    netlifyCmsPaths,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}\\static\\svg\\`, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_CODE || "none",
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}
