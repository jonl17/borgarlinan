import styled from "styled-components"
import { styles } from "../../../../../../../constants"
import Img from "gatsby-image"

export const Box = styled.div`
  height: 330px;
  width: auto;
  background: ${styles.BackGroundGray};
  overflow: hidden;
  display: -webkit-box;
  padding: 25px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`

export const Content = styled.div`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 25px;
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
