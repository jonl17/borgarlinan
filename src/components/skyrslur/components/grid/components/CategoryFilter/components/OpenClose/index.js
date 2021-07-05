import React from "react"
import { useSelector } from "react-redux"

/** components */
import { Button, Line } from "./Styled"

const OpenClose = () => {
  const skyrslurCategoryFilterOpen = useSelector(
    state => state.reducer.skyrslurCategoryFilterOpen
  )
  return (
    <Button open={skyrslurCategoryFilterOpen}>
      <Line open={skyrslurCategoryFilterOpen} one></Line>
      <Line open={skyrslurCategoryFilterOpen} two></Line>
    </Button>
  )
}

export default OpenClose
