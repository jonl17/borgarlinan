import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Favicon from "./borg_fav.png"

const SEO = () => (
  <StaticQuery
    query={graphql`
      query SEO {
        site {
          siteMetadata {
            title
            seoTitle
            about
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <meta
            name="description"
            content={data.site.siteMetadata.about}
          ></meta>
          {data.site.siteMetadata.title && (
            <meta
              property="og:title"
              content={data.site.siteMetadata.seoTitle}
            />
          )}
          {data.site.siteMetadata.about && (
            <meta
              property="og:description"
              content={data.site.siteMetadata.about}
            />
          )}
          {data.site.siteMetadata.seoTitle && (
            <meta
              name="keywords"
              content={
                data.site.siteMetadata.seoTitle +
                ", " +
                data.site.siteMetadata.title
              }
            />
          )}
          <link sizes="20x20" href={Favicon} rel="icon" type="image/png"></link>
        </Helmet>
      </>
    )}
  ></StaticQuery>
)

export default SEO
