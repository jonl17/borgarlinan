import React from "react"
import Menu from "../components/menu"
import { styles } from "../constants"
import styled from "styled-components"
import SVG from "../../static/data/svg/skipurit_skjar.svg"

const Body = styled.div``
const Container = styled.div`
  margin: 125px auto 125px auto;
  display: grid;
  width: 900px;
`
const Title = styled.h1`
  color: ${styles.Blue};
`
const Paragraph = styled.p`
  color: ${styles.Gray};
  line-height: 140%;
  width: 75%;
  font-size: 19px;
`
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 150px;
  background-color: ${styles.BackGroundGray};
`
const SVGImage = styled.img`
  width: 100%;
`

const index = () => {
  console.log(SVG)
  return (
    <Body>
      <Menu page={"um-verkefnastofu"}></Menu>
      <Container>
        <Title className="bold">Verkefnastofa Borgarlínu</Title>
        <Paragraph>
          Verkefnastofa Borgarlínu tók formlega til starfa í júlí 2019 en hún
          sinnir undirbúningi fyrstu framkvæmda Borgarlínu. Verkefni stofunnar
          er að ljúka forhönnun Borgarlínu, yfirfara leiðakerfi
          almenningssamgangna, kostnaðarmeta, vinna að skipulagi og gerð
          umhverfismats þannig að hægt verði að hefja verkhönnun og undirbúa
          gerð útboðsgagna fyrir framkvæmdir.
        </Paragraph>
        <Paragraph>
          Verkefnastofan var sett á stofn á grundvelli samkomulags milli
          Vegagerðarinnar og sveitarfélaganna á höfuðborgarsvæðinu sem kveður á
          um að Samtök sveitarfélaga á höfuðborgarsvæðinu (SSH) og Vegagerðin
          skipti með sér kostnaði vegna undirbúningsvinnu þar til samkomulag
          hefur náðst um fyrirkomulag og fjármögnun á öllum samgöngukerfum á
          höfuðborgarsvæðinu næstu 15 árin.
        </Paragraph>
      </Container>
      <Container>
        <Title className="bold">Skipulag Verkefnastofu Borgarlínu</Title>
        <Paragraph>
          Stýrihópur eigenda fer með yfirstjórn Verkefnastofunnar og tryggir
          sterkt eignarhald verkefnisins. Stýrihópurinn tekur lykilákvarðanir um
          umfang og eðli verkefnisins og fylgist með framvindu þess. Stýrihópinn
          skipa Dagur B. Eggertsson (formaður), Rósa Guðbjartsdóttir, Ármann Kr.
          Ólafsson, Sigurbergur Björnsson, Bergþóra Þorkelsdóttir og Jónas
          Snæbjörnsson.
        </Paragraph>
        <Paragraph>
          Framkvæmdastjórn er í höndum Páls Björgvins Guðmundssonar,
          framkvæmdastjóra SSH, og Bergþóru Þorkelsdóttur, forstjóra
          Vegagerðarinnar. Framkvæmdastjórn tryggir farsæla framvindu
          verkefnisins og tekur afstöðu til mála sem upp kunna að koma og snerta
          framgang þess.
        </Paragraph>
        <Paragraph>
          Verkefnastjóri ber ábyrgð á stjórnun verkefnisins, heldur utan um
          verkefnateymið og sér um nauðsynlegt upplýsingastreymi til
          framkvæmdastjórnar og stýrihóps og um að miðla upplýsinga til
          verkefnateymis.
        </Paragraph>
        <Paragraph>
          Verkefnateymi mótar verkefnisáætlun og umfang einstakra
          verkefnisþátta. Fulltrúar í teyminu skipta með sér ábyrgð á einstaka
          þáttum verkefnisins og taka þátt í vinnu starfshópa.
        </Paragraph>
        <Paragraph>
          Verkefnateymið nýtur stuðnings sérfræðinga Vegagerðarinnar,
          sveitarfélaganna og Strætó bs. auk annarra innlendra og erlendra
          ráðgjafa.
        </Paragraph>
      </Container>
      <ImageContainer>
        <SVGImage src={SVG} alt="SVG"></SVGImage>
      </ImageContainer>
    </Body>
  )
}

export default index
