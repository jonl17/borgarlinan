import React from "react"
import { Body, Title, Paragraph } from "./Styled"

const SchemaBody = ({
  schemas: {
    acf: { titill, lysing },
  },
}) => {
  return (
    <Body>
      <Paragraph>
        <Title className="bold">{titill} </Title>
        {lysing}
      </Paragraph>
    </Body>
  )
}

export default SchemaBody
