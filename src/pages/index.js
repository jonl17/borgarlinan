import React from "react"
import Frontpage from "../components/frontpage"
import QandASection from "../components/qandasection"
import NewsSection from "../components/newssection"
import Footer from "../components/footer"
import styled from "styled-components"
import Menu from "../components/menu"
import SEO from "../components/seo"
import Burger from "../components/burger"
import BurgerMenu from "../components/burgerMenu"

import { graphql } from "gatsby"
import { connect } from "react-redux"
import { setStart, getHeight, setLineHeight } from "../state/actions"
import { triggerBurgerMenu, setDevice } from "../state/actions"

const Body = styled.div`
  position: relative;
  overflow: hidden;
`

class index extends React.Component {
  constructor(props) {
    super(props)
    this.scrollCallBack = this.scrollCallBack.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(setDevice(this.bodyelement.clientWidth))
    /* get full height */
    const height = this.bodyelement.clientHeight
    this.props.dispatch(getHeight(height))
    /* start the line  */
    if (this.props.showBurgerMenu) {
      this.props.dispatch(triggerBurgerMenu(false))
    }

    window.addEventListener("scroll", () => this.scrollCallBack())
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", () => this.scrollCallBack())
  }

  scrollCallBack() {
    this.props.dispatch(setLineHeight(document.scrollingElement.scrollTop))
    if (!this.props.started) {
      this.props.dispatch(setStart())
    }
    if (this.props.showBurgerMenu) {
      this.props.dispatch(triggerBurgerMenu(false))
    }
  }

  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const { device } = this.props
    return (
      <>
        <SEO></SEO>
        <Body ref={bodyelement => (this.bodyelement = bodyelement)}>
          {device !== undefined ? (
            <>
              <Burger></Burger>
              <BurgerMenu></BurgerMenu>
              <Menu></Menu>
              <Frontpage title={title} subtitle={subtitle}></Frontpage>
              <QandASection></QandASection>
              <NewsSection></NewsSection>
              <Footer page={"frontpage"}></Footer>{" "}
            </>
          ) : (
            <></>
          )}
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
  showBurgerMenu: state.reducer.showBurgerMenu,
  device: state.reducer.device,
})

export default connect(mapStateToProps)(index)
