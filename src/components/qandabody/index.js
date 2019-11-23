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

class QandABody extends React.Component {
  render() {
    const {
      item: { frontmatter, html },
      index,
      device,
    } = this.props
    console.log(html)
    return (
      <Body device={device} key={index}>
        <Group>
          <Title device={device} className="bold">
            {index + 1 + ". "}
            {frontmatter.title}
          </Title>
        </Group>
        <ContentContainer device={device}>
          <Texti
            device={device}
            className="spurt-og-svarad-content"
            dangerouslySetInnerHTML={{ __html: html }}
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
