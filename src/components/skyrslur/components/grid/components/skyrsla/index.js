import React from "react"
import { Box, PDF, Content, ImageContainer } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"
import { formatDate } from "../../../../../../methods"

/** components */
import Banner from "./components/Banner"

// AKA útgefið efni single
const Skyrsla = ({
  skyrsla: { frontmatter, html },
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Box device={device}>
      <Banner
        title={frontmatter.title}
        date={formatDate(frontmatter.dagsetning.slice(0, 10))}
      ></Banner>
      <Content
        className="skyrsla-content"
        dangerouslySetInnerHTML={{ __html: html }}
      ></Content>
      {frontmatter.vidhengi_pdf !== null ? (
        <ImageContainer
          target="_blank"
          href={frontmatter.vidhengi_pdf.publicURL}
        >
          <PDF fluid={fluid}></PDF>
        </ImageContainer>
      ) : (
        <></>
      )}
    </Box>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        file(
          childImageSharp: { fluid: { originalName: { eq: "pdf-icon.png" } } }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Skyrsla data={data} {...props}></Skyrsla>}
  ></StaticQuery>
)
