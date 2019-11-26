import React from "react"
import {
  Container,
  Name,
  Job,
  SubJob,
  Mail,
  MailText,
  ImageContainer,
  Image,
} from "./Styled"
import { connect } from "react-redux"

const index = ({
  staff: {
    title: nafn,
    starfslysing,
    netfang,
    verkefnastjori,
    portrait_mynd: {
      childImageSharp: { fixed },
    },
  },
  device,
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image fixed={fixed}></Image>
      </ImageContainer>
      <Name device={device} className="bold">
        {nafn}
      </Name>
      <Job>{starfslysing}</Job>
      <Mail device={device} target="_blank" href={"mailto:" + netfang}>
        <MailText className="bold">{netfang}</MailText>
      </Mail>

      {verkefnastjori ? (
        <SubJob className="bold">{"Verkefnastjóri"}</SubJob>
      ) : (
        <></>
      )}
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
  language: state.reducer.language,
})

export default connect(mapStateToProps)(index)
