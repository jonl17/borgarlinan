import React from "react"
import { Body, Date, NewsTitle, Paragraph, Line } from "./Styled"
import { getPosition } from "../../methods"
import { connect } from "react-redux"

class NewsBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      threshold: undefined,
    }
  }

  componentDidMount() {
    const distance = getPosition(this.newsEl)
    this.setState({
      threshold: distance.y,
    })
    window.addEventListener("scroll", () => {
      this.setState({
        threshold: -distance.y + 500 + this.props.lineHeight,
      })
      console.log(-distance.y + this.props.lineHeight)
    })
  }

  isEven = number => {
    if (number % 2 === 0) return true
    return false
  }
  getAction(thresh) {
    if (thresh < 0) {
      return "empty"
    } else if (thresh >= 0 && thresh < 300) {
      return "fill"
    } else {
      return "full"
    }
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
        <Line
          action={this.getAction(this.state.threshold)}
          height={this.state.threshold > 0 ? this.state.threshold : 0}
          even={this.isEven(no)}
        ></Line>
      </Body>
    )
  }
}

const mapStateToProps = state => ({
  lineHeight: state.reducer.lineHeight,
})

export default connect(mapStateToProps)(NewsBody)
