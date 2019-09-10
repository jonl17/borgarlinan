import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

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
        </Helmet>
      </>
    )}
  ></StaticQuery>
)

export default SEO
