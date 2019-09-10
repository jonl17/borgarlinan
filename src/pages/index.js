import React from "react"
import Frontpage from "../components/frontpage"
import QandASection from "../components/qandasection"
import NewsSection from "../components/newssection"
import Footer from "../components/footer"
import styled from "styled-components"
import Menu from "../components/menu"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import { connect } from "react-redux"
import { setStart, getHeight, setLineHeight } from "../state/actions"

const Body = styled.div``

class index extends React.Component {
  componentDidMount() {
    /* get full height */
    const height = this.bodyelement.clientHeight
    this.props.dispatch(getHeight(height))
    /* start the line  */
    window.addEventListener("scroll", () => {
      this.props.dispatch(setLineHeight(document.scrollingElement.scrollTop))
      if (!this.props.started) {
        this.props.dispatch(setStart())
      }
    })
  }

  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    return (
      <>
        <SEO></SEO>
        <Body ref={bodyelement => (this.bodyelement = bodyelement)}>
          <Menu></Menu>
          <Frontpage title={title} subtitle={subtitle}></Frontpage>
          <QandASection></QandASection>
          <NewsSection></NewsSection>
          <Footer page={"frontpage"}></Footer>
        </Body>
      </>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

const mapStateToProps = state => ({
  started: state.reducer.started,
  lineHeight: state.reducer.lineHeight,
})

export default connect(mapStateToProps)(index)
