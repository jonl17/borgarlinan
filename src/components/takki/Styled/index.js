import styled from "styled-components"
import { styles } from "../../../constants"

export const Button = styled.div``
export const Text = styled.p`
  text-decoration: underline;
  color: ${styles.Blue};
  &&:hover {
    cursor: pointer;
  }
  width: 100px;
`
