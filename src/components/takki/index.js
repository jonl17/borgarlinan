import React from "react"
import { Button, Text } from "./Styled"

const Takki = ({ texti, click, box }) => {
  return (
    <Text onClick={click} className="bold">
      {texti}
    </Text>
  )
}

export default Takki
