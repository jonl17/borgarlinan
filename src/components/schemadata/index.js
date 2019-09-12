import React from "react"
import { Container, Background } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import SchemaBody from "../schemabody"
import { connect } from "react-redux"

const GetSchemaData = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "schemadata" } } }
          sort: { fields: frontmatter___order }
        ) {
          edges {
            node {
              frontmatter {
                title
                text
                order
                type
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.edges.map((item, index) => (
        <SchemaBody key={index} schemas={item.node}></SchemaBody>
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
