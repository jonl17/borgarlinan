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
`
export const Date = styled.p`
  color: ${styles.Gray};
`
export const NewsTitle = styled.h1`
  color: ${styles.Blue};
`
export const Paragraph = styled.p`
  color: ${styles.Gray};
  line-height: 140%;
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
      border-left: 4px solid ${styles.Blue};
      left: -10px;
    `}
`
/* tablet */

export const BodyTablet = styled(Body)`
  margin-left: 0;
  padding-left: 0;
`
