import React from "react"
import { Container, Title, Date } from "./Styled"

const Banner = ({ title, date }) => {
  return (
    <Container>
      <Date>{date}</Date>
      <Title className="bold">{title}</Title>
    </Container>
  )
}

export default Banner
