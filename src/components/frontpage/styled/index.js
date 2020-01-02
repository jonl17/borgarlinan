import styled, { css } from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  display: grid;
  z-index: 4;
  position: relative;
`
export const TitleContainer = styled.div`
  pointer-events: none;
  z-index: 2;
  height: ${props =>
    props.height === undefined ? "0px" : props.height + "px"};
  position: absolute;
  left: 50%;
  top: 52.5%;
  margin-top: -150px;
  padding-left: 25px;
  border-left: 4px solid ${styles.LinuLitur};
  ${props =>
    props.white &&
    css`
      border-left: 4px solid white;
    `}
  transition: .1s ease-in-out;
  width: 1000px;
  margin-left: -445px;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 4px;
      margin-left: 0;
      left: 15%;
      top: 65%;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      width: 4px;
      margin-left: 0;
      left: 50px;
      top: 85%;
      ${props =>
        !props.white &&
        css`
          height: 0;
        `}
    `}
`
export const Title = styled.h1`
  opacity: ${props => props.opacity};
  transition: .3s;
  margin: 0 auto;
  font-size: 90px;
  color: white;
  position: absolute;
  top: -17.5px;
  ${props =>
    props.sub &&
    css`
      width: 1000px;
      font-size: 70px;
      top: 90px;
    `}

  ${props =>
    props.device === `tablet` &&
    css`
      font-size: 75px;
      width: 700px;
      position: absolute;
      left: -50px;
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
        left: -10px;
        top: -150px;
        ${props =>
          props.sub &&
          css`
            font-size: 35px;
            top: -85px;
          `}
      `}
`

/** Blur */
