import React from "react"
import { BTN, Box, Name, BTNContainer, Text } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import {
  setSkyrslurFilter,
  triggerSkyrsluFade,
} from "../../../../state/actions"

const dispatches = (dispatch, type) => {
  dispatch(setSkyrslurFilter(type))
  dispatch(triggerSkyrsluFade())
}

const Filter = () => {
  const skyrslurFilterBy = useSelector(state => state.reducer.skyrslurFilterBy)
  const dispatch = useDispatch()
  return (
    <Box>
      <Name>Raða eftir: </Name>
      <BTNContainer>
        {/* by date */}
        <BTN
          onClick={() => dispatches(dispatch, "date")}
          selected={skyrslurFilterBy === `date` ? true : false}
        >
          <Text
            className="bold"
            selected={skyrslurFilterBy === `date` ? true : false}
          >
            Dagsetningu
          </Text>
        </BTN>
        {/* by title */}
        <BTN
          onClick={() => dispatches(dispatch, "title")}
          selected={skyrslurFilterBy === `title` ? true : false}
        >
          <Text
            className="bold"
            selected={skyrslurFilterBy === `title` ? true : false}
          >
            Nafni
          </Text>
        </BTN>
      </BTNContainer>
    </Box>
  )
}

export default Filter
