import React from "react"
import { Container, Video, Source, Blur } from "./Styled"
import theVideo from "./video.mp4"

export default () => {
  return (
    <Container>
      <Blur></Blur>
      <Video autoPlay muted loop>
        <Source src={theVideo}></Source>
      </Video>
    </Container>
  )
}
