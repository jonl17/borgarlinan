import React from "react"
import { Container, Line } from "./Styled"
import { connect } from "react-redux"
import { triggerNav } from "../../state/actions"

class Burger extends React.Component {
  render() {
    const { navStatus, dispatch } = this.props
    console.log(navStatus)
    return navStatus === `closed` ? (
      <Container onClick={() => dispatch(triggerNav("open"))} id="burger">
        <Line one></Line>
        <Line two></Line>
        <Line three></Line>
      </Container>
    ) : (
      <Container onClick={() => dispatch(triggerNav("closed"))} id="burger">
        <Line one ex></Line>
        <Line two ex></Line>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  lineHeight: state.reducer.lineHeight,
  navStatus: state.reducer.navStatus,
})

export default connect(mapStateToProps)(Burger)
