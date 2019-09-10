import React from "react"
import { Body, Date, NewsTitle, Paragraph, Line } from "./Styled"
import { getPosition } from "../../methods"
import { connect } from "react-redux"

class NewsBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      threshold: undefined,
      height: undefined,
    }
  }

  componentDidMount() {
    const distance = getPosition(this.newsEl)
    const precision = -distance.y + window.innerHeight * 0.8
    this.setState({
      threshold: distance.y,
      height: this.lineref.clientHeight,
    })
    window.addEventListener("scroll", () => {
      this.setState({
        threshold: precision + this.props.lineHeight,
      })
    })
  }

  isEven = number => {
    if (number % 2 === 0) return true
    return false
  }
  getAction(thresh) {
    if (thresh < 0) {
      return "empty"
    } else if (thresh >= 0 && thresh < this.state.height) {
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
        <NewsTitle className="bold">{item.node.frontmatter.title}</NewsTitle>
        {item.node.frontmatter.subject.map((para, index) => (
          <Paragraph key={index}>{para}</Paragraph>
        ))}
        <Line
          ref={lineref => (this.lineref = lineref)}
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
