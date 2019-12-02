import React from "react"
import { Container, Line } from "./Styled"
import { connect } from "react-redux"
import { triggerNav } from "../../state/actions"

class Burger extends React.Component {
  render() {
    const { navStatus } = this.props
    return (
      <Container id="burger">
        <Line one></Line>
        <Line two></Line>
        <Line three></Line>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  lineHeight: state.reducer.lineHeight,
  navStatus: state.reducer.navStatus,
})

export default connect(mapStateToProps)(Burger)
