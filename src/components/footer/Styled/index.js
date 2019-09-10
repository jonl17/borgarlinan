import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #7f7f7f;
  z-index: 4;
  display: grid;
  align-items: center;
  justify-content: center;
`
export const Item = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
`
