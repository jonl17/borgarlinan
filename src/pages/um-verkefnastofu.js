import React from "react"
import SVG from "../../static/svg/skipurit_skjar.svg"
import { connect } from "react-redux"
import StaffSection from "../components/staffsection"
import { graphql } from "gatsby"
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
  location: { pathname },
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  return (
    <>
      <AboutBody
        device={device}
        title={frontmatter.title}
        subject={html}
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
      }
    }
  }
`
const mapStateToProps = state => ({
  device: state.reducer.device,
  language: state.reducer.language,
})

export default connect(mapStateToProps)(UmVerkefnaStofu)
