import React from "react"
import { graphql, StaticQuery } from "gatsby"

/** components */
import { CategoryBox, Item } from "./Styled"

const CategoryFilter = ({
  data: {
    site: {
      siteMetadata: { utgefid_efni_filter_items },
    },
  },
}) => {
  return (
    <CategoryBox height={utgefid_efni_filter_items.length * 50 + "px"}>
      {utgefid_efni_filter_items.map(item => (
        <Item itemheight={50 + "px"}>{item}</Item>
      ))}
    </CategoryBox>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            utgefid_efni_filter_items
          }
        }
      }
    `}
    render={data => <CategoryFilter data={data} {...props}></CategoryFilter>}
  ></StaticQuery>
)
