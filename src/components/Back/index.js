import React from "react"
import { Button, Line } from "./Styled"

const Back = ({ slug }) => {
  return (
    <Button to={slug}>
      <Line one></Line>
      <Line two></Line>
    </Button>
  )
}

export default Back
