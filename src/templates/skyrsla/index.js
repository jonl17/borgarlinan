import React from "react"
import { Container, Title, Content, Date, ImageContainer, PDF } from "./Styled"
import { graphql } from "gatsby"
import { formatDate } from "../../methods"
import { useSelector } from "react-redux"
import "./index.css"

/** components */
import Back from "../../components/Back"
import Footer from "../../components/footer"

const SkyrslaTemplate = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, dagsetning, vidhengi_pdf },
    },
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <>
      <Container device={device}>
        <Back slug={`/skyrslur/`}></Back>
        <Date> {formatDate(dagsetning.slice(0, 10))}</Date>
        <Title className="bold">{title}</Title>
        <Content
          device={device}
          className="single-skyrsla-content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></Content>
        {vidhengi_pdf !== null ? (
          <ImageContainer href={vidhengi_pdf.publicURL} target="_blank">
            <PDF fluid={fluid}></PDF>
          </ImageContainer>
        ) : (
          <></>
        )}
      </Container>
      <Footer></Footer>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        dagsetning
        vidhengi_pdf {
          publicURL
        }
      }
    }
    file(childImageSharp: { fluid: { originalName: { eq: "pdf-icon.png" } } }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SkyrslaTemplate
