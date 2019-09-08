import React from "react"
import { Body, Group, Title, List, ListItem, Text, More } from "./Styled"
import ShowHide from "../buttons/showhide"

class NewsBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minimize: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      minimize: !this.state.minimize,
    })
  }
  render() {
    const { item, index } = this.props
    const { minimize } = this.state
    return (
      <Body>
        <Group>
          <Title>
            {index + 1 + ". "}
            {item.node.frontmatter.title}
          </Title>
          <ShowHide
            onClick={() => this.handleClick}
            minimize={minimize}
          ></ShowHide>
        </Group>
        <List minimize={minimize}>
          {item.node.frontmatter.subject.map((subj, index) => (
            <ListItem key={index}>
              <Text>{subj}</Text>
            </ListItem>
          ))}
        </List>
        <More></More>
      </Body>
    )
  }
}

export default NewsBody
