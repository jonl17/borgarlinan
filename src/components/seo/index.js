import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({
  data: {
    site: {
      siteMetadata: { title, seoTitle, about, image, favicon },
    },
  },
}) => (
  <>
    <Helmet title={title}>
      <meta name="title" content={title}></meta>
      <meta name="description" content={about}></meta>
      <meta name="image" content={image}></meta>
      {title && <meta property="og:title" content={seoTitle} />}
      {about && <meta property="og:description" content={about} />}
      {seoTitle && <meta name="keywords" content={seoTitle + ", " + title} />}
      <meta property="og:image" content={image}></meta>
      <link sizes="20x20" href={favicon} rel="icon" type="image/png"></link>
    </Helmet>
  </>
)

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            seoTitle
            about
            image
            favicon
          }
        }
      }
    `}
    render={data => <SEO data={data} {...props}></SEO>}
  ></StaticQuery>
)
