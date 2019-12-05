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

const Skyrsla = ({ skyrsla: { frontmatter, html } }) => {
  return (
    <Box>
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
      <Takki click={() => console.log("get off!")} texti={"Lesa meira"}></Takki>
    </Box>
  )
}

export default Skyrsla
