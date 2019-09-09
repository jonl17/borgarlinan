import React from "react"
import { PageContainer, Container, Title } from "./Styled"
import { graphql, StaticQuery } from "gatsby"
import NewsBody from "../newsbody"
import { connect } from "react-redux"
import { setFirstlineStop } from "../../state/actions"

const GetNews = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
          edges {
            node {
              frontmatter {
                title
                subject
                type
                dagsetning
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
  componentDidMount() {
    const distanceFromTop = this.getPosition(this.titleElement)
    console.log(distanceFromTop)
    this.props.dispatch(
      setFirstlineStop(
        /* distance from top of page minus total height of element stops the line */
        distanceFromTop.y - distanceFromTop.y / 6
      )
    )
  }
  getPosition(elem) {
    var yPosition = 0

    while (elem) {
      yPosition += elem.offsetTop - elem.scrollTop + elem.clientTop
      elem = elem.offsetParent
    }

    return { y: yPosition }
  }
  render() {
    return (
      <PageContainer>
        <Container>
          <Title ref={titleElement => (this.titleElement = titleElement)}>
            Fréttir
          </Title>
          {GetNews()}
        </Container>
      </PageContainer>
    )
  }
}

export default connect()(NewsSection)
