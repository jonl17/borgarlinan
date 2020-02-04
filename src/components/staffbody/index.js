import React from "react"
import { connect } from "react-redux"

/** components */
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

const index = ({
  staff: {
    title: nafn,
    starfslysing,
    starfslysing_enska,
    netfang,
    verkefnastjori,
    portrait_mynd: {
      childImageSharp: { fluid },
    },
  },
  device,
  language,
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image fluid={fluid}></Image>
      </ImageContainer>
      <div>
        <Name device={device} className="bold">
          {nafn}
        </Name>
        <Job>
          {language === `icelandic` ? starfslysing : starfslysing_enska}
        </Job>
        <Mail device={device} target="_blank" href={"mailto:" + netfang}>
          <MailText className="bold">{netfang}</MailText>
        </Mail>

        {verkefnastjori ? (
          <SubJob className="bold">
            {language === `icelandic` ? `Verkefnastjóri` : `Project Manager`}
          </SubJob>
        ) : (
          <></>
        )}
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
  language: state.reducer.language,
})

export default connect(mapStateToProps)(index)
