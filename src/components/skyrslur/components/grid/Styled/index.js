import styled, { css, keyframes } from "styled-components"

const Fade = keyframes`
  from {
    opacity: .4;
    transform: scale(.99);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const ContainerStyle = css`
  margin: 0;
  ${props =>
    props.fade === "fade" &&
    css`
      animation: ${Fade} 0.2s ease-in-out 0s;
    `}
`
export const Container = styled.div`
  ${ContainerStyle};
  ${props =>
    props.device === `mobile` &&
    css`
      margin-bottom: 75px;
    `}
`

export const ExtraContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 75vh;
  ${props =>
    props.device === `mobile` &&
    css`
      grid-template-columns: 1fr;
    `}
`
