import styled from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  width: 100%;
  height: 100px;
  bottom: 0;
  left: 25px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-bottom: -25px;
`
export const Button = styled.p`
  text-decoration: underline;
  color: ${styles.Blue};
  &&:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  width: 100px;
`
