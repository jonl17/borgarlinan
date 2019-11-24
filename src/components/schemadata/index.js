import React from "react"
import { Container, Background } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import SchemaBody from "../schemabody"
import { connect } from "react-redux"

const GetSchemaData = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/hopar/" } }
          sort: { fields: frontmatter___title }
        ) {
          nodes {
            frontmatter {
              title
              texti
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.nodes.map((item, index) => (
        <SchemaBody key={index} schemas={item.frontmatter}></SchemaBody>
      ))
    }
  ></StaticQuery>
)

const SchemaData = ({ device }) => {
  return (
    <Background>
      <Container device={device}>{GetSchemaData()}</Container>
    </Background>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(SchemaData)
