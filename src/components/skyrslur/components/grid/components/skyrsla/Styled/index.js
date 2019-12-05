import styled from "styled-components"
import { styles } from "../../../../../../../constants"
import Img from "gatsby-image"

export const Box = styled.div`
  height: 350px;
  width: 500px;
  background: ${styles.BackGroundGray};
  overflow: hidden;
  display: -webkit-box;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
`
export const Banner = styled.div``
export const Title = styled.p`
  color: ${styles.Blue};
  font-size: 25px;
  margin: 0;
`
export const Date = styled.p`
  color: ${styles.Gray};
  margin-bottom: 10px;
`
export const Content = styled.div`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  overflow: hidden;
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
