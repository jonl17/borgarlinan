import React from "react"
import { Container } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { filterSkyrslur } from "../../../../methods"
import { useSelector, useDispatch } from "react-redux"
import { triggerFrettirFade, setFrettirCount } from "../../../../state/actions"

/** components */
import Frett from "./components/frett"

/** filtering */
const filter = (files, filterType) => {
  if (filterType === `title`) {
    return filterSkyrslur(files, filterType)
  } else {
    return filterSkyrslur(files, filterType)
  }
}
/*** */

const Grid = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  const frettirFilterBy = useSelector(state => state.reducer.frettirFilterBy)
  const device = useSelector(state => state.reducer.device)
  const frettirFade = useSelector(state => state.reducer.frettirFade)
  const frettirShowCount = useSelector(state => state.reducer.frettirShowCount)
  const dispatch = useDispatch()
  const files = filter(nodes, frettirFilterBy)
  dispatch(setFrettirCount(files.length))
  return (
    <Container
      fade={frettirFade ? "fade" : ""}
      onAnimationEnd={() => dispatch(triggerFrettirFade())}
      device={device}
    >
      {files.map((frett, index) =>
        index < frettirShowCount ? (
          <Frett key={index} frett={frett}></Frett>
        ) : (
          ""
        )
      )}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/content/frettir/" } }
          sort: { fields: frontmatter___dagsetning, order: DESC }
        ) {
          nodes {
            html
            frontmatter {
              title
              dagsetning
            }
          }
        }
      }
    `}
    render={data => <Grid data={data} {...props}></Grid>}
  ></StaticQuery>
)
