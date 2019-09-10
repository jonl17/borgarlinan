import React from "react"
import { Container } from "./Styled"
import QandABody from "../qandabody"
import { connect } from "react-redux"

import { graphql, StaticQuery } from "gatsby"

const GetQandA = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "qanda" } } }) {
          edges {
            node {
              frontmatter {
                title
                subject
                more
                englishTitle
                englishSubject
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.edges.map((item, index) => (
        <QandABody index={index} key={index} item={item}></QandABody>
      ))
    }
  ></StaticQuery>
)

const QandASection = ({ device }) => {
  return <Container device={device}>{GetQandA()}</Container>
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(QandASection)
