import React from "react"
import { Container, Name, Job, SubJob, Mail } from "./Styled"
import { connect } from "react-redux"

const index = ({
  staff: {
    acf: { nafn, starf, verkefnastjori, netfang, starf_enska },
  },
  language,
}) => {
  return (
    <Container>
      <Name className="bold">{nafn}</Name>
      <Job>{language === `icelandic` ? starf : starf_enska}</Job>
      <Mail href={"mailto:" + netfang}>{netfang}</Mail>
      {verkefnastjori ? (
        <SubJob>
          {language === `icelandic` ? "Verkefnastjóri" : "Project Manager"}
        </SubJob>
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
