import React from "react"
import { Container, Title, Grid } from "./Styled"
import StaffBody from "../staffbody"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"

const GetStaff = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "staff" } } }
          sort: { fields: frontmatter___order }
        ) {
          edges {
            node {
              frontmatter {
                title
                job
                englishJob
                subjob
                subjobEnglish
                email
                order
                type
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.edges.map((staff, index) => (
        <StaffBody key={index} staff={staff.node}></StaffBody>
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
