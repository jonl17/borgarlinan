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
        <Title className="bold">Um verkefnastofu</Title>
        <Paragraph>
          Verkefnastofa Borgarlínu sinnir undirbúningi fyrstu framkvæmda
          Borgarlínu.
        </Paragraph>
        <Paragraph>
          Starfar á grundvelli samkomulags milli Vegagerðarinnar og
          sveitarfélaganna á höfuðborgarsvæðinu. 
        </Paragraph>
        <Paragraph>
          Brúar bil þar til samkomulag hefur náðst um fyrirkomulag og fjármögnun
          á öllum samgöngukerfum á höfuðborgarsvæðinu næstu 15 árin.
        </Paragraph>
      </Container>
      <ImageContainer>
        <SVGImage src={SVG} alt="SVG"></SVGImage>
      </ImageContainer>
    </Body>
  )
}

export default index
