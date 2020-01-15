import React from "react"
import { connect } from "react-redux"
import { setFirstlineStop } from "../../state/actions"
import { getPosition } from "../../methods"

/** components */
import { PageContainer, Container, Title } from "./Styled"
import LatestNews from "./components/LatestNews"

class NewsSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      linestop: -1,
    }
  }
  componentDidMount() {
    const distance = getPosition(this.titleElement)
    this.setState({
      linestop: distance.y - window.innerHeight / 2.6,
    })
    this.props.dispatch(
      setFirstlineStop(
        /* distance from top of page minus total height of element stops the line */
        distance.y - window.innerHeight / 2.6
      )
    )
  }
  componentDidUpdate() {
    const distance = getPosition(this.titleElement)
    this.props.dispatch(
      setFirstlineStop(
        /* distance from top of page minus total height of element stops the line */
        distance.y - window.innerHeight / 2.6
      )
    )
  }
  render() {
    const { device, language } = this.props
    return language === `icelandic` ? (
      <PageContainer>
        <Container device={device}>
          <Title
            device={device}
            className="bold"
            ref={titleElement => (this.titleElement = titleElement)}
          >
            Fréttir
          </Title>
          <LatestNews></LatestNews>
        </Container>
      </PageContainer>
    ) : (
      <PageContainer>
        <Container device={device}>
          <Title
            device={device}
            ref={titleElement => (this.titleElement = titleElement)}
          ></Title>
        </Container>
      </PageContainer>
    )
  }
}

const mapStateToProps = state => ({
  language: state.reducer.language,
  firstLineStop: state.reducer.firstLineStop,
  device: state.reducer.device,
})

export default connect(mapStateToProps)(NewsSection)
