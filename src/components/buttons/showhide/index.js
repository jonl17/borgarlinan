import React from "react"
import { Container, Line } from "./Styled"

const openSesame = minimize => {
  if (minimize) return "close"
  return "open"
}

const ShowHide = ({ minimize, onClick }) => {
  return (
    <Container onClick={onClick()}>
      <Line></Line>
      <Line status={openSesame(minimize)} minimize={minimize}></Line>
    </Container>
  )
}

export default ShowHide
