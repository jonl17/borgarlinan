import React from "react"
import Menu from "../components/menu"
import { styles } from "../constants"
import styled, { css } from "styled-components"
import SVG from "../../static/data/svg/skipurit_skjar.svg"
import Footer from "../components/footer"
import { connect } from "react-redux"
import { setDevice } from "../state/actions"
import StaffSection from "../components/staffsection"
import { graphql } from "gatsby"
import AboutBody from "../components/aboutbody"
import Burger from "../components/burger"
import BurgerMenu from "../components/burgerMenu"
import { triggerBurgerMenu } from "../state/actions"
import SchemaData from "../components/schemadata"

const Body = styled.div``

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${styles.BackGroundGray};
`

const ImageContainer = styled.div`
  height: 100%;
  width: 1000px;
  margin: auto;
  box-sizing: border-box;
  padding: 100px 0 100px 0;
  display: grid;
  background-color: ${styles.BackGroundGray};
  ${props =>
    props.device === `tablet` &&
    css`
      padding: 100px 0 100px 0;
      width: 95%;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      padding: 100px 0 100px 0;
      width: 100%;
    `}
`
const SVGImage = styled.img`
  width: 100%;
  margin: auto;
  ${props =>
    props.device === `mobile` &&
    css`
      width: 100%;
    `}
`

class UmVerkefnaStofu extends React.Component {
  constructor(props) {
    super(props)
    this.updateDevice = this.updateDevice.bind(this)
  }
  componentDidMount() {
    this.updateDevice()
    window.addEventListener("resize", this.updateDevice)
    if (this.props.showBurgerMenu) {
      this.props.dispatch(triggerBurgerMenu())
    }
  }
  updateDevice() {
    this.props.dispatch(setDevice(this.bodyRef.clientWidth))
  }
  render() {
    const {
      device,
      language,
      data: {
        wordpressPage: {
          acf: {
            fyrirsogn,
            fyrirsogn_enska,
            samfelldur_texti,
            samfelldur_texti_enska,
          },
        },
      },
    } = this.props
    return (
      <Body ref={bodyRef => (this.bodyRef = bodyRef)}>
        <Burger></Burger>
        <BurgerMenu></BurgerMenu>
        <Menu page={"um-verkefnastofu"}></Menu>
        <AboutBody
          device={device}
          title={language === `icelandic` ? fyrirsogn : fyrirsogn_enska}
          subject={
            language === `icelandic` ? samfelldur_texti : samfelldur_texti_enska
          }
        ></AboutBody>

        <Background>
          <ImageContainer device={device}>
            <SVGImage device={device} src={SVG} alt="SVG"></SVGImage>
          </ImageContainer>
        </Background>
        <SchemaData></SchemaData>
        <StaffSection></StaffSection>
        <Footer page={"infopage"}></Footer>
      </Body>
    )
  }
}

export const query = graphql`
  query {
    wordpressPage(title: { eq: "Um Verkefnastofu" }) {
      acf {
        fyrirsogn
        fyrirsogn_enska
        samfelldur_texti {
          malsgrein
        }
        samfelldur_texti_enska {
          malsgrein
        }
      }
    }
  }
`
const mapStateToProps = state => ({
  device: state.reducer.device,
  language: state.reducer.language,
  showBurgerMenu: state.reducer.showBurgerMenu,
})

export default connect(mapStateToProps)(UmVerkefnaStofu)
