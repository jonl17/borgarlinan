import React from "react"
import { Box, Name, BTNContainer } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import {
  setSkyrslurFilter,
  triggerSkyrsluFade,
} from "../../../../state/actions"

/** components */
import Takki from "../../../takki"

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
        <Takki
          selected={skyrslurFilterBy === `date` ? true : false}
          texti={"Dagsetningu"}
          click={() => dispatches(dispatch, "date")}
        ></Takki>
        {/* by title */}
        <Takki
          selected={skyrslurFilterBy === `title` ? true : false}
          texti={"Nafni"}
          click={() => dispatches(dispatch, "title")}
        ></Takki>
      </BTNContainer>
    </Box>
  )
}

export default Filter
