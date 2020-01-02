import React from "react"
import { Button, Container, LinkContainer } from "./Styled"
import { useSelector } from "react-redux"

const Takki = ({
  texti,
  click,
  selected,
  centering,
  margins,
  display,
  link,
  slug,
  mobileMove,
  basic,
}) => {
  const device = useSelector(state => state.reducer.device)
  return link ? (
    <LinkContainer /** LINK */
      to={slug}
      display={display}
      centering={centering ? "center" : ""}
      margins={margins ? "margins" : ""}
      onClick={click}
      selected={selected}
      basic={basic ? "basic" : ""}
    >
      <Button
        basic={basic ? "basic" : ""}
        device={device}
        selected={selected}
        className="bold"
      >
        {texti}
      </Button>
    </LinkContainer>
  ) : (
    <Container /** Regular BTN */
      device={device}
      mobileMove={mobileMove ? "move" : ""}
      display={display}
      centering={centering ? "center" : ""}
      margins={margins ? "margins" : ""}
      onClick={click}
      selected={selected}
    >
      <Button device={device} selected={selected} className="bold">
        {texti}
      </Button>
    </Container>
  )
}

export default Takki
