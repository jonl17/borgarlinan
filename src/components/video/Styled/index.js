import styled, { css } from "styled-components"
import Img from "gatsby-image"

export const Container = styled.div`
  max-height: 100vh;
  overflow: hidden;
`
export const VideoStyle = styled.video`
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`
export const Source = styled.source``

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: darkblue;
  opacity: 0.2;
  ${props =>
    props.device === `mobile` &&
    css`
      z-index: 1;
    `}
`
export const ImageContainer = styled.div`
  height: 100%;
`
export const Image = styled(Img)`
  height: 100%;
`
