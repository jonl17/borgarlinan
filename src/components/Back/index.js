import React from "react"
import { useSelector } from "react-redux"

/** components */
import { Button, Line } from "./Styled"

const Back = () => {
  const history = useSelector(state => state.reducer.history)
  return (
    <Button to={history[history.length - 1]}>
      <Line one></Line>
      <Line two></Line>
    </Button>
  )
}

export default Back
