import React from "react"
import { LayoutContainer, Body } from "./Styled"
import { GlobCSS } from "../components/globalstyles"
import Menu from "../components/menu"
import SEO from "../components/seo"
import { connect } from "react-redux"
import { setDevice, getHeight, setLineHeight, setStart } from "../state/actions"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.scrollCallBack = this.scrollCallBack.bind(this)
    this.deviceDispatches = this.deviceDispatches.bind(this)
  }
  componentDidMount() {
    const { dispatch } = this.props
    this.deviceDispatches(dispatch)
    /* monitor screen size of resize */
    window.addEventListener("resize", () => this.deviceDispatches(dispatch))
    /* start the line  */
    window.addEventListener("scroll", () => this.scrollCallBack())
  }
  componentWillUnmount() {
    const { dispatch } = this.props
    window.removeEventListener("scroll", () => this.scrollCallBack())
    window.removeEventListener("resize", () => this.deviceDispatches(dispatch))
  }
  deviceDispatches(dispatch) {
    dispatch(setDevice(this.bodyelement.clientWidth))
    dispatch(getHeight(this.bodyelement.clientHeight))
  }
  scrollCallBack() {
    const { dispatch, started } = this.props
    dispatch(setLineHeight(document.scrollingElement.scrollTop))
    if (!started) {
      dispatch(setStart())
    }
  }
  render() {
    const { children } = this.props
    return (
      <LayoutContainer id="layout-container">
        <GlobCSS></GlobCSS>
        <SEO></SEO>
        <Menu></Menu>
        <Body ref={bodyelement => (this.bodyelement = bodyelement)}>
          {children}
        </Body>
      </LayoutContainer>
    )
  }
}

const mapStateToProps = state => ({
  started: state.reducer.started,
})

export default connect(mapStateToProps)(Layout)
