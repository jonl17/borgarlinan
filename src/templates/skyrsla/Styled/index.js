import styled, { css } from "styled-components"
import Img from "gatsby-image"

/* full section container */
export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 125px auto 75px auto;
  width: 900px;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 90%;
      margin: 50px auto 75px auto;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      width: 90%;
      margin: 100px auto 50px auto;
    `}
`
export const Title = styled.p`
  color: black;
  font-size: 25px;
`
export const Date = styled.p`
  color: gray;
`
export const Content = styled.div`
  font-size: 19px;
  color: gray;
  line-height: 160%;
  width: 75%;
  ${props =>
    props.device === `mobile` &&
    css`
      width: 100%;
    `}
`
export const ImageContainer = styled.a`
  position: absolute;
  right: 25px;
  top: 25px;
  height: 55px;
  width: 55px;
`
export const PDF = styled(Img)`
  height: 100%;
  width: 100%;
`
