import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import { pushHistory } from "../state/actions"

/** components */
import Frontpage from "../components/frontpage"
import QandASection from "../components/qandasection"
import NewsSection from "../components/newssection"
import Footer from "../components/footer"

class index extends React.Component {
  componentDidMount() {
    this.props.dispatch(pushHistory(this.props.location.pathname))
  }
  render() {
    const {
      device,
      language,
      location: { pathname },
      data: {
        site: {
          siteMetadata: { title, subtitle: ice, subtitleEnska: en },
        },
      },
    } = this.props
    return (
      <>
        {device !== undefined ? (
          <>
            <Frontpage
              title={title}
              subtitle={language === `icelandic` ? ice : en}
            ></Frontpage>
            <QandASection></QandASection>
            <NewsSection></NewsSection>
            <Footer page={pathname}></Footer>
          </>
        ) : (
          <></>
        )}
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
        subtitleEnska
      }
    }
  }
`

const mapStateToProps = state => ({
  device: state.reducer.device,
  history: state.reducer.history,
  language: state.reducer.language,
})

export default connect(mapStateToProps)(index)
