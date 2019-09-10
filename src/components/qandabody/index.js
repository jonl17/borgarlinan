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
} from "./Styled"
import { connect } from "react-redux"

class QandABody extends React.Component {
  render() {
    const { item, index, language } = this.props
    return (
      <Body key={index}>
        <Group>
          <Title className="bold">
            {index + 1 + ". "}
            {language === "icelandic"
              ? item.node.frontmatter.title
              : item.node.frontmatter.englishTitle}
          </Title>
        </Group>
        <List>
          {language === "icelandic"
            ? item.node.frontmatter.subject.map((subj, index) => (
                <div key={index}>
                  <ListItem key={index}>
                    <Text>{subj}</Text>
                  </ListItem>
                </div>
              ))
            : item.node.frontmatter.englishSubject.map((subj, index) => (
                <div key={index}>
                  <ListItem key={index}>
                    <Text>{subj}</Text>
                  </ListItem>
                </div>
              ))}
        </List>
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
})

export default connect(mapStateToProps)(QandABody)
