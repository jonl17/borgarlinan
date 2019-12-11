const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const path = require(`path`)
const slugify = require(`slugify`)

/** relative images */
exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

/*** create skýrslur pages */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const skyrslaTemplate = path.resolve(`src/templates/skyrsla/index.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___dagsetning, order: DESC }
        filter: { fileAbsolutePath: { regex: "/content/skyrslur/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query!`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: "/skyrslur/" + slugify(node.frontmatter.title),
      component: skyrslaTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
