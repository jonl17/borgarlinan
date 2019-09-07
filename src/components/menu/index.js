import React from "react"
import { Navbar, Item, Text } from "./Styled"
import { graphql, StaticQuery } from "gatsby"

const GimmeMenuItems = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            navbaritems
          }
        }
      }
    `}
    render={data =>
      data.site.siteMetadata.navbaritems.map((item, index) => (
        <Item key={index}>
          <Text>{item}</Text>
        </Item>
      ))
    }
  ></StaticQuery>
)

const Menu = () => {
  return <Navbar>{GimmeMenuItems()}</Navbar>
}

export default Menu
