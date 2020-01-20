import styled, { css } from "styled-components"
import { styles } from "../../../../../../../../../constants"

export const Container = styled.div``
export const Title = styled.p`
  color: ${styles.Blue};
  font-size: 25px;
  margin: 0;
  margin-left: 75px;
  max-width: 385px;
  ${props =>
    props.device === `mobile` &&
    css`
      font-size: 20px;
    `}
`
export const Date = styled.p`
  color: ${styles.Gray};
  margin-bottom: 10px;
  font-size: 12px;
`
