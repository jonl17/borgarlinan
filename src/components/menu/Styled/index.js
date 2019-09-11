import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../constants"

export const Navbar = styled.div`
  height: 100px;
  width: 35%;
  margin: 0 75px 0 75px;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 8;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 100%;
      margin: 0;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      height: 75px;
      width: 100%;
      margin: 0;
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
      ${props =>
        props.page === "um-verkefnastofu" &&
        css`
          color: lightgray;
        `}
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
      ${props =>
        props.page === "um-verkefnastofu" &&
        css`
          color: lightgray;
        `}
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
