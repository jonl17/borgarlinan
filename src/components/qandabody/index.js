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
// import ShowHide from "../buttons/showhide"

class QandABody extends React.Component {
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
      <Body key={index}>
        <Group>
          <Title className="bold" /*onClick={() => this.handleClick()} */>
            {index + 1 + ". "}
            {item.node.frontmatter.title}
          </Title>
          {/*
          <ShowHide
            onClick={() => this.handleClick}
            minimize={minimize}
          ></ShowHide > */}
        </Group>
        <List /* minimize={minimize} */>
          {item.node.frontmatter.subject.map((subj, index) => (
            <div key={index}>
              <ListItem key={index}>
                <Text>{subj}</Text>
              </ListItem>
            </div>
          ))}
        </List>
        <More></More>
        <LineBlock minimize={minimize}>
          <Line></Line>
        </LineBlock>
      </Body>
    )
  }
}

export default QandABody
