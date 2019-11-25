import styled, { css } from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  margin: 125px auto;
  display: grid;
  width: 1000px;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 90%;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      width: 90%;
      margin: 125px auto auto auto;
    `}
`
export const Title = styled.h1`
  color: ${styles.Blue};
  font-size: 25px;
  ${props => props.device === `tablet` && css``}
  ${props => props.device === `mobile` && css``}
`
export const Paragraph = styled.p`
  color: ${styles.Gray};
  line-height: 160%;
  font-size: 19px;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 100%;
      box-sizing: border-box;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      width: 100%;
      box-sizing: border-box;
      font-size: 15px;
    `}
`
export const Content = styled.div``
