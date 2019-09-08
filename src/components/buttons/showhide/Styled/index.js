import styled, { css } from "styled-components"
import { styles } from "../../../../constants"
import { tvist } from "../../../../animations"

export const Container = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  &&:hover {
    cursor: pointer;
  }
`
export const Line = styled.span`
  transition: 0.2s ease-in-out;
  background-color: ${styles.Blue};
  position: absolute;
  width: 100%;
  height: 5px;
  ${props =>
    props.minimize &&
    css`
      transform: rotate(90deg);
    `}
`
