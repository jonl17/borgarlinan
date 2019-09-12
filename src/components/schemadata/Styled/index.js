import styled, { css } from "styled-components"
import { styles } from "../../../constants"

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${styles.BackGroundGray};
  padding: 0 0 100px 0;
`

export const Container = styled.div`
  border-top: 4px solid ${styles.LinuLitur};
  padding-top: 100px;
  display: grid;
  height: 100%;
  margin: auto;
  width: 1000px;
  grid-gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  ${props =>
    props.device === `tablet` &&
    css`
      grid-template-columns: repeat(1, 1fr);
      width: 95%;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      grid-template-columns: repeat(1, 1fr);
      width: 95%;
    `}
`
