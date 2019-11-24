import React from "react"
import { Body, Title, Paragraph, Content } from "./Styled"

const SchemaBody = ({ schemas: { title, texti } }) => {
  return (
    <Body>
      <Paragraph>
        <Title className="bold">{title} </Title>
        <Content dangerouslySetInnerHTML={{ __html: texti }}></Content>
      </Paragraph>
    </Body>
  )
}

export default SchemaBody
