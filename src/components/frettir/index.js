import React from "react"
import { Container, Title, TopBox } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import { incrementFrettir } from "../../state/actions"

/** components */
import Grid from "./components/grid"
import Filter from "./components/filter"
import Takki from "../takki"
import Footer from "../footer"

const Frettir = () => {
  const device = useSelector(state => state.reducer.device)
  const frettirShowCount = useSelector(state => state.reducer.frettirShowCount)
  const frettirCount = useSelector(state => state.reducer.frettirCount)
  const dispatch = useDispatch()
  return (
    <>
      <Container device={device}>
        <TopBox device={device}>
          <Title device={device} className="bold">
            Fréttasafn
          </Title>
          <Filter></Filter>
        </TopBox>
        <Grid></Grid>
        <Takki
          mobileMove
          display={frettirShowCount >= frettirCount ? "none" : "block"}
          centering
          margins
          click={() => dispatch(incrementFrettir())}
          texti={"Hlaða fleiri"}
        ></Takki>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default Frettir
