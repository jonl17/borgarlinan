export const getPosition = elem => {
  var yPosition = 0

  while (elem) {
    yPosition += elem.offsetTop - elem.scrollTop + elem.clientTop
    elem = elem.offsetParent
  }

  return { y: yPosition }
}

export const formatDate = date => {
  return date.replace("-", "/").replace("-", "/")
}

/** by name  */

const compareTitle = (a, b) => {
  if (a.frontmatter.title < b.frontmatter.title) {
    return -1
  }
  if (a.frontmatter.title > b.frontmatter.title) {
    return 1
  }
  return 0
}
const compareDate = (a, b) => {
  if (a.frontmatter.dagsetning > b.frontmatter.dagsetning) {
    return -1
  }
  if (a.frontmatter.dagsetning < b.frontmatter.dagsetning) {
    return 1
  }
  return 0
}

export const filterSkyrslur = (skyrslur, filter) => {
  if (filter === "bytitle") {
    console.log(skyrslur.sort(compareTitle))
    return skyrslur.sort(compareTitle)
  }
  if (filter === "bydate") {
    console.log(skyrslur.sort(compareDate))
    return skyrslur.sort(compareDate)
  }
}
