import styled, { css } from "styled-components"
import { styles } from "../../../../../../../constants"

export const CategoryBox = styled.div`
  width: auto;
  height: ${props => props.height};
  background: ${styles.Blue};
  margin-right: 25px;
  transition: 0.2s ease-in-out;
  overflow: hidden;
`
export const Item = styled.p`
  height: ${props => props.itemheight};
  margin: 0;
  color: white;
  box-sizing: border-box;
  padding: 15px 0px 15px 25px;
  font-size: 16px;
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
