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
    pdfIcon: {
      childImageSharp: { fluid },
    },
    pdfBackup,
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
        {vidhengi_pdf !==
        null /** this is a dirty fix but works! if somehow pdf is null in markdown, then I must manually change it's name to the markdown slug name */ ? (
          <ImageContainer href={vidhengi_pdf.publicURL} target="_blank">
            <PDF fluid={fluid}></PDF>
          </ImageContainer>
        ) : /** then it will search for that pdf FILE, somehow that works */
        pdfBackup !== null ? (
          <ImageContainer href={pdfBackup.publicURL} target="_blank">
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
  query SkyrslaQuery($id: String!, $pdfbackupname: String!) {
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
    pdfIcon: file(
      childImageSharp: { fluid: { originalName: { eq: "pdf-icon.png" } } }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pdfBackup: file(name: { eq: $pdfbackupname }) {
      publicURL
    }
  }
`

export default SkyrslaTemplate
