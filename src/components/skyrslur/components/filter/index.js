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
  const language = useSelector(state => state.reducer.language)
  const dispatch = useDispatch()
  return (
    <Box>
      <Name>{language === `icelandic` ? "Raða eftir" : "Order by"} </Name>
      <BTNContainer>
        {/* by date */}
        <Takki
          selected={skyrslurFilterBy === `date` ? true : false}
          texti={language === `icelandic` ? "Dagsetningu" : "Date"}
          click={() => dispatches(dispatch, "date")}
        ></Takki>
        {/* by title */}
        <Takki
          selected={skyrslurFilterBy === `title` ? true : false}
          texti={language === `icelandic` ? "Nafni" : "Name"}
          click={() => dispatches(dispatch, "title")}
        ></Takki>
      </BTNContainer>
    </Box>
  )
}

export default Filter
