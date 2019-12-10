import React from "react"
import { BTN, Box, Name, BTNContainer, Text } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import { setSkyrslurFilter } from "../../../../state/actions"

const Filter = () => {
  const skyrslurFilterBy = useSelector(state => state.reducer.skyrslurFilterBy)
  const dispatch = useDispatch()
  return (
    <Box>
      <Name>Raða eftir: </Name>
      <BTNContainer>
        {/* by date */}
        <BTN
          onClick={() => dispatch(setSkyrslurFilter("date"))}
          selected={skyrslurFilterBy === `date` ? true : false}
        >
          <Text selected={skyrslurFilterBy === `date` ? true : false}>
            Dagsetningu
          </Text>
        </BTN>
        {/* by title */}
        <BTN
          onClick={() => dispatch(setSkyrslurFilter("title"))}
          selected={skyrslurFilterBy === `title` ? true : false}
        >
          <Text selected={skyrslurFilterBy === `title` ? true : false}>
            Nafni
          </Text>
        </BTN>
      </BTNContainer>
    </Box>
  )
}

export default Filter
