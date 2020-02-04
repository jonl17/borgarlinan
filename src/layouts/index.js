import React, { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { SET_DEVICE, GET_HEIGHT, SET_LINEHEIGHT, START } from "../state/actions"

/** components */
import { Body } from "./Styled"
import { GlobCSS } from "../components/globalstyles"
import Menu from "../components/menu"
import SEO from "../components/seo"

const Layout = ({ children }) => {
  const bodyElement = useRef()
  const dispatch = useDispatch()
  const started = useSelector(state => state.reducer.started)
  const device = useSelector(state => state.reducer.device)

  const callBack = () => {
    dispatch({
      type: SET_LINEHEIGHT,
      height: document.scrollingElement.scrollTop,
    })
    if (!started) {
      dispatch({ type: START })
    }
  }

  const deviceDispatches = () => {
    dispatch({ type: SET_DEVICE, width: bodyElement.current.clientWidth })
    dispatch({ type: GET_HEIGHT, height: bodyElement.current.clientHeight })
  }

  useEffect(() => {
    deviceDispatches()
    window.addEventListener("resize", deviceDispatches)
    window.addEventListener("scroll", callBack)
    return () => {
      window.removeEventListener("resize", deviceDispatches)
      window.removeEventListener("scroll", callBack)
    }
  })

  return (
    <>
      <SEO></SEO>
      <GlobCSS></GlobCSS>
      <Body device={device} ref={bodyElement}>
        <Menu></Menu>
        {children}
      </Body>
    </>
  )
}

export default Layout
