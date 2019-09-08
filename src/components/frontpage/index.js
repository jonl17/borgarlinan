import React from "react"
import { connect } from "react-redux"
import { setDevice } from "../../state/actions"

import { Container, Title, TitleContainer } from "./styled"

import Menu from "../menu"
import Video from "../video"

class Frontpage extends React.Component {
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
    const { started } = this.props
    console.log(started)
    return (
      <Container>
        <Video></Video>
        <Menu></Menu>
        <TitleContainer started={started}>
          <Title>Lorem ipsum Borgarlínan</Title>
        </TitleContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
  started: state.reducer.started,
})

export default connect(mapStateToProps)(Frontpage)
