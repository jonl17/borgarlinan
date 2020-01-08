import styled, { css } from "styled-components"
import { styles } from "../../../../../../../constants"

const BoxStyle = css`
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
  transition: 0.2s ease-in-out;
  box-sizing: border-box;
`
/** scaling */
export const Box = styled.div`
  ${BoxStyle};
  ${props =>
    props.device === `mobile` &&
    css`
      height: 400px;
    `}
`

export const Content = styled.div`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 25px;
  margin-bottom: 25px;
`
