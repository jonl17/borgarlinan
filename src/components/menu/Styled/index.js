import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const Navbar = styled.div`
  height: 75px;
  width: 45%;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`
export const Item = styled(Link)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  ${props =>
    props.page === "um-verkefnastofu" &&
    css`
      color: lightgray;
    `}
`
export const Button = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &&:hover {
    cursor: pointer;
  }
`
export const Text = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`
