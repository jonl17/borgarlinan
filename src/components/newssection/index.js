import React from "react"
import {
  PageContainer,
  Container,
  Date,
  NewsTitle,
  Paragraph,
  NewsBody,
  Title,
} from "./Styled"
import { graphql, StaticQuery } from "gatsby"

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
      data.allMarkdownRemark.edges.map(item => (
        <NewsBody>
          <Date>{item.node.frontmatter.dagsetning}</Date>
          <NewsTitle>{item.node.frontmatter.title}</NewsTitle>
          {item.node.frontmatter.subject.map(para => (
            <Paragraph>{para}</Paragraph>
          ))}
        </NewsBody>
      ))
    }
  ></StaticQuery>
)

const NewsSection = () => {
  return (
    <PageContainer>
      <Container>
        <Title>Fréttir</Title>
        {GetNews()}
      </Container>
    </PageContainer>
  )
}

export default NewsSection
