import React from "react"
import { Container, Name, Job, SubJob, Mail } from "./Styled"
import { connect } from "react-redux"

const index = ({
  staff: {
    frontmatter: { title, job, subjob, email, englishJob, subjobEnglish },
  },
  device,
  language,
}) => {
  return (
    <Container>
      <Name className="bold">{title}</Name>
      <Job>{language === `icelandic` ? job : englishJob}</Job>
      <Mail href={"mailto:" + email}>{email}</Mail>
      {subjob !== null ? (
        <SubJob>{language === `icelandic` ? subjob : subjobEnglish}</SubJob>
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
