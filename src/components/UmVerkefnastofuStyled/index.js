import styled, { css } from "styled-components"
import { styles } from "../../constants"

export const Body = styled.div``

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${styles.BackGroundGray};
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 1000px;
  margin: auto;
  box-sizing: border-box;
  padding: 100px 0 100px 0;
  display: grid;
  background-color: ${styles.BackGroundGray};
  ${props =>
    props.device === `tablet` &&
    css`
      padding: 100px 0 100px 0;
      width: 95%;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      padding: 100px 0 100px 0;
      width: 100%;
    `}
`
export const SVGImage = styled.img`
  width: 100%;
  margin: auto;
  ${props =>
    props.device === `mobile` &&
    css`
      width: 100%;
    `}
`
