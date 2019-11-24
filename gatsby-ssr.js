import React from "react"
import { Provider } from "react-redux"
import { createStore as createBorgarlinanStore } from "redux"
import rootReducer from "./src/state/index"
import { GlobCSS } from "./src/components/globalstyles"
import "./src/fonts/font.css"
import Setter from "./src/components/setter"

const createStore = () => createBorgarlinanStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>
      <Setter dimension={window.innerWidth}></Setter>
      <GlobCSS></GlobCSS>
      {element}
    </Provider>
  )
}
