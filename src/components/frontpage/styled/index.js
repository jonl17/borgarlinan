import styled from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  display: grid;
  z-index: 4;
`
export const TitleContainer = styled.div`
  height: ${props => (props.started ? props.height : "400px")};
  width: 900px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -445px;
  margin-top: -150px;
  padding-left: 25px;
  border-left: 4px solid ${styles.Blue};
  transition: 5s;
`
export const Title = styled.h1`
  margin: 0 auto;
  font-size: 100px;
  color: white;
`
