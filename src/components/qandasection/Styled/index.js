import styled, { css } from "styled-components"

/* full section container */
export const Container = styled.div`
  display: grid;
  margin: 125px auto 75px auto;
  align-items: center;
  width: 900px;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 90%;
      margin: 50px auto 75px auto;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      width: 90%;
      margin: 25px auto 50px auto;
    `}
`
export const ContainerTablet = styled(Container)`
  width: 100%;
  margin: 50% auto auto auto;
`
