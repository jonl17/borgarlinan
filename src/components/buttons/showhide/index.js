import React from "react"
import { Container, Line } from "./Styled"

const ShowHide = ({ minimize, onClick }) => {
  return (
    <Container onClick={onClick()}>
      <Line></Line>
      <Line minimize={minimize}></Line>
    </Container>
  )
}

export default ShowHide
