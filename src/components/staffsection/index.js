import React from "react"
import { Container, Title, Grid } from "./Styled"
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
      <Title className="bold">Verkefnateymi</Title>
      <Grid device={device}>{GetStaff()}</Grid>
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(StaffSection)
