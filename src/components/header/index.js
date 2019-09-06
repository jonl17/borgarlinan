import React from "react"
import { connect } from "react-redux"
import { setDevice } from "../../state/actions"

import { Container, Title } from "./styled"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.updateDevice = this.updateDevice.bind(this)
  }
  updateDevice() {
    this.props.dispatch(setDevice(window.innerWidth))
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDevice)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDevice)
  }
  render() {
    return (
      <Container>
        <Title>Borgarlínan</Title>
        <p>{this.props.device}</p>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Header)
