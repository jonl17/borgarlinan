import styled, { css } from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  height: 100%;
  margin: 125px auto;
  width: 1000px;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 90%;
      margin: 75px auto;
    `};
  ${props =>
    props.device === `mobile` &&
    css`
      width: 90%;
      margin: 25px auto;
      text-align: center;
    `};
`
export const Title = styled.h1`
  color: ${styles.Blue};
  font-size: 25px;
  padding-bottom: 32px;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 20px;
  ${props =>
    props.device === `mobile` &&
    css`
      grid-gap: 50px;
    `}
`
