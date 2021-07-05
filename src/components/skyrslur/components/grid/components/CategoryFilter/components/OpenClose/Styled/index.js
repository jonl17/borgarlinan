import styled, { css } from "styled-components"

export const Button = styled.div`
  height: 100%;
  width: 40px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Line = styled.div`
  background: white;
  height: 3px;
  width: 100%;
  transition: .2s ease-in-out;
  ${props =>
    props.two &&
    css`
      transform: translateX(-7px) rotate(-45deg);
    `}
  ${props =>
    props.one &&
    css`
      transform: rotate(45deg);
    `}
  ${props =>
    props.open &&
    css`
      ${props =>
        props.two &&
        css`
          transform: translateX(-10px) rotate(-45deg);
        `}
      ${props =>
        props.one &&
        css`
          transform: translateX(10px) rotate(45deg);
        `}
    `}
`
