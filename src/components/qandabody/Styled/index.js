import styled, { css } from "styled-components"
import { styles } from "../../../constants"
import Img from "gatsby-image"

/* each news item */
export const Body = styled.div`
  position: relative;
  ${props =>
    props.device === `mobile` &&
    css`
      padding-bottom: 60px;
    `}
`
export const Title = styled.p`
  color: ${styles.Blue};
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 15px;
  background-color: white;
  ${props =>
    props.device === `mobile` &&
    css`
      margin: 0;
      width: 100%;
    `}
`
export const List = styled.ul`
  position: relative;
  padding-left: 30px;
  list-style: ${props => props.list};
  height: 100%;
  transition: 0.2s;
  width: 100%;
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
      width: 95%;
      padding-left: 0;
      background-color: white;
      z-index: 4;
    `}
    ${props =>
      props.list === `rectangle` &&
      css`
        padding-left: 5%;
      `}
`
export const ListItem = styled.li``

export const Line = styled.span``
export const Text = styled.p`
  color: ${styles.Gray};
  font-size: 18px;
  line-height: 160%;
  width: 85%;
  ${props =>
    props.device === `mobile` &&
    css`
      width: 100%;
      font-size: 15px !important;
    `}
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
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  ${props =>
    props.device === `mobile` &&
    css`
      flex-direction: column-reverse;
    `}
`
export const ImageContainer = styled.div`
  width: 100%;
  display: grid;
  margin: auto;
  ${props =>
    props.device === `mobile` &&
    css`
      max-width: 90%;
    `}
`
export const Image = styled(Img)``
