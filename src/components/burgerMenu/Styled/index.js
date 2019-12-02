import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../constants"

export const Navbar = styled.div`
  display: none;
  height: 100px;
  width: 35%;
  margin: 0 0px 0 75px;
  padding-right: 75px;
  position: fixed;
  background-color: ${styles.LinuLitur};
  right: 0px;
  top: 0;
  z-index: 12;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 100%;
      margin: 0;
      padding: 0;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      height: 75px;
      width: 100%;
      margin: 0;
      padding: 0;
    `}
`
export const Item = styled(Link)`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  ${props =>
    props.page === "um-verkefnastofu" &&
    css`
      color: lightgray;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      color: white;
    `}
`
export const Button = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  ${props =>
    props.page === "um-verkefnastofu" &&
    css`
      color: lightgray;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      color: white;
    `}
  &&:hover {
    cursor: pointer;
  }
`
export const Text = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 0px;
  font-size: 15px;
`
