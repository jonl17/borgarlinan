import React from "react"
import { Container, Item } from "./Styled"

const Footer = ({ page }) => {
  return (
    <Container>
      {page === "frontpage" ? (
        <Item className="bold" to="/um-verkefnastofu">
          Um verkefnastofu
        </Item>
      ) : (
        <Item className="bold" to="/">
          Borgarlínan
        </Item>
      )}
    </Container>
  )
}

export default Footer
