import React from "react"
import "./index.css"
import { useSelector } from "react-redux"
import { formatDate } from "../../../../../../methods"
import slugify from "slugify"

/** components */
import { Box, Content } from "./Styled"
import Takki from "../../../../../takki"
import Banner from "./components/Banner"

const Frett = ({ frett: { frontmatter, html } }) => {
  const device = useSelector(state => state.reducer.device)
  return (
    <Box device={device}>
      <Banner
        title={frontmatter.title}
        date={formatDate(frontmatter.dagsetning.slice(0, 10))}
      ></Banner>
      <Content
        className="frett-content"
        dangerouslySetInnerHTML={{ __html: html }}
      ></Content>
      <Takki
        link
        slug={`/frettir/` + slugify(frontmatter.title)}
        texti={"Lesa meira"}
        basic
      ></Takki>
    </Box>
  )
}

export default Frett
