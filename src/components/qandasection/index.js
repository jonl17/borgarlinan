import React from "react"
import { Container } from "./Styled"
import QandABody from "../qandabody"
import { connect } from "react-redux"

import { graphql, StaticQuery } from "gatsby"

const GetQandA = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpQanda(sort: { fields: date, order: ASC }) {
          edges {
            node {
              acf {
                mynd {
                  localFile {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                skraut
                fyrirsogn
                fyrirsogn_enska
                samfelldur_texti {
                  malsgrein
                }
                samfelldur_texti_enska {
                  malsgrein_enska
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allWordpressWpQanda.edges.map((item, index) => (
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
