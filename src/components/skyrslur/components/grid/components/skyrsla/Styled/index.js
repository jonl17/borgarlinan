import styled, { css } from "styled-components"
import { styles } from "../../../../../../../constants"
import Img from "gatsby-image"

const BoxStyle = css`
  height: 200px;
  width: auto;
  background: ${styles.BackGroundGray};
  overflow: hidden;
  display: -webkit-box;
  padding: 25px 25px 0 25px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
`
/** scaling */
export const Box = styled.div`
  ${BoxStyle};
  ${props =>
    props.device === `mobile` &&
    css`
      height: 350px;
    `}
`

export const Content = styled.div`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 15px;
  margin-left: 75px;
  ul {
    list-style: square;
    padding-left: 15px;
  }
  ul > li {
    padding-bottom: 15px;
  }
  @media only screen and (max-width: 750px) {
    /* device === mobile */
    * {
      font-size: 15px !important;
    }
  }
  * {
    color: gray;
    line-height: 160%;
    font-size: 15px;
    margin: 0;
    z-index: 8;
  }
`
export const ImageContainer = styled.a`
  height: 55px;
  width: 55px;
  position: absolute;
  top: 65px;
`
export const PDF = styled(Img)`
  height: 100%;
  width: 100%;
`
