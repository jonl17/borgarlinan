import React from "react"
import { Container } from "./Styled"
import NewsBody from "../newsbody"
import { connect } from "react-redux"

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

const NewsSection = ({ device }) => {
  return <Container device={device}>{GetNews()}</Container>
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(NewsSection)
