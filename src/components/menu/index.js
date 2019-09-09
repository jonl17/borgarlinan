import React from "react"
import { Navbar, Item, Text } from "./Styled"
import { connect } from "react-redux"
import { setLanguage } from "../../state/actions"

const Menu = ({ page, dispatch }) => {
  return (
    <Navbar>
      <Item page={page} to="/" activeStyle={{ color: "#7f7f7f" }}>
        <Text>Borgarlínan</Text>
      </Item>
      <Item
        page={page}
        activeStyle={{ color: "#7f7f7f" }}
        to="/um-verkefnastofu"
      >
        <Text>Um verkefnastofu</Text>
      </Item>
      <Item onClick={() => dispatch(setLanguage())} to="/" page={page}>
        <Text>English</Text>
      </Item>
    </Navbar>
  )
}

export default connect()(Menu)
