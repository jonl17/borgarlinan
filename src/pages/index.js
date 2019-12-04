import React from "react"
import Frontpage from "../components/frontpage"
import QandASection from "../components/qandasection"
import NewsSection from "../components/newssection"
import Footer from "../components/footer"

import { graphql } from "gatsby"
import { connect } from "react-redux"

const index = ({
  device,
  location: { pathname },
  data: {
    site: {
      siteMetadata: { title, subtitle },
    },
  },
}) => {
  return (
    <>
      {device !== undefined ? (
        <>
          <Frontpage title={title} subtitle={subtitle}></Frontpage>
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
  device: state.reducer.device,
})

export default connect(mapStateToProps)(index)
