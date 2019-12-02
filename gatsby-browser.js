import React from "react"
import { Provider } from "react-redux"
import { createStore as createBorgarlinanStore } from "redux"
import rootReducer from "./src/state/index"
import "./src/fonts/font.css"

const createStore = () => createBorgarlinanStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return <Provider store={createStore()}>{element}</Provider>
}
