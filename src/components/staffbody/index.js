import React from "react"
import { Container, Name, Job, SubJob, Mail } from "./Styled"
import { connect } from "react-redux"

const index = ({
  staff: { title: nafn, starfslysing, netfang, verkefnastjori },
}) => {
  return (
    <Container>
      <Name className="bold">{nafn}</Name>
      <Job>{starfslysing}</Job>
      <Mail href={"mailto:" + netfang}>{netfang}</Mail>
      {verkefnastjori ? <SubJob>{"Verkefnastjóri"}</SubJob> : <></>}
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
  language: state.reducer.language,
})

export default connect(mapStateToProps)(index)
