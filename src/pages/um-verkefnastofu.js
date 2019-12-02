import React from "react"
import SVG from "../../static/data/svg/skipurit_skjar.svg"
import Footer from "../components/footer"
import { connect } from "react-redux"
import { setDevice } from "../state/actions"
import StaffSection from "../components/staffsection"
import { graphql } from "gatsby"
import AboutBody from "../components/aboutbody"
import SchemaData from "../components/schemadata"
import {
  Body,
  Background,
  ImageContainer,
  SVGImage,
} from "../components/UmVerkefnastofuStyled"

class UmVerkefnaStofu extends React.Component {
  constructor(props) {
    super(props)
    this.updateDevice = this.updateDevice.bind(this)
  }
  componentDidMount() {
    this.updateDevice()
    window.addEventListener("resize", this.updateDevice)
  }
  updateDevice() {
    if (this.bodyRef !== null) {
      this.props.dispatch(setDevice(this.bodyRef.clientWidth))
    }
  }
  render() {
    const {
      device,
      data: {
        markdownRemark: { frontmatter, html },
      },
    } = this.props
    return (
      <Body ref={bodyRef => (this.bodyRef = bodyRef)}>
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
        <Footer page={"infopage"}></Footer>
      </Body>
    )
  }
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
