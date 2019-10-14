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
          Borgarlína
        </Item>
      )}
    </Container>
  )
}

export default Footer
