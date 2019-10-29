import React from "react"
import {
  Body,
  Group,
  Title,
  List,
  ListItem,
  Text,
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
  cleanCaption(caption) {
    return caption.replace("<p>", "").replace("</p>", "")
  }
  render() {
    const { item, index, language, device } = this.props
    return (
      <Body device={device} key={index}>
        <Group>
          <Title device={device} className="bold">
            {index + 1 + ". "}
            {language === "icelandic"
              ? item.node.acf.fyrirsogn
              : item.node.acf.fyrirsogn_enska}
          </Title>
        </Group>
        <ContentContainer device={device}>
          <List
            list={item.node.acf.skraut ? "rectangle" : "none"}
            device={device}
          >
            {language === "icelandic"
              ? item.node.acf.samfelldur_texti.map((subj, index) => (
                  <div key={index}>
                    <ListItem key={index}>
                      <Text device={device}>{subj.malsgrein}</Text>
                    </ListItem>
                  </div>
                ))
              : item.node.acf.samfelldur_texti_enska.map((subj, index) => (
                  <div key={index}>
                    <ListItem key={index}>
                      <Text device={device}>{subj.malsgrein_enska}</Text>
                    </ListItem>
                  </div>
                ))}
          </List>
          {item.node.acf.baeta_vi__mynd ? (
            <ImageContainer device={device}>
              <Image
                fluid={item.node.acf.mynd.localFile.childImageSharp.fluid}
              ></Image>
              <Caption>{this.cleanCaption(item.node.acf.mynd.caption)}</Caption>
            </ImageContainer>
          ) : (
            <></>
          )}
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
