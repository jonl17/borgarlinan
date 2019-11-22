import React from "react"
import {
  Body,
  Group,
  Title,
  Texti,
  More,
  LineBlock,
  Line,
  Image,
  ContentContainer,
  ImageContainer,
  Caption,
} from "./Styled"
import { connect } from "react-redux"

class QandABody extends React.Component {
  render() {
    const {
      item: { frontmatter, html },
      index,
      language,
      device,
    } = this.props
    return (
      <Body device={device} key={index}>
        <Group>
          <Title device={device} className="bold">
            {index + 1 + ". "}
            {language === "icelandic"
              ? frontmatter.title
              : frontmatter.title_enska}
          </Title>
        </Group>
        <ContentContainer device={device}>
          <Texti dangerouslySetInnerHTML={{ __html: html }}></Texti>
          <ImageContainer device={device}>
            <Image fluid={frontmatter.mynd.childImageSharp.fluid}></Image>
          </ImageContainer>
        </ContentContainer>
        <More></More>
        <LineBlock>
          <Line></Line>
        </LineBlock>
      </Body>
    )
  }
}

const mapStateToProps = state => ({
  language: state.reducer.language,
  device: state.reducer.device,
})

export default connect(mapStateToProps)(QandABody)
