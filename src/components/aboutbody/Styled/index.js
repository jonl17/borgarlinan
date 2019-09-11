import styled, { css } from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  margin: 125px auto 125px auto;
  display: grid;
  width: 900px;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 90%;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      width: 100%;
      margin: 125px auto auto auto;
    `}
`
export const Title = styled.h1`
  color: ${styles.Blue};
  font-size: 25px;
  ${props =>
    props.device === `tablet` &&
    css`
      text-align: center;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      text-align: center;
    `}
`
export const Paragraph = styled.p`
  color: ${styles.Gray};
  line-height: 160%;
  width: 75%;
  font-size: 19px;
  ${props =>
    props.device === `tablet` &&
    css`
      text-align: center;
      width: 100%;
      box-sizing: border-box;
      padding: 0 10px 0 10px;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      text-align: center;
      width: 100%;
      box-sizing: border-box;
      padding: 0 10px 0 10px;
      font-size: 15px;
    `}
`
