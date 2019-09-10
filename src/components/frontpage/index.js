import React from "react"
import { connect } from "react-redux"
import { setDevice, getHeight } from "../../state/actions"

import { Container, Title, TitleContainer } from "./styled"

import Video from "../video"

class Frontpage extends React.Component {
  constructor(props) {
    super(props)
    this.updateDevice = this.updateDevice.bind(this)
    this.startScroll = this.startScroll.bind(this)
    this.titleElement = React.createRef()
    this.state = {
      whiteLineOffset: undefined,
    }
  }
  updateDevice() {
    this.props.dispatch(setDevice(window.innerWidth))
    this.props.dispatch(getHeight(window.innerHeight))
  }
  startScroll() {
    if (this.state.whiteLineOffset !== this.titleElement.current.offsetTop) {
      this.setState({
        whiteLineOffset: this.titleElement.current.offsetTop,
      })
    }
  }
  componentDidMount() {
    this.props.dispatch(setDevice(window.innerWidth))
    window.addEventListener("resize", this.updateDevice)
    window.addEventListener("scroll", this.startScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDevice)
    window.removeEventListener("scroll", this.startScroll)
  }
  render() {
    const {
      device,
      lineHeight,
      firstLineStop,
      title,
      subtitle,
      whiteLineStop,
    } = this.props
    return (
      <Container>
        <Video></Video>
        {device === `browser` ? (
          <>
            <TitleContainer
              ref={this.titleElement}
              height={lineHeight >= firstLineStop ? firstLineStop : lineHeight}
            >
              <Title className="bold" device={device}>
                {title}
              </Title>
              <Title className="bold" sub device={device}>
                {subtitle}
              </Title>
            </TitleContainer>
            <TitleContainer
              white
              height={
                lineHeight >= whiteLineStop - this.state.whiteLineOffset
                  ? whiteLineStop - this.state.whiteLineOffset
                  : lineHeight
              }
            ></TitleContainer>
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
  whiteLineStop: state.reducer.whiteLineStop,
})

export default connect(mapStateToProps)(Frontpage)
