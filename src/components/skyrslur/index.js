import React from "react"
import { Container, Title } from "./Styled"
import { useSelector } from "react-redux"
import Footer from "../footer"

/** local components */
import Grid from "./components/grid"

const Skyrslur = () => {
  const device = useSelector(state => state.device)
  return (
    <>
      <Container device={device}>
        <Title className="bold">Skýrslur</Title>
        <Grid></Grid>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default Skyrslur
