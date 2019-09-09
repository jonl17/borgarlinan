export const getPosition = elem => {
  var yPosition = 0

  while (elem) {
    yPosition += elem.offsetTop - elem.scrollTop + elem.clientTop
    elem = elem.offsetParent
  }

  return { y: yPosition }
}
