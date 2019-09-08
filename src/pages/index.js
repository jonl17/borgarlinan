import React from "react"
import Frontpage from "../components/frontpage"
import NewsSection from "../components/newsSection"
import Footer from "../components/footer"
import styled from "styled-components"

import { connect } from "react-redux"
import { setStart } from "../state/actions"

const Body = styled.div`
  height: 100%;
`

class index extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (!this.props.started) {
        this.props.dispatch(setStart())
      }
    })
  }

  render() {
    return (
      <Body>
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
