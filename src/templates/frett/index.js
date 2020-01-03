import React from "react"
import { Container, Title, Content, Date } from "./Styled"
import { graphql } from "gatsby"
import { formatDate } from "../../methods"
import { useSelector } from "react-redux"
import "./index.css"

/** components */
import Back from "../../components/Back"
import Footer from "../../components/footer"

const FrettTemplate = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, dagsetning },
    },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <>
      <Container device={device}>
        <Back slug={`/frettir/`}></Back>
        <Date> {formatDate(dagsetning.slice(0, 10))}</Date>
        <Title className="bold">{title}</Title>
        <Content
          device={device}
          className="single-frett-content"
          dangerouslySetInnerHTML={{ __html: html }}
        ></Content>
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
      }
    }
  }
`

export default FrettTemplate
