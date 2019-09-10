import styled, { css } from "styled-components"
import { styles } from "../../../constants"

/* each news item */
export const Body = styled.div`
  position: relative;
`
export const Title = styled.p`
  color: ${styles.Blue};
  font-size: 26px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 15px;
  background-color: white;
  ${props =>
    props.device === `mobile` &&
    css`
      margin: 0;
      text-align: center;
      width: 100%;
    `}
`
export const List = styled.ul`
  position: relative;
  padding-left: 30px;
  list-style: none;
  height: 100%;
  transition: 0.2s;
  ${props =>
    props.device === `tablet` &&
    css`
      padding-left: 0;
      background-color: white;
      z-index: 4;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      padding-left: 0;
      text-align: center;
      background-color: white;
      z-index: 4;
    `}
`
export const ListItem = styled.li``

export const Line = styled.span``
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

/* borgarlínan sjálf */
export const LineBlock = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 75px;
  left: 5px;
  transition: 1s;
  height: 100%;
  z-index: -1;
`
