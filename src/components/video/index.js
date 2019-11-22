import React from "react"
import {
  Container,
  VideoStyle,
  Source,
  Blur,
  Image,
  ImageContainer,
} from "./Styled"
import videoWEBM from "./browser.webm"
import videoMP4 from "./video.mp4"
import { connect } from "react-redux"
import { setWhitelineStop } from "../../state/actions"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

class Video extends React.Component {
  componentDidMount() {
    this.props.dispatch(setWhitelineStop(this.videoElement.clientHeight))
  }
  getSimaImage = () => (
    <StaticQuery
      query={graphql`
        {
          file(name: { eq: "simaback" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Image fluid={data.file.childImageSharp.fluid}></Image>}
    ></StaticQuery>
  )
  render() {
    const { device } = this.props
    return (
      <Container>
        <Blur device={device} styles={{ display: "none" }}></Blur>
        {device === `mobile` ? (
          <ImageContainer
            ref={videoElement => (this.videoElement = videoElement)}
          >
            {this.getSimaImage()}
          </ImageContainer>
        ) : (
          <VideoStyle
            ref={videoElement => (this.videoElement = videoElement)}
            autoPlay
            muted
            loop
          >
            <Source type="video/webm" src={videoWEBM}></Source>
            <Source type="video/mp4" src={videoMP4}></Source>
          </VideoStyle>
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(Video)
