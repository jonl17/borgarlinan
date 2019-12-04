import React from "react"
import { Navbar, Item, Text /*Button*/ } from "./Styled"
import { connect } from "react-redux"
import { styles } from "../../constants"

const BurgerMenu = ({ page, device, burger }) => {
  return (
    <Navbar burger={burger} device={device}>
      <Item
        device={device}
        page={page}
        to="/"
        activeStyle={{
          borderBottom: `4px solid ${styles.LinuLitur}`,
        }}
      >
        <Text className="bold">Borgarlínan</Text>
      </Item>
      <Item
        device={device}
        page={page}
        activeStyle={{
          borderBottom: `4px solid ${styles.LinuLitur}`,
        }}
        to="/um-verkefnastofu/"
      >
        <Text className="bold">Um verkefnastofu</Text>
      </Item>
      {/*<Button
        device={device}
        onClick={() => dispatch(setLanguage())}
        page={page}
      >
        <Text className="bold">IS/EN</Text>
      </Button> */}
    </Navbar>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
  language: state.reducer.language,
})

export default connect(mapStateToProps)(BurgerMenu)
