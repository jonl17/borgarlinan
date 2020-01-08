import React from "react"
import { Box, Name, BTNContainer } from "./Styled"
import { useSelector, useDispatch } from "react-redux"
import { setFrettirFilter, triggerFrettirFade } from "../../../../state/actions"

/** components */
import Takki from "../../../takki"

const dispatches = (dispatch, type) => {
  dispatch(setFrettirFilter(type))
  dispatch(triggerFrettirFade())
}

const Filter = () => {
  const frettirFilterBy = useSelector(state => state.reducer.frettirFilterBy)
  const dispatch = useDispatch()
  return (
    <Box>
      <Name>Raða eftir: </Name>
      <BTNContainer>
        {/* by date */}
        <Takki
          selected={frettirFilterBy === `date` ? true : false}
          texti={"Dagsetningu"}
          click={() => dispatches(dispatch, "date")}
        ></Takki>
        {/* by title */}
        <Takki
          selected={frettirFilterBy === `title` ? true : false}
          texti={"Nafni"}
          click={() => dispatches(dispatch, "title")}
        ></Takki>
      </BTNContainer>
    </Box>
  )
}

export default Filter
