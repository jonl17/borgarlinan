import React from "react"
import { Body, Date, NewsTitle, Paragraph, Line } from "./Styled"

class NewsBody extends React.Component {
  componentDidMount() {
    console.log()
  }

  isEven = number => {
    if (number % 2 === 0) return true
    return false
  }
  render() {
    const { item, no } = this.props
    return (
      <Body ref={newsEl => (this.newsEl = newsEl)} even={this.isEven(no)}>
        <Date>{item.node.frontmatter.dagsetning}</Date>
        <NewsTitle>{item.node.frontmatter.title}</NewsTitle>
        {item.node.frontmatter.subject.map((para, index) => (
          <Paragraph key={index}>{para}</Paragraph>
        ))}
        <Line even={this.isEven(no)}></Line>
      </Body>
    )
  }
}

export default NewsBody
