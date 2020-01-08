import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({
  data: {
    site: {
      siteMetadata: { title, about: description, image, favicon, url },
    },
  },
}) => (
  <>
    <Helmet title={title}>
      <meta name="title" content={title}></meta>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
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
            url
          }
        }
      }
    `}
    render={data => <SEO data={data} {...props}></SEO>}
  ></StaticQuery>
)
