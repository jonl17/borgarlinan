import styled, { css } from "styled-components"
import { styles } from "../../../../../../../constants"

export const CategoryBox = styled.div`
  z-index: 8;
  width: auto;
  height: ${props => props.height};
  background: ${styles.Blue};
  margin-right: 25px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
  border-radius: 3px;
  ${props =>
    props.device === `mobile` &&
    css`
      position: absolute;
      top: 133px;
      right: 0px;
      width: 175px;
    `}
`
export const Item = styled.p`
  height: ${props => props.itemheight};
  margin: 0;
  color: white;
  box-sizing: border-box;
  padding: 15px 0px 15px 25px;
  font-size: 15px;
  ${props =>
    props.device === `mobile` &&
    css`
      font-size: 13px;
    `}
  border-top: ${props => (props.border ? "1px" : "0px")} solid white;
  width: 75%;
  margin: auto;
  position: relative;
  ${props =>
    props.device === `browser` &&
    css`
      &&:hover {
        cursor: pointer;
      }
    `}
`
export const Button = styled.div`
  height: 6px;
  width: 6px;
  background: white;
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -3px;
  border-radius: 50%;
  transition: 0.2s;
  ${props =>
    props.selected &&
    css`
      background: black;
    `}
  box-shadow: 0px 0px 0px 3px white;
`
