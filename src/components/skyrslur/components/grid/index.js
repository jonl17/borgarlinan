import React from "react"
import { Container } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import Skyrsla from "./components/skyrsla"

const fetchSkyrslur = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/skyrslur/" } }
        ) {
          nodes {
            html
            frontmatter {
              title
              dagsetning
              vidhengi_pdf
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.nodes.map(skyrsla => (
        <Skyrsla skyrsla={skyrsla}></Skyrsla>
      ))
    }
  ></StaticQuery>
)

const Grid = () => {
  return <Container>{fetchSkyrslur()}</Container>
}

export default Grid
