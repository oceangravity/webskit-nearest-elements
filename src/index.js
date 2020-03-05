module.exports.getNearestAndFurthestElements = (elements, x, y) => {
  const distances = []
  const distance = (element, x, y) => {
    const mX = x
    const mY = y
    const from = { x: mX, y: mY }
    const offset = element.getBoundingClientRect()
    const nx1 = offset.left - document.querySelector('body').scrollLeft
    const ny1 = offset.top - document.querySelector('body').scrollTop
    const nx2 = nx1 + element.offsetWidth
    const ny2 = ny1 + element.offsetHeight
    const maxX1 = Math.max(mX, nx1)
    const minX2 = Math.min(mX, nx2)
    const maxY1 = Math.max(mY, ny1)
    const minY2 = Math.min(mY, ny2)
    const intersectX = minX2 >= maxX1
    const intersectY = minY2 >= maxY1
    const to = {
      x: intersectX ? mX : nx2 < mX ? nx2 : nx1,
      y: intersectY ? mY : ny2 < mY ? ny2 : ny1
    }
    const distX = to.x - from.x
    const distY = to.y - from.y
    return Math.sqrt(distX * distX + distY * distY)
  }
  const side = (element, x, y) => {
    const pair = { x: null, y: null }

    if (x <= element.getBoundingClientRect().left + (element.offsetWidth / 2)) {
      pair.x = 'LEFT'
    } else {
      pair.x = 'RIGHT'
    }
    if (y <= element.getBoundingClientRect().top + (element.offsetHeight / 2)) {
      pair.y = 'TOP'
    } else {
      pair.y = 'BOTTOM'
    }

    return pair
  }

  [].forEach.call(elements, el => { distances.push({ el: el, distance: distance(el, x, y), side: side(el, x, y) }) })

  return {
    distances,
    nearest: distances.length ? distances.reduce((prev, curr) => prev.distance < curr.distance ? prev : curr) : { el: null, distance: null, side: null },
    furthest: distances.length ? distances.reduce((prev, curr) => prev.distance > curr.distance ? prev : curr) : { el: null, distance: null, side: null }
  }
}
