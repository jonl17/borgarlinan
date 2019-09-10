import styled from "styled-components"
import { styles } from "../../../constants"

export const PageContainer = styled.div`
  width: 100%;
  background-color: ${styles.BackGroundGray};
`
export const Container = styled.div`
  height: 100%;
  width: 900px;
  margin: 125px auto auto auto;
  padding-top: 150px;
  padding-bottom: 150px;
`
export const Title = styled.p`
  color: ${styles.Blue};
  font-size: 26px;
  font-weight: bold;
  padding-bottom: 15px;
  background-color: ${styles.BackGroundGray};
  z-index: 8;
  margin: 25px 0 25px 0;
`
/* tablet */
export const ContainerTablet = styled(Container)`
  width: 100%;
  margin: 50px auto auto auto;
  padding-top: 75px;
  padding-bottom: 75px;
`
