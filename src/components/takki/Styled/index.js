import styled, { css } from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  display: ${props => props.display};
  padding: 10px;
  border: 2px solid ${styles.LinuLitur};
  transition: 0.2s ease-in-out;
  width: 80px;
  height: 20px;
  ${props =>
    props.selected &&
    css`
      background: ${styles.Blue};
      border: 2px solid white;
    `}
  &&:hover {
    background: ${styles.Blue};
    border: 2px solid white;
    cursor: pointer;
  }
  ${props =>
    props.centering === "center" &&
    css`
      margin: auto;
    `}
  ${props =>
    props.margins === "margins" &&
    css`
      margin: 50px auto 0 auto;
    `}
`
export const Button = styled.p`
  margin: 0;
  color: ${styles.Blue};
  text-align: center;
  ${props =>
    props.selected &&
    css`
      color: white;
    `}
  transition: 0.2s ease-in-out;
  ${Container}:hover & {
    color: white;
  }
`
