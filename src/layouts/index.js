import React from "react"
import { LayoutContainer } from "./Styled"
import { GlobCSS } from "../components/globalstyles"
import Menu from "../components/menu"
import SEO from "../components/seo"

const Layout = ({ children }) => {
  return (
    <LayoutContainer id="layout-container">
      <GlobCSS></GlobCSS>
      <SEO></SEO>
      <Menu></Menu>
      {children}
    </LayoutContainer>
  )
}

export default Layout
