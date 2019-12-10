import styled, { css } from "styled-components"
import { styles } from "../../../../../constants"

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.p`
  margin: 0;
`
/** filter BTNS */
export const BTNContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 10px 10px 0;
  transition: 0.2s ease-in-out;
  &&:hover {
    cursor: pointer;
  }
`
export const BTN = styled.div`
  padding: 10px;
  border: 2px solid ${styles.LinuLitur};
  transition: 0.2s ease-in-out;
  ${props =>
    props.selected &&
    css`
      background: ${styles.Blue};
      border: 2px solid white;
    `}
  &&:hover {
    background: ${styles.Blue};
    border: 2px solid white;
  }
`
export const Text = styled.p`
  margin: 0;
  color: ${styles.Blue};
  ${props =>
    props.selected &&
    css`
      color: white;
    `}
  transition: 0.2s ease-in-out;
  ${BTN}:hover & {
    color: white;
  }
`
