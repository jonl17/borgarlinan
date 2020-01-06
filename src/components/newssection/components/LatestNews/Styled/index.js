import styled, { css } from "styled-components"

const ContainerStyle = css`
  display: grid;

  grid-gap: 30px;
  margin: 0;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
`
export const LatestNewsContainer = styled.div`
  ${ContainerStyle};
  ${props =>
    props.device === `mobile` &&
    css`
      margin-bottom: 75px;
    `}
`
