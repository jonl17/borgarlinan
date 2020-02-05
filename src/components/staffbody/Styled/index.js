import styled, { css } from "styled-components"
import { styles } from "../../../constants"
import Img from "gatsby-image"

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  ${props =>
    props.device === `mobile` &&
    css`
      width: 200px;
    `}
`
export const Name = styled.p`
  color: black;
  font-size: 15px;
  margin: 0;
  ${props =>
    props.device === `mobile` &&
    css`
      margin: auto;
    `}
  padding: 16px 0 0 0;
  border-top: 4px solid ${styles.Blue};
`
export const Job = styled.p`
  color: ${styles.Gray};
  font-size: 16px;
  margin: 0;
`
export const ImageContainer = styled.div`
  padding-bottom: 45px;
  height: 200px;
  width: 100%;
`
export const Image = styled(Img)`
  height: 100%;
`
export const Mail = styled.a`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-decoration: none;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(40, 160, 120, 0.6) 0%,
    rgba(0, 50, 10, 0.6) 100%
  );
  transition: 0.1s ease-in-out;
  opacity: 0;
  &&:hover {
    opacity: 1;
  }
`
export const MailText = styled.p`
  color: white;
  position: absolute;
  bottom: 16px;
  font-size: 14px;
`
export const SubJob = styled.p`
  color: ${styles.Blue};
  position: absolute;
  width: 100%;
  top: 200px;
`
