export default (constant, items = []) => {
  let constantCollection = {}

  if (typeof constant === 'string') {
    items.map(i => (constantCollection[i] = `${constant}_${i}`))
  }

  if (typeof constant === 'object') {
    Object.keys(constant).map(cons => {
      constantCollection[cons] = {}
      constant[cons].map(i => (constantCollection[cons][i] = `${cons}_${i}`))
    })
  }

  return constantCollection
}
