import styled, { css } from "styled-components"

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
  color: black;
  font-size: 25px;
  ${props => props.device === `tablet` && css``}
  ${props => props.device === `mobile` && css``}
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  ${props =>
    props.device === `mobile` &&
    css`
      grid-template-columns: 1fr;
    `}
`
