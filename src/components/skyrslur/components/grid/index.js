import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { filterSkyrslur } from "../../../../methods"
import { useSelector, useDispatch } from "react-redux"
import { triggerSkyrsluFade, setSkyrslurCount } from "../../../../state/actions"

/** components */
import Skyrsla from "./components/skyrsla"
import { Container, ExtraContainer } from "./Styled"
import CategoryFilter from "./components/CategoryFilter"

/** filtering */
const filter = (files, filterType) => {
  if (filterType === `title`) {
    return filterSkyrslur(files, filterType)
  } else {
    return filterSkyrslur(files, filterType)
  }
}
const categoryFilter = (files, filterType) => {
  let filteredFiles = []
  if (filterType === `Allt`) {
    return files
  }
  for (var i = 0; i < files.length; i++) {
    if (files[i].frontmatter.malaflokkur === filterType) {
      filteredFiles.push(files[i])
    }
  }
  return filteredFiles
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
  const skyrslurCategoryFilter = useSelector(
    state => state.reducer.skyrslurCategoryFilter
  )
  dispatch(setSkyrslurCount(files.length))
  return (
    <ExtraContainer device={device}>
      <CategoryFilter></CategoryFilter>
      <Container
        fade={skyrslurFade ? "fade" : ""}
        onAnimationEnd={() => dispatch(triggerSkyrsluFade())}
        device={device}
      >
        {categoryFilter(files, skyrslurCategoryFilter).map((skyrsla, index) =>
          index < skyrslurShowCount ? (
            <Skyrsla key={index} skyrsla={skyrsla}></Skyrsla>
          ) : (
            ""
          )
        )}
      </Container>
    </ExtraContainer>
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
              vidhengi_pdf {
                publicURL
              }
              malaflokkur
            }
          }
        }
      }
    `}
    render={data => <Grid data={data} {...props}></Grid>}
  ></StaticQuery>
)
