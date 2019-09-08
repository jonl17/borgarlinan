import styled, { css } from "styled-components"
import { styles } from "../../../constants"

/* each news item */
export const Body = styled.div``
export const Title = styled.p`
  color: ${styles.Blue};
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 35px;
  margin-top: 35px;
`
export const List = styled.ul`
  list-style: none;
  height: 100%;
  transition: 0.2s;
  ${props =>
    props.minimize &&
    css`
      height: 0;
      opacity: 0;
    `}
`
export const ListItem = styled.li``
export const Text = styled.p`
  color: ${styles.Gray};
  font-size: 18px;
  line-height: 140%;
`
export const More = styled.div``

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
