import React from "react"
import { Container, Title, TopBox } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import { incrementSkyrslur } from "../../state/actions"

/** components */
import Grid from "./components/grid"
import Filter from "./components/filter"
import Takki from "../takki"
import Footer from "../footer"

const Skyrslur = () => {
  const device = useSelector(state => state.reducer.device)
  const skyrslurShowCount = useSelector(
    state => state.reducer.skyrslurShowCount
  )
  const skyrslurCount = useSelector(state => state.reducer.skyrslurCount)
  const dispatch = useDispatch()
  return (
    <>
      <Container device={device}>
        <TopBox device={device}>
          <Title device={device} className="bold">
            Skýrslur
          </Title>
          <Filter></Filter>
        </TopBox>
        <Grid></Grid>
        <Takki
          mobileMove
          display={skyrslurShowCount >= skyrslurCount ? "none" : "block"}
          centering
          margins
          click={() => dispatch(incrementSkyrslur())}
          texti={"Hlaða fleiri"}
        ></Takki>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default Skyrslur
