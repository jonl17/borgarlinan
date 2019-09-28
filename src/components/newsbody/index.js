import React from "react"
import {
  Body,
  Date,
  NewsTitle,
  Paragraph,
  Line,
  TimetablePara,
  Timetable,
} from "./Styled"
import { getPosition } from "../../methods"
import { connect } from "react-redux"

class NewsBody extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      threshold: undefined,
      height: undefined,
      precision: undefined,
    }
    this.setThreshold = this.setThreshold.bind(this)
  }

  componentDidMount() {
    const distance = getPosition(this.newsEl)
    const precision = -distance.y + window.innerHeight * 0.8
    this.setState({
      height: this.lineref.clientHeight,
      precision: precision,
    })
    window.addEventListener("scroll", this.setThreshold)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.setThreshold)
  }
  setThreshold() {
    this.setState({
      threshold: this.state.precision + this.props.lineHeight - 150,
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
    const { item, no, device } = this.props
    return (
      <Body
        device={device}
        ref={newsEl => (this.newsEl = newsEl)}
        even={this.isEven(no)}
      >
        <Date device={device}>{item.node.frontmatter.dagsetning}</Date>
        <NewsTitle device={device} className="bold">
          {item.node.frontmatter.title}
        </NewsTitle>
        {item.node.frontmatter.subject.map((para, index) => (
          <Paragraph device={device} key={index}>
            {para}
          </Paragraph>
        ))}
        {item.node.frontmatter.timetable != null ? (
          item.node.frontmatter.timetable.map((item, index) => (
            <Timetable key={index} device={device}>
              <TimetablePara dest>{item.dest}</TimetablePara>
              <TimetablePara time>{item.time}</TimetablePara>
            </Timetable>
          ))
        ) : (
          <></>
        )}
        {device !== `mobile` ? (
          <Line
            ref={lineref => (this.lineref = lineref)}
            action={this.getAction(this.state.threshold)}
            height={this.state.threshold > -200 ? this.state.threshold : 0}
            even={this.isEven(no)}
          ></Line>
        ) : (
          <Line
            ref={lineref => (this.lineref = lineref)}
            action={this.getAction(this.state.threshold)}
            height={0}
            even={this.isEven(false)}
          ></Line>
        )}
      </Body>
    )
  }
}

const mapStateToProps = state => ({
  lineHeight: state.reducer.lineHeight,
  device: state.reducer.device,
})

export default connect(mapStateToProps)(NewsBody)
