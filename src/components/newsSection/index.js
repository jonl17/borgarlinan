import React from "react"
import {
  Container,
  NewsBody,
  Title,
  List,
  ListItem,
  Text,
  More,
} from "./Styled"

import { graphql, StaticQuery } from "gatsby"

const GetNews = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                subject
                more
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.edges.map((item, index) => (
        <NewsBody key={index}>
          <Title>
            {index + 1 + ". "}
            {item.node.frontmatter.title}
          </Title>
          <List>
            {item.node.frontmatter.subject.map((subj, index) => (
              <ListItem key={index}>
                <Text>{subj}</Text>
              </ListItem>
            ))}
          </List>
          <More></More>
        </NewsBody>
      ))
    }
  ></StaticQuery>
)

const NewsSection = () => {
  return <Container>{GetNews()}</Container>
}

export default NewsSection
