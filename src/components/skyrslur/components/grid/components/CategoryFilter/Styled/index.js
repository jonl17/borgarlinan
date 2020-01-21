import styled from "styled-components"
import { styles } from "../../../../../../../constants"

export const CategoryBox = styled.div`
  width: 350px;
  height: ${props => props.height};
  background: ${styles.Blue};
`
export const Item = styled.p`
  height: ${props => props.itemheight};
  margin: 0;
  color: white;
`
