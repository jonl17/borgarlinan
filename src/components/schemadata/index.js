import React from "react"
import { Container, Background } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import SchemaBody from "../schemabody"
import { connect } from "react-redux"

const GetSchemaData = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpHopar(sort: { fields: acf___titill }) {
          edges {
            node {
              acf {
                titill
                lysing
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allWordpressWpHopar.edges.map((item, index) => (
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
