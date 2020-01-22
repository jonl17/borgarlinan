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
  if (filter === "title") {
    return skyrslur.sort(compareTitle)
  }
  if (filter === "date") {
    return skyrslur.sort(compareDate)
  }
}

// fyrir íslenska og enskar þýðingar
export const renderHTML = html => {
  let split = html.split("<p>-ENSKA-</p>")
  return split
}

// filterar út fréttir ef enskan er á | tímabundin lausn, eyða síðar!
export const filterMenu = (items, language) => {
  let newMenu = []
  if (language === `english`) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].name !== `Fréttasafn`) {
        newMenu.push(items[i])
      }
    }
  } else {
    newMenu = items
  }
  return newMenu
}
