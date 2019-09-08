import React from "react"
import Frontpage from "../components/frontpage"
import NewsSection from "../components/newsSection"
import Footer from "../components/footer"
import styled from "styled-components"

import { connect } from "react-redux"
import { setStart, getHeight } from "../state/actions"

const Body = styled.div``

class index extends React.Component {
  componentDidMount() {
    /* get full height */
    const height = this.bodyelement.clientHeight
    this.props.dispatch(getHeight(height))
    /* start the line  */
    window.addEventListener("scroll", () => {
      if (!this.props.started) {
        this.props.dispatch(setStart())
      }
    })
  }
  render() {
    return (
      <Body ref={bodyelement => (this.bodyelement = bodyelement)}>
        <Frontpage></Frontpage>
        <NewsSection></NewsSection>
        <Footer></Footer>
      </Body>
    )
  }
}

const mapStateToProps = state => ({
  started: state.reducer.started,
})

export default connect(mapStateToProps)(index)
