import styled from "styled-components"
import { styles, sizes } from "../../../constants"

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  display: grid;
  z-index: 4;
`
export const TitleContainer = styled.div`
  height: ${props =>
    props.height === undefined ? "0px" : props.height + "px"};
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -150px;
  padding-left: 25px;
  border-left: 4px solid ${styles.Blue};
  transition: 0.1s;
  width: 900px;
  margin-left: -445px;
`
export const Title = styled.h1`
  margin: 0 auto;
  font-size: 90px;
  color: white;
`

/* tablet */

export const TitleContainerTablet = styled(TitleContainer)`
  width: ${sizes.tabletwidth + "px"};
  margin-left: -300px;
`
