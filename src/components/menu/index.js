import React from "react"
import { Navbar, Item, Text } from "./Styled"
import { connect } from "react-redux"
import { setLanguage } from "../../state/actions"
import { styles } from "../../constants"

const Menu = ({ page, dispatch, device }) => {
  return (
    <Navbar>
      <Item
        page={page}
        to="/"
        activeStyle={{
          borderBottom: `4px solid ${styles.Blue}`,
        }}
      >
        <Text className="bold">Borgarlínan</Text>
      </Item>
      <Item
        page={page}
        activeStyle={{
          borderBottom: `4px solid ${styles.Blue}`,
        }}
        to="/um-verkefnastofu"
      >
        <Text className="bold">Um verkefnastofu</Text>
      </Item>
      <Item onClick={() => dispatch(setLanguage())} to="/" page={page}>
        <Text className="bold">English</Text>
      </Item>
    </Navbar>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Menu)
