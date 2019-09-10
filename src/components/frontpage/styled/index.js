import styled, { css } from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  display: grid;
  z-index: 4;
`
export const TitleContainer = styled.div`
  height: ${props =>
    props.height === undefined ? "0px" : props.height + "px"};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -150px;
  padding-left: 25px;
  border-left: 4px solid ${styles.Blue};
  ${props =>
    props.white &&
    css`
      border-left: 4px solid white;
    `}
  transition: 0.1s;
  width: 1000px;
  margin-left: -445px;
`
export const Title = styled.h1`
  margin: 0 auto;
  font-size: 90px;
  color: white;
  ${props =>
    props.sub &&
    css`
      width: 1000px;
      font-size: 70px;
    `}
`

/* tablet */

export const TitleContainerTablet = styled(TitleContainer)`
  height: ${props =>
    props.height === undefined ? "0px" : props.height + "px"};
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -150px;
  padding-left: 25px;
  border-left: 4px solid ${styles.Blue};
  ${props =>
    props.white &&
    css`
      border-left: 4px solid white;
    `}
  transition: 0.1s;
  width: 100%;
  margin-left: 0;
`
export const TitleTablet = styled(Title)`
  margin: 0 auto;
  font-size: 45px;
  color: white;
  ${props =>
    props.sub &&
    css`
      width: 100%;
      font-size: 35px;
    `}
`
