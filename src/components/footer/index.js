import React from "react"
import { useSelector } from "react-redux"
import { graphql, StaticQuery } from "gatsby"

/** components */
import { Container, Item } from "./Styled"

const Footer = ({
  page,
  data: {
    site: {
      siteMetadata: { navbaritems },
    },
  },
}) => {
  const language = useSelector(state => state.reducer.language)
  return (
    <Container>
      {page === navbaritems[0].url ? (
        <Item className="bold" to="/um-verkefnastofu/">
          {language === `icelandic`
            ? navbaritems[1].name
            : navbaritems[1].name_en}
        </Item>
      ) : (
        <Item className="bold" to="/">
          {navbaritems[0].name}
        </Item>
      )}
    </Container>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            navbaritems {
              name
              name_en
              url
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} {...props}></Footer>}
  ></StaticQuery>
)
