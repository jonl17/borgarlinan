import styled from "styled-components"
import { styles } from "../../../constants"

export const Container = styled.div`
  position: relative;
`
export const Name = styled.p`
  color: ${styles.Blue};
  font-size: 20px;
  margin: 0;
`
export const Job = styled.p`
  color: ${styles.Gray};
  font-size: 20px;
  margin: 0;
`
export const Mail = styled.a`
  color: ${styles.Blue};
  font-size: 20px;
  text-decoration: none;
`
export const SubJob = styled.p`
  color: ${styles.Gray};
  position: absolute;
  top: -40px;
  width: 100%;
`
