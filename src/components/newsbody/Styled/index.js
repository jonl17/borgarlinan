import styled, { css } from "styled-components"
import { styles } from "../../../constants"

export const Body = styled.div`
  position: relative;
  height: 100%;
  width: 75%;
  margin-top: 75px;
  margin-bottom: 75px;
  ${props =>
    !props.even &&
    css`
      margin-left: 25%;
      padding-left: 25px;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      margin: auto;
      padding-left: 0;
      width: 95%;
      background-color: ${styles.BackGroundGray};
      padding-bottom: 25px;
    `}
`
export const Date = styled.p`
  color: ${styles.Gray};
  ${props => props.device === `mobile` && css``}
`
export const NewsTitle = styled.h1`
  color: ${styles.Blue};
  font-size: 45px;
  ${props =>
    props.device === `mobile` &&
    css`
      font-size: 30px;
    `}
`
export const Paragraph = styled.p`
  color: ${styles.Gray};
  line-height: 160%;
  font-size: 18px;
  ${props =>
    props.device === `mobile` &&
    css`
      font-size: 15px;
    `}
`
export const Line = styled.div`
${props =>
  props.action === `full` &&
  css`
    height: 100%;
  `}
  ${props =>
    props.action === `empty` &&
    css`
      height: 0;
    `}
  ${props =>
    props.action === "fill" &&
    css`
      height: ${props => props.height + "px"};
    `}
  width: 100%;
  position: absolute;
  top: 0;
  ${props =>
    !props.even &&
    css`
      border-left: 4px solid ${styles.LinuLitur};
      left: -10px;
    `}
`
/* tablet */

export const BodyTablet = styled(Body)`
  margin-left: 0;
  padding-left: 0;
`
