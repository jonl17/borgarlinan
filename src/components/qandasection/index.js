import React from "react"
import { Container } from "./Styled"
import QandABody from "../qandabody"
import { connect } from "react-redux"

import { graphql, StaticQuery } from "gatsby"

const GetQandA = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/spurt_og_svarad/" } }
        ) {
          nodes {
            html
            frontmatter {
              title
              title_enska
              mynd {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.nodes.map((item, index) => (
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
