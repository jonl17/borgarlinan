import React from "react"
import { Container, Title, TopBox } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import { incrementSkyrslur } from "../../state/actions"

/** components */
import Grid from "./components/grid"
import Filter from "./components/filter"
import Takki from "../takki"
import Footer from "../footer"

// AKA útgefið efni
const Skyrslur = () => {
  const device = useSelector(state => state.reducer.device)
  const skyrslurShowCount = useSelector(
    state => state.reducer.skyrslurShowCount
  )
  const skyrslurCount = useSelector(state => state.reducer.skyrslurCount)
  const dispatch = useDispatch()
  const language = useSelector(state => state.reducer.language)
  return (
    <>
      <Container device={device}>
        <TopBox device={device}>
          <Title device={device} className="bold">
            {language === `icelandic` ? "Útgefið efni" : "Archive"}
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
