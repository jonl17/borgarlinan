import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../constants"

export const Button = styled(Link)`
  height: 40px;
  width: 40px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  transform: rotate(180deg);
  margin: 25px 0 25px 0;
  transition: 0.2s ease-in-out;
  &&:hover {
    transform: rotate(180deg) scale(0.9);
  }
`
export const Line = styled.span`
  height: 4px;
  width: 30px;
  position: absolute;
  background: ${styles.Blue};
  border-radius: 5px;
  ${props =>
    props.one &&
    css`
      transform: rotate(35deg);
      top: 10px;
    `}
  ${props =>
    props.two &&
    css`
      transform: rotate(-35deg);
      bottom: 10px;
    `}
`
