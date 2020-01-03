import styled, { css } from "styled-components"
import { styles } from "../../../constants"
import { Link } from "gatsby"

const ContainerStyle = css`
  display: ${props => props.display};
  padding: 10px;
  border: 2px solid ${styles.LinuLitur};
  border-radius: 3px;
  transition: 0.2s ease-in-out;
  width: 90px;
  height: 20px;
  ${props =>
    props.selected &&
    css`
      background: ${styles.Blue};
      border: 2px solid ${styles.Blue};
    `}
  &&:hover {
    ${props =>
      props.basic !== `basic` &&
      css`
        background: ${styles.Blue};
        border: 2px solid ${styles.Blue};
      `}
    cursor: pointer;
  }
  ${props =>
    props.centering === "center" &&
    css`
      margin: auto;
    `}
  ${props =>
    props.margins === "margins" &&
    css`
      margin: 50px auto 0 auto;
    `}
  ${props =>
    props.basic === `basic` &&
    css`
      border: none;
      width: 80px;
      padding-left: 0;
    `}
`
/** línkur */
export const LinkContainer = styled(Link)`
  ${ContainerStyle};
  text-decoration: none;
`
/** venjulegur takki */
export const Container = styled.div`
  ${ContainerStyle};
  ${props =>
    props.device === `mobile` &&
    css`
      ${props =>
        props.mobileMove === `move` &&
        css`
          margin: 0 auto 50px auto;
        `}
    `}
`
export const Button = styled.p`
  margin: 0;
  color: ${styles.Blue};
  text-align: center;
  ${props =>
    props.selected &&
    css`
      color: white;
    `}
  transition: 0.2s ease-in-out;
  ${props =>
    props.device !== `mobile` &&
    css`
      ${Container}:hover & {
        color: white;
      }
      ${LinkContainer}:hover & {
        ${props =>
          props.basic !== `basic` &&
          css`
            color: white;
          `}
      }
    `}
  ${props =>
    props.basic === `basic` &&
    css`
      border-bottom: 2.5px solid ${styles.LinuLitur};
    `}
`
