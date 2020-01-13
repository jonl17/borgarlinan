import styled, { css } from "styled-components"

export const Container = styled.div`
  position: absolute;
  right: 150px;
  top: 28px;
  ${props =>
    props.device === `mobile` &&
    css`
      right: 125px;
    `}
  &&:hover {
    ${props =>
      props.device !== `mobile` &&
      css`
        /** hover effects only in browser */
        cursor: pointer;
      `}
  }
`
