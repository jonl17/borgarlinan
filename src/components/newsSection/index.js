import React from "react"
import { Container } from "./Styled"
import NewsBody from "../newsbody"

import { graphql, StaticQuery } from "gatsby"

const GetNews = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                subject
                more
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.edges.map((item, index) => (
        <NewsBody index={index} key={index} item={item}></NewsBody>
      ))
    }
  ></StaticQuery>
)

const NewsSection = () => {
  return <Container>{GetNews()}</Container>
}

export default NewsSection
