import React from "react"
import { Container } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { filterSkyrslur } from "../../../../methods"
import { useSelector, useDispatch } from "react-redux"
import { triggerSkyrsluFade, setSkyrslurCount } from "../../../../state/actions"

/** components */
import Skyrsla from "./components/skyrsla"

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
  const skyrslurFilterBy = useSelector(state => state.reducer.skyrslurFilterBy)
  const device = useSelector(state => state.reducer.device)
  const skyrslurFade = useSelector(state => state.reducer.skyrslurFade)
  const skyrslurShowCount = useSelector(
    state => state.reducer.skyrslurShowCount
  )
  const dispatch = useDispatch()
  const files = filter(nodes, skyrslurFilterBy)
  dispatch(setSkyrslurCount(files.length))
  return (
    <Container
      fade={skyrslurFade ? "fade" : ""}
      onAnimationEnd={() => dispatch(triggerSkyrsluFade())}
      device={device}
    >
      {files.map((skyrsla, index) =>
        index < skyrslurShowCount ? (
          <Skyrsla key={index} skyrsla={skyrsla}></Skyrsla>
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
