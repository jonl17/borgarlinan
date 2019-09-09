import React from "react"
import Menu from "../components/menu"
import { styles } from "../constants"

import styled from "styled-components"

const Body = styled.div``
const Container = styled.div`
  margin: 125px auto auto auto;
  display: grid;
  width: 900px;
`
const Title = styled.h1`
  color: ${styles.Gray};
`
const Paragraph = styled.p`
  color: ${styles.Gray};
  line-height: 140%;
`

const index = () => {
  return (
    <Body>
      <Menu page={"um-verkefnastofu"}></Menu>
      <Container>
        <Title>Um verkefnastofu</Title>
        <Paragraph>
          Verkefnastofa Borgarlínu sinnir undirbúningi fyrstu framkvæmda
          Borgarlínu. Starfar á grundvelli samkomulags milli Vegagerðarinnar og
          sveitarfélaganna á höfuðborgarsvæðinu.  Brúar bil þar til samkomulag
          hefur náðst um fyrirkomulag og fjármögnun á öllum samgöngukerfum á
          höfuðborgarsvæðinu næstu 15 árin.
        </Paragraph>
      </Container>
    </Body>
  )
}

export default index
