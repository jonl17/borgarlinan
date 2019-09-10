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
    console.log(this.props.language)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDevice)
  }
  render() {
    const {
      started,
      device,
      lineHeight,
      firstLineStop,
      title,
      subtitle,
    } = this.props
    return (
      <Container>
        <Video></Video>
        {device === `browser` ? (
          <>
            <TitleContainer
              height={lineHeight >= firstLineStop ? firstLineStop : lineHeight}
              started={started}
            >
              <Title device={device}>{title}</Title>
              <Title sub device={device}>
                {subtitle}
              </Title>
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
  language: state.reducer.language,
})

export default connect(mapStateToProps)(Frontpage)
