import React from "react"
import { Container, Title, TopBox } from "./Styled"
import { useSelector } from "react-redux"
import Footer from "../footer"

/** local components */
import Grid from "./components/grid"
import Filter from "./components/filter"

const Skyrslur = () => {
  const device = useSelector(state => state.reducer.device)
  return (
    <>
      <Container device={device}>
        <TopBox>
          <Title device={device} className="bold">
            Skýrslur
          </Title>
          <Filter></Filter>
        </TopBox>
        <Grid></Grid>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default Skyrslur
