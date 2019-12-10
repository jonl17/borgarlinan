import React from "react"
import { Button, Container } from "./Styled"

const Takki = ({ texti, click, selected, centering, margins, display }) => {
  return (
    <Container
      display={display}
      centering={centering ? "center" : ""}
      margins={margins ? "margins" : ""}
      onClick={click}
      selected={selected}
    >
      <Button selected={selected} className="bold">
        {texti}
      </Button>
    </Container>
  )
}

export default Takki
