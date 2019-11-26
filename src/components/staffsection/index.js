import React from "react"
import { Container, Grid } from "./Styled"
import StaffBody from "../staffbody"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"

const GetStaff = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/starfsfolk/" } }
          sort: { fields: frontmatter___title }
        ) {
          nodes {
            frontmatter {
              title
              starfslysing
              netfang
              verkefnastjori
              portrait_mynd {
                childImageSharp {
                  fixed(height: 200, width: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.nodes.map((staff, index) => (
        <StaffBody key={index} staff={staff.frontmatter}></StaffBody>
      ))
    }
  ></StaticQuery>
)

const StaffSection = ({ device }) => {
  return (
    <Container device={device}>
      <Grid device={device}>{GetStaff()}</Grid>
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(StaffSection)
