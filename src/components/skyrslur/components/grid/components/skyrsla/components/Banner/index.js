import React from "react"
import { useSelector } from "react-redux"

/** components */
import { Container, Title, Date } from "./Styled"

const Banner = ({ title, date }) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Container>
      <Date>{date}</Date>
      <Title device={device} className="bold">
        {title}
      </Title>
    </Container>
  )
}

export default Banner
