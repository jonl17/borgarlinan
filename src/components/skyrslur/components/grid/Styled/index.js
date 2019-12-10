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
  display: grid;
  grid-gap: 30px;
  margin: auto;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
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
