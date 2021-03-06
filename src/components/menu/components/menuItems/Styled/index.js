import styled, { css } from "styled-components"
import { styles, sizes } from "../../../../../constants"
import { Link } from "gatsby"

const Background = css`
  background: rgba(244, 244, 244, 0.9);
`

export const HomeLangContainer = styled.div`
  display: flex;
`
export const Item = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
  height: ${sizes.burgerHeight}px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  ${props =>
    props.dropdown &&
    css`
      border-top: 2px solid rgba(40, 160, 120, 0.6);
    `}
  ${props =>
    props.device === `tablet` &&
    css`
      height: 75px;
      padding: 0;
      margin: 0 25px 0 25px;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      height: 75px;
      padding: 0;
      margin: 0 25px 0 25px;
    `}
`
export const Text = styled.p`
  font-weight: bold;
  margin: 0;
  display: inline-block;
  ${props =>
    props.titill &&
    css`
      font-size: 20px;
    `}
  color: ${styles.Blue};
  transition: .2s;
  ${props =>
    props.device === `browser` &&
    css`
      ${Item}:hover & {
        color: ${styles.LinuLitur};
      }
    `}


`
export const Dropdown = styled.div`
  position: fixed;
  top: ${sizes.burgerHeight}px;
  right: 0;
  width: 25%;
  overflow: hidden;
  height: ${props => props.height};
  ${Background};
  padding-right: 75px;
  padding-left: 75px;
  transition: 0.3s ease-in-out;
  z-index: 10;
  ${props =>
    props.device === `tablet` &&
    css`
      top: 75px;
      width: 100%;
      padding: 0;
      background: rgb(244, 244, 244);
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      top: 75px;
      width: 100%;
      padding: 0;
      background: rgb(244, 244, 244);
    `}
`
