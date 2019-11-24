import React from "react"
import { Container, Title, Content } from "./Styled"
import "./index.css"

const AboutBody = ({ title, subject, device }) => {
  return (
    <Container device={device}>
      <Title device={device} className="bold">
        {title}
      </Title>
      <Content
        className="verkefnastofa-borgarlinu-content"
        dangerouslySetInnerHTML={{ __html: subject }}
      ></Content>
    </Container>
  )
}

export default AboutBody
