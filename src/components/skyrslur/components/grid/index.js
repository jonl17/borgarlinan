import React from "react"
import { Container } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { filterSkyrslur } from "../../../../methods"
import { useSelector } from "react-redux"

/** components */
import Skyrsla from "./components/skyrsla"

const Grid = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  const skyrslurFilterBy = useSelector(state => state.reducer.skyrslurFilterBy)
  var filtered = nodes
  if (skyrslurFilterBy === `title`) {
    filtered = filterSkyrslur(nodes, "bytitle")
  } else {
    filtered = filterSkyrslur(nodes, "bydate")
  }
  console.log(filtered)
  return (
    <Container>
      {filtered.map((skyrsla, index) => (
        <Skyrsla key={index} skyrsla={skyrsla}></Skyrsla>
      ))}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/skyrslur/" } }
          sort: { fields: frontmatter___dagsetning, order: DESC }
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
    render={data => <Grid data={data} {...props}></Grid>}
  ></StaticQuery>
)
