import React from "react"
import { Container, VideoStyle, Source, Blur } from "./Styled"
import videoWEBM from "./browser.webm"
import videoMP4 from "./video.mp4"
import { connect } from "react-redux"
import { setWhitelineStop } from "../../state/actions"

class Video extends React.Component {
  componentDidMount() {
    this.props.dispatch(setWhitelineStop(this.videoElement.clientHeight))
  }
  render() {
    return (
      <Container>
        <Blur styles={{ display: "none" }}></Blur>
        <VideoStyle
          ref={videoElement => (this.videoElement = videoElement)}
          autoPlay
          muted
          loop
        >
          <Source type="video/webm" src={videoWEBM}></Source>
          <Source type="video/mp4" src={videoMP4}></Source>
        </VideoStyle>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Video)
