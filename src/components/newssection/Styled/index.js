import styled, { css } from "styled-components"
import { styles } from "../../../constants"

export const PageContainer = styled.div`
  width: 100%;
`
export const Container = styled.div`
  height: 100%;
  width: 900px;
  margin: 125px auto auto auto;
  padding-top: 150px;
  padding-bottom: 55px;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 90%;
      margin: 50px auto auto auto;
      padding-top: 50px;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      width: 95%;
      margin: 25px auto auto auto;
      padding-top: 25px;
    `}
`
export const Title = styled.p`
  border-top: 4px solid ${styles.Blue};
  padding-top: 35px;
  padding-bottom: 15px;
  color: black;
  font-size: 26px;
  font-weight: bold;
  z-index: 8;
  margin: 25px 0 25px 0px;
  ${props =>
    props.device === `mobile` &&
    css`
      margin-left: 10px;
    `}
`
/* tablet */
export const ContainerTablet = styled(Container)`
  width: 100%;
  margin: 50px auto auto auto;
  padding-top: 75px;
  padding-bottom: 75px;
`
