import styled from "styled-components"
import { Link } from "gatsby"

export const Navbar = styled.div`
  height: 75px;
  width: 35%;
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
  color: white;
`
