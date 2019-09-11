import React from "react"
import { Container, Title, Paragraph } from "./Styled"

const AboutBody = ({ title, subject, device }) => {
  return (
    <Container device={device}>
      <Title device={device} className="bold">
        {title}
      </Title>
      {subject.map((item, index) => (
        <Paragraph key={index} device={device}>
          {item}
        </Paragraph>
      ))}
    </Container>
  )
}

export default AboutBody
