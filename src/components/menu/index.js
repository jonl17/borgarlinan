import React from "react"
import { Navbar, Item, Text, Button } from "./Styled"
import { connect } from "react-redux"
import { setLanguage } from "../../state/actions"
import { styles } from "../../constants"

const Menu = ({ page, dispatch, device, language }) => {
  return (
    <Navbar device={device}>
      <Item
        page={page}
        to="/"
        activeStyle={{
          borderBottom: `4px solid ${styles.LinuLitur}`,
        }}
      >
        <Text className="bold">Borgarlínan</Text>
      </Item>
      <Item
        page={page}
        activeStyle={{
          borderBottom: `4px solid ${styles.LinuLitur}`,
        }}
        to="/um-verkefnastofu"
      >
        <Text className="bold">Um verkefnastofu</Text>
      </Item>
      <Button onClick={() => dispatch(setLanguage())} page={page}>
        <Text className="bold">IS/EN</Text>
      </Button>
    </Navbar>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
  language: state.reducer.language,
})

export default connect(mapStateToProps)(Menu)
