import React from "react"
import { Box, PDF, Content, ImageContainer } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import "./index.css"
import { useSelector } from "react-redux"
import { formatDate } from "../../../../../../methods"
import slugify from "slugify"

/** components */
import Takki from "../../../../../takki"
import Banner from "./components/Banner"

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
        <ImageContainer target="_blank" href={frontmatter.vidhengi_pdf}>
          <PDF fluid={fluid}></PDF>
        </ImageContainer>
      ) : (
        <></>
      )}
      <Takki
        link
        slug={`/skyrslur/` + slugify(frontmatter.title)}
        texti={"Lesa meira"}
      ></Takki>
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
