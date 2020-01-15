import React from "react"
import { Container, Grid } from "./Styled"
import StaffBody from "../staffbody"
import { graphql, StaticQuery } from "gatsby"
import { useSelector } from "react-redux"

const StaffSection = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container device={device}>
      <Grid device={device}>
        {nodes.map((staff, index) => (
          <StaffBody key={index} staff={staff.frontmatter}></StaffBody>
        ))}
      </Grid>
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/starfsfolk/" } }
          sort: { fields: frontmatter___rod }
        ) {
          nodes {
            frontmatter {
              title
              starfslysing
              starfslysing_enska
              netfang
              verkefnastjori
              portrait_mynd {
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
    render={data => <StaffSection data={data} {...props}></StaffSection>}
  ></StaticQuery>
)
