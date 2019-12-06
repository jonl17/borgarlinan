import React from "react"
import { Button, Container } from "./Styled"

const Takki = ({ texti, click, box }) => {
  return (
    <Container>
      <Button onClick={click} className="bold">
        {texti}
      </Button>
    </Container>
  )
}

export default Takki
