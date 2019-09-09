import React from "react"
import { connect } from "react-redux"
import { setDevice, getHeight } from "../../state/actions"

import { Container, Title, TitleContainer } from "./styled"

import Video from "../video"

class Frontpage extends React.Component {
  constructor(props) {
    super(props)
    this.updateDevice = this.updateDevice.bind(this)
  }
  updateDevice() {
    this.props.dispatch(setDevice(window.innerWidth))
    this.props.dispatch(getHeight(window.innerHeight))
  }
  componentDidMount() {
    this.props.dispatch(setDevice(window.innerWidth))
    window.addEventListener("resize", this.updateDevice)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDevice)
  }
  render() {
    const { started, device, lineHeight, firstLineStop } = this.props
    return (
      <Container>
        <Video></Video>
        {device === `browser` ? (
          <>
            <TitleContainer
              height={lineHeight >= firstLineStop ? firstLineStop : lineHeight}
              started={started}
            >
              <Title device={device}>Lorem ipsum Borgarlínan</Title>
            </TitleContainer>
          </>
        ) : (
          <></>
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
  started: state.reducer.started,
  height: state.reducer.height,
  lineHeight: state.reducer.lineHeight,
  firstLineStop: state.reducer.firstLineStop,
})

export default connect(mapStateToProps)(Frontpage)
