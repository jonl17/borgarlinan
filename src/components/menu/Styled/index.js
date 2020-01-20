import styled, { css } from "styled-components"
import { sizes } from "../../../constants"

const Background = css`
  background: rgba(244, 244, 244, 0.9);
`

export const Navbar = styled.div`
  height: ${sizes.burgerHeight}px;
  width: 25%;
  padding: 0 75px 0 75px;
  display: flex;
  flex-direction: column;
  ${Background};
  transition: 0.3s;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  ${props =>
    props.device === `tablet` &&
    css`
      height: 75px;
      width: 100%;
      padding: 0;
      background: rgb(244, 244, 244);
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      height: 75px;
      width: 100%;
      padding: 0;
      background: rgb(244, 244, 244);
    `}
`

export const Sensor = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 9;
  display: ${props => props.display};
`
