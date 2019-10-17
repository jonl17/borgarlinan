import styled from "styled-components"

export const Container = styled.div`
  max-height: 100vh;
  overflow: hidden;
`
export const VideoStyle = styled.video`
  height: 100%;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`
export const Source = styled.source``

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: darkblue;
  opacity: 0.2;
`
