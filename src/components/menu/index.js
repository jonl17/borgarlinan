import React from "react"
import { Navbar, Item, Text, Button } from "./Styled"
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
    render={data => (
      <>
        <Item to="/">
          <Text>{data.site.siteMetadata.navbaritems[0]}</Text>
        </Item>
        <Item to="/um-verkefnastofu">
          <Text>{data.site.siteMetadata.navbaritems[1]}</Text>
        </Item>
        <Button>
          <Text>{data.site.siteMetadata.navbaritems[2]}</Text>
        </Button>
      </>
    )}
  ></StaticQuery>
)

const Menu = () => {
  return <Navbar>{GimmeMenuItems()}</Navbar>
}

export default Menu
