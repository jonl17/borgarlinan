import React from "react"
import { Body, Title, Paragraph } from "./Styled"

const SchemaBody = ({ schemas }) => {
  return (
    <Body>
      <Paragraph>
        <Title className="bold">{schemas.frontmatter.title}</Title>
        {schemas.frontmatter.text}
      </Paragraph>
    </Body>
  )
}

export default SchemaBody
