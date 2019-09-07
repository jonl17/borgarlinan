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
    return (
      <Container>
        <Video></Video>
        <Menu></Menu>
        <TitleContainer>
          <Title>Lorem ipsum Borgarlínan</Title>
        </TitleContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Frontpage)
