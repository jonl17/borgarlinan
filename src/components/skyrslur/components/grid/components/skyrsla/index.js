import React from "react"
import { Box, PDF, Content, ImageContainer } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import "./index.css"

/** components */
import Takki from "../../../../../takki"
import Banner from "./components/Banner"

const getpdfImage = () => (
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
    render={(data, index) => (
      <PDF key={index} fluid={data.file.childImageSharp.fluid}></PDF>
    )}
  ></StaticQuery>
)

class Skyrsla extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullsize: false,
    }
  }
  render() {
    const {
      skyrsla: { frontmatter, html },
    } = this.props
    return (
      <Box>
        <Banner
          title={frontmatter.title}
          date={frontmatter.dagsetning}
        ></Banner>
        <Content
          className="skyrsla-content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></Content>
        {frontmatter.vidhengi_pdf !== null ? (
          <ImageContainer target="_blank" href={frontmatter.vidhengi_pdf}>
            {getpdfImage()}
          </ImageContainer>
        ) : (
          <></>
        )}
        <Takki
          click={() =>
            this.setState({
              fullsize: !this.state.fullsize,
            })
          }
          texti={"Lesa meira"}
        ></Takki>
      </Box>
    )
  }
}

export default Skyrsla
