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
  const frettTemplate = path.resolve(`src/templates/frett/index.js`)
  const result = await graphql(`
    {
      skyrslur: allMarkdownRemark(
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
      frettir: allMarkdownRemark(
        sort: { fields: frontmatter___dagsetning, order: DESC }
        filter: { fileAbsolutePath: { regex: "/content/frettir/" } }
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
  // Skýrslur
  result.data.skyrslur.edges.forEach(({ node }) => {
    createPage({
      path: "/skyrslur/" + slugify(node.frontmatter.title),
      component: skyrslaTemplate,
      context: {
        id: node.id,
      },
    })
  })
  // Fréttir
  result.data.frettir.edges.forEach(({ node }) => {
    createPage({
      path: "/frettir/" + slugify(node.frontmatter.title),
      component: frettTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
