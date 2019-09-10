import React from "react"
import Menu from "../components/menu"
import { styles } from "../constants"
import styled, { css } from "styled-components"
import SVG from "../../static/data/svg/skipurit_skjar.svg"
import Footer from "../components/footer"
import { connect } from "react-redux"
import { setDevice } from "../state/actions"

const Body = styled.div``
const Container = styled.div`
  margin: 125px auto 125px auto;
  display: grid;
  width: 900px;
  ${props =>
    props.device === `tablet` &&
    css`
      width: 90%;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      width: 100%;
      margin: 125px auto auto auto;
    `}
`
const Title = styled.h1`
  color: ${styles.Blue};
  font-size: 25px;
  ${props =>
    props.device === `tablet` &&
    css`
      text-align: center;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      text-align: center;
    `}
`
const Paragraph = styled.p`
  color: ${styles.Gray};
  line-height: 160%;
  width: 75%;
  font-size: 19px;
  ${props =>
    props.device === `tablet` &&
    css`
      text-align: center;
      width: 100%;
      box-sizing: border-box;
      padding: 0 10px 0 10px;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      text-align: center;
      width: 100%;
      box-sizing: border-box;
      padding: 0 10px 0 10px;
    `}
`
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 150px;
  display: grid;
  background-color: ${styles.BackGroundGray};
  ${props =>
    props.device === `tablet` &&
    css`
      padding: 10px;
    `}
  ${props =>
    props.device === `mobile` &&
    css`
      padding: 0;
    `}
`
const SVGImage = styled.img`
  width: 75%;
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
  }
  updateDevice() {
    this.props.dispatch(setDevice(window.innerWidth))
    console.log(this.props.device)
  }
  render() {
    const { device } = this.props
    console.log(device)
    return (
      <Body>
        <Menu page={"um-verkefnastofu"}></Menu>
        <Container device={device}>
          <Title device={device} className="bold">
            Verkefnastofa Borgarlínu
          </Title>
          <Paragraph device={device}>
            Verkefnastofa Borgarlínu tók formlega til starfa í júlí 2019 en hún
            sinnir undirbúningi fyrstu framkvæmda Borgarlínu. Verkefni stofunnar
            er að ljúka forhönnun Borgarlínu, yfirfara leiðakerfi
            almenningssamgangna, kostnaðarmeta, vinna að skipulagi og gerð
            umhverfismats þannig að hægt verði að hefja verkhönnun og undirbúa
            gerð útboðsgagna fyrir framkvæmdir.
          </Paragraph>
          <Paragraph device={device}>
            Verkefnastofan var sett á stofn á grundvelli samkomulags milli
            Vegagerðarinnar og sveitarfélaganna á höfuðborgarsvæðinu sem kveður
            á um að Samtök sveitarfélaga á höfuðborgarsvæðinu (SSH) og
            Vegagerðin skipti með sér kostnaði vegna undirbúningsvinnu þar til
            samkomulag hefur náðst um fyrirkomulag og fjármögnun á öllum
            samgöngukerfum á höfuðborgarsvæðinu næstu 15 árin.
          </Paragraph>
        </Container>
        <Container device={device}>
          <Title device={device} className="bold">
            Skipulag Verkefnastofu Borgarlínu
          </Title>
          <Paragraph device={device}>
            Stýrihópur eigenda fer með yfirstjórn Verkefnastofunnar og tryggir
            sterkt eignarhald verkefnisins. Stýrihópurinn tekur lykilákvarðanir
            um umfang og eðli verkefnisins og fylgist með framvindu þess.
            Stýrihópinn skipa Dagur B. Eggertsson (formaður), Rósa
            Guðbjartsdóttir, Ármann Kr. Ólafsson, Sigurbergur Björnsson,
            Bergþóra Þorkelsdóttir og Jónas Snæbjörnsson.
          </Paragraph>
          <Paragraph device={device}>
            Framkvæmdastjórn er í höndum Páls Björgvins Guðmundssonar,
            framkvæmdastjóra SSH, og Bergþóru Þorkelsdóttur, forstjóra
            Vegagerðarinnar. Framkvæmdastjórn tryggir farsæla framvindu
            verkefnisins og tekur afstöðu til mála sem upp kunna að koma og
            snerta framgang þess.
          </Paragraph>
          <Paragraph device={device}>
            Verkefnastjóri ber ábyrgð á stjórnun verkefnisins, heldur utan um
            verkefnateymið og sér um nauðsynlegt upplýsingastreymi til
            framkvæmdastjórnar og stýrihóps og um að miðla upplýsinga til
            verkefnateymis.
          </Paragraph>
          <Paragraph device={device}>
            Verkefnateymi mótar verkefnisáætlun og umfang einstakra
            verkefnisþátta. Fulltrúar í teyminu skipta með sér ábyrgð á einstaka
            þáttum verkefnisins og taka þátt í vinnu starfshópa.
          </Paragraph>
          <Paragraph device={device}>
            Verkefnateymið nýtur stuðnings sérfræðinga Vegagerðarinnar,
            sveitarfélaganna og Strætó bs. auk annarra innlendra og erlendra
            ráðgjafa.
          </Paragraph>
        </Container>
        <ImageContainer device={device}>
          <SVGImage device={device} src={SVG} alt="SVG"></SVGImage>
        </ImageContainer>
        <Footer page={"infopage"}></Footer>
      </Body>
    )
  }
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(UmVerkefnaStofu)
