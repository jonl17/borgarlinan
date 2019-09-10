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
  ${props =>
    props.device === `tablet` &&
    css`
      width: 4px;
      margin-left: 0;
      left: 45%;
      top: 65%;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      width: 4px;
      margin-left: 0;
      left: 50%;
      top: 65%;
    `}
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

  ${props =>
    props.device === `tablet` &&
    css`
      font-size: 75px;
      width: 700px;
      position: absolute;
      left: -300px;
      top: -200px;
      ${props =>
        props.sub &&
        css`
          font-size: 55px;
          top: -100px;
        `}
    `}
    ${props =>
      props.device === `mobile` &&
      css`
        font-size: 55px;
        width: 300px;
        position: absolute;
        left: -150px;
        top: -150px;
        ${props =>
          props.sub &&
          css`
            font-size: 35px;
            top: -85px;
          `}
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
