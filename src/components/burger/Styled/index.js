import styled, { css } from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  position: fixed;
  height: 35px;
  width: 40px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  top: 0;
  right: 0;
  padding: 35px;
  transition: 0.2s;
  opacity: 0;
  z-index: -1;
  &&:hover {
    cursor: pointer;
  }
  ${props =>
    props.display === `flex` &&
    css`
      opacity: 1;
      z-index: 10;
    `}
`
export const Line = styled.span`
  width: 100%;
  height: 5px;
  background-color: ${styles.LinuLitur};
`
