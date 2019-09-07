import styled from "styled-components"

export const Navbar = styled.div`
  height: 75px;
  width: 35%;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`
export const Item = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Text = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
`
