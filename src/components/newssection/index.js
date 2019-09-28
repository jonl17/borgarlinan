import React from "react"
import { PageContainer, Container, Title } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import NewsBody from "../newsbody"
import { connect } from "react-redux"
import { setFirstlineStop } from "../../state/actions"
import { getPosition } from "../../methods"

const GetNews = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { type: { eq: "news" } } }
          sort: { fields: frontmatter___order, order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                subject
                type
                dagsetning
                timetable {
                  dest
                  time
                }
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.edges.map((item, index) => (
        <NewsBody no={index} key={index} item={item}></NewsBody>
      ))
    }
  ></StaticQuery>
)

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
    const { device } = this.props
    return (
      <PageContainer>
        <Container device={device}>
          <Title
            className="bold"
            ref={titleElement => (this.titleElement = titleElement)}
          >
            Fréttir
          </Title>
          {GetNews()}
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
