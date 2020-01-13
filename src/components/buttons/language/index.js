import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setLanguage } from "../../../state/actions"

/** components */
import { Container } from "./Styled"

const Language = ({ children }) => {
  const device = useSelector(state => state.reducer.device)
  const dispatch = useDispatch()
  return (
    <Container onClick={() => dispatch(setLanguage())} device={device}>
      {children}
    </Container>
  )
}

export default Language
