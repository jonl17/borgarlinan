import React from "react"
import { Navbar, Item, Text, Dropdown, Sensor } from "./Styled"
import { connect } from "react-redux"
import { graphql, StaticQuery } from "gatsby"
import { triggerNav } from "../../state/actions"
import Burger from "../burger"

const getMenuItems = (device, navStatus) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            navbaritems {
              name
              url
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Item device={device} to={data.site.siteMetadata.navbaritems[0].url}>
          <Text className="bold" titill>
            {data.site.siteMetadata.navbaritems[0].name}
          </Text>
        </Item>
        <Dropdown
          device={device}
          height={
            navStatus === "open"
              ? (data.site.siteMetadata.navbaritems.length - 1) * 75 + "px"
              : "0"
          }
        >
          {data.site.siteMetadata.navbaritems.map((item, index) =>
            index !== 0 ? (
              <Item dropdown={"true"} key={index} device={device} to={item.url}>
                <Text className="bold">{item.name}</Text>
              </Item>
            ) : (
              ""
            )
          )}{" "}
        </Dropdown>
      </>
    )}
  ></StaticQuery>
)

const Menu = ({ device, burger, dispatch, navStatus }) => {
  return (
    <>
      <Sensor
        display={navStatus === `open` ? `block` : `none`}
        onMouseOver={() => dispatch(triggerNav("closed"))}
        onTouchStart={() => dispatch(triggerNav("closed"))}
        onTouchMove={() => dispatch(triggerNav("closed"))}
      ></Sensor>
      {device === `mobile` ? <Burger></Burger> : ""}
      {device !== `mobile` ? (
        <Navbar
          onMouseOver={() => dispatch(triggerNav("open"))}
          burger={burger}
          device={device}
        >
          {getMenuItems(device, navStatus)}
        </Navbar>
      ) : (
        <Navbar burger={burger} device={device}>
          {getMenuItems(device, navStatus)}
        </Navbar>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
  language: state.reducer.language,
  navStatus: state.reducer.navStatus,
})

export default connect(mapStateToProps)(Menu)
