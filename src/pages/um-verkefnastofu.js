import React from "react"
import { connect } from "react-redux"
import { graphql } from "gatsby"
import { renderHTML } from "../methods"

/** components */
import SVG from "../../static/svg/skipurit_skjar.svg"
import StaffSection from "../components/staffsection"
import AboutBody from "../components/aboutbody"
import SchemaData from "../components/schemadata"
import Footer from "../components/footer"
import {
  Background,
  ImageContainer,
  SVGImage,
} from "../components/UmVerkefnastofuStyled"

const UmVerkefnaStofu = ({
  device,
  language,
  location: { pathname },
  data: {
    markdownRemark: {
      frontmatter: { title, title_en },
      html,
    },
  },
}) => {
  let splitLanguage = renderHTML(html)
  return (
    <>
      <AboutBody
        device={device}
        title={language === `icelandic` ? title : title_en}
        subject={language === `icelandic` ? splitLanguage[0] : splitLanguage[1]}
      ></AboutBody>
      <StaffSection></StaffSection>
      <Background>
        <ImageContainer device={device}>
          <SVGImage device={device} src={SVG} alt="SVG"></SVGImage>
        </ImageContainer>
      </Background>
      <SchemaData></SchemaData>
      <Footer page={pathname}></Footer>
    </>
  )
}

export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/verkefnastofa_borgarlinu/" }) {
      html
      frontmatter {
        title
        title_en
      }
    }
  }
`
const mapStateToProps = state => ({
  device: state.reducer.device,
  language: state.reducer.language,
})

export default connect(mapStateToProps)(UmVerkefnaStofu)
