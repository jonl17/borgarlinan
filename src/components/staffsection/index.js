import React from "react"
import { Container, Title, Grid } from "./Styled"
import StaffBody from "../staffbody"
import { graphql, StaticQuery } from "gatsby"
import { connect } from "react-redux"

const GetStaff = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpStarfsfolk(sort: { fields: acf___nafn, order: ASC }) {
          edges {
            node {
              acf {
                nafn
                starf
                starf_enska
                netfang
                verkefnastjori
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allWordpressWpStarfsfolk.edges.map((staff, index) => (
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
