import styled, { css } from "styled-components"
import { styles } from "../../../constants"
import Img from "gatsby-image"

export const Container = styled.div`
  position: relative;
`
export const Name = styled.p`
  color: black;
  font-size: 17px;
  margin: 0;
  ${props =>
    props.device === `mobile` &&
    css`
      margin: auto;
    `}
  padding: 10px 0 0 0;
  max-width: 200px;
  border-top: 4px solid ${styles.Blue};
`
export const Job = styled.p`
  color: ${styles.Gray};
  font-size: 16px;
  margin: 0;
`
export const Mail = styled.a`
  color: ${styles.Blue};
  font-size: 16px;
  text-decoration: none;
`
export const SubJob = styled.p`
  color: ${styles.Blue};
  position: absolute;
  top: 192px;
  width: 100%;
`
export const ImageContainer = styled.div`
  padding-bottom: 25px;
`
export const Image = styled(Img)``
