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
} from "./Styled"
import { connect } from "react-redux"
import "./index.css"

const renderHTML = html => {
  let split = html.split("<p>-ENSKA-</p>")
  return split
}

class QandABody extends React.Component {
  render() {
    const {
      item: { frontmatter, html },
      index,
      device,
      language,
    } = this.props
    const content = renderHTML(html)
    return (
      <Body device={device} key={index}>
        <Group>
          <Title device={device} className="bold">
            {index + 1 + ". "}
            {language === `icelandic` ? frontmatter.title : frontmatter.entitle}
          </Title>
        </Group>
        <ContentContainer device={device}>
          <Texti
            device={device}
            className="spurt-og-svarad-content"
            dangerouslySetInnerHTML={
              language === `english` && content.length > 1
                ? { __html: content[1] }
                : { __html: content[0] }
            }
          ></Texti>
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
