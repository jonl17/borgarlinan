import React from "react"
import { graphql, StaticQuery } from "gatsby"

/** components */
import { LatestNewsContainer } from "./Styled"
import Frett from "../../../frettir/components/grid/components/frett"
import Takki from "../../../takki"

const LatestNews = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  return (
    <>
      <LatestNewsContainer>
        {nodes.map((item, index) => (
          <Frett key={index} frett={item}></Frett>
        ))}
      </LatestNewsContainer>
      <div style={{ display: "grid" }}>
        <Takki
          slug={"/frettir"}
          link
          mobileMove
          centering
          margins
          texti={"Fréttasafn"}
        ></Takki>
      </div>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/static/content/frettir/" } }
          limit: 2
          sort: { fields: frontmatter___dagsetning, order: DESC }
        ) {
          nodes {
            html
            frontmatter {
              title
              dagsetning
            }
          }
        }
      }
    `}
    render={data => <LatestNews data={data} {...props}></LatestNews>}
  ></StaticQuery>
)
