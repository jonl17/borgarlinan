import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../constants"

const Background = css`
  background: rgba(244, 244, 244, 0.7);
`

export const Navbar = styled.div`
  height: 75px;
  width: 25%;
  padding: 0 75px 0 75px;
  display: flex;
  flex-direction: column;
  ${Background};
  transition: 0.3s;

  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  overflow: hidden;
`
export const Item = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.3s;
  height: 75px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  ${props =>
    props.dropdown &&
    css`
      border-top: 4px solid ${styles.Blue};
    `}
`
export const Text = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  display: inline-block;
  ${props =>
    props.titill &&
    css`
      font-size: 18px;
    `}
  color: ${styles.Blue};
  transition: .2s;
  &&:hover {
    color: ${styles.LinuLitur};
  }

`
export const Dropdown = styled.div`
  position: fixed;
  top: 75px;
  right: 0;
  width: 25%;
  overflow: hidden;
  height: ${props => props.height};
  ${Background};
  padding-right: 75px;
  padding-left: 75px;
  transition: 0.3s ease-in-out;
`
export const Sensor = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 9;
  display: ${props => props.display};
`
