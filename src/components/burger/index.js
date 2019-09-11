import React from "react"
import { Container, Line } from "./Styled"
import { connect } from "react-redux"
import { triggerBurgerMenu } from "../../state/actions"

class Burger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "none",
    }
    this.callBack = this.callBack.bind(this)
    this.click = this.click.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.callBack)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.callBack)
  }
  callBack() {
    if (this.props.lineHeight > window.innerHeight) {
      this.setState({
        display: "flex",
      })
    } else {
      this.setState({
        display: "none",
      })
      this.props.dispatch(triggerBurgerMenu(false))
    }
  }
  click() {
    this.props.dispatch(triggerBurgerMenu(true))
  }
  render() {
    const { display } = this.state
    return (
      <Container
        onClick={() => this.click()}
        ref={burgerRef => (this.burgerRef = burgerRef)}
        display={display}
      >
        <Line one></Line>
        <Line two></Line>
        <Line three></Line>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  lineHeight: state.reducer.lineHeight,
})

export default connect(mapStateToProps)(Burger)
