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
`
export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
`
