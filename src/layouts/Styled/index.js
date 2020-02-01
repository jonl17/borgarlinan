import styled, { css } from "styled-components"

export const Body = styled.div`
  overflow: hidden;
  position: relative;
  transition: 0.2s ease-in-out;
  opacity: 0;
  ${props =>
    props.device !== undefined &&
    css`
      opacity: 1;
    `}
`
