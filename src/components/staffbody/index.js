import React from "react"
import { Container, Name, Job, SubJob, Mail } from "./Styled"
import { connect } from "react-redux"

const index = ({
  staff: {
    frontmatter: { title, job, subjob, email },
  },
  device,
}) => {
  return (
    <Container>
      <Name className="bold">{title}</Name>
      <Job>{job}</Job>
      <Mail href={"mailto:" + email}>{email}</Mail>
      {subjob !== null ? <SubJob>{subjob}</SubJob> : <></>}
    </Container>
  )
}

const mapStateToProps = state => ({
  device: state.reducer.device,
})

export default connect(mapStateToProps)(index)
