import React from "react"
import {
  Box,
  Title,
  Date,
  PDF,
  Content,
  Banner,
  ImageContainer,
} from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import "./index.css"
import Takki from "../../../../../takki"

const getpdfImage = () => (
  <StaticQuery
    query={graphql`
      {
        file(
          childImageSharp: { fluid: { originalName: { eq: "pdf-icon.png" } } }
        ) {
          childImageSharp {
            fluid {
              src
              originalName
            }
          }
        }
      }
    `}
    render={data => <PDF fluid={data.file.childImageSharp.fluid}></PDF>}
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
      <Box boxHeight={this.state.fullsize ? "auto" : "300px"}>
        <Banner>
          <Date>{frontmatter.dagsetning}</Date>
          <Title className="bold">{frontmatter.title}</Title>
        </Banner>
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
