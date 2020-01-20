import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { graphql, StaticQuery } from "gatsby"
import { triggerNav } from "../../state/actions"

/** components */
import { Navbar, Sensor } from "./Styled"
import Burger from "../burger"
import MenuItems from "./components/menuItems"

const Menu = ({
  burger,
  data: {
    site: {
      siteMetadata: { navbaritems },
    },
  },
}) => {
  // store fetching
  const dispatch = useDispatch()
  const device = useSelector(state => state.reducer.device)
  const navStatus = useSelector(state => state.reducer.navStatus)
  // each item in menu is burgerHeight px in height
  return (
    <>
      <Sensor
        display={navStatus === `open` ? `block` : `none`}
        onMouseOver={() => dispatch(triggerNav("closed"))}
        onTouchStart={() => dispatch(triggerNav("closed"))}
      ></Sensor>
      {device === `mobile` ? <Burger></Burger> : ""}
      <Navbar
        onMouseOver={() =>
          device !== `mobile` ? dispatch(triggerNav("open")) : ""
        }
        burger={burger}
        device={device}
      >
        <MenuItems navbaritems={navbaritems}></MenuItems>
      </Navbar>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            navbaritems {
              name
              name_en
              url
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} {...props}></Menu>}
  ></StaticQuery>
)
