export default (constant, items = []) => {
  let constantCollection = {}

  if (typeof constant === 'string') {
    items.map(i => (constantCollection[i] = `${constant}_${i}`))
  }

  if (typeof constant === 'object') {
    Object.keys(constant).map(cons => {
      constantCollection[cons] = {}
      
      if (typeof constant[cons] !== 'string') {
        constant[cons].map(i => {
          if (typeof i === 'string') {
            return constantCollection[cons][i] = `${cons}_${i}`
          } else if (typeof i === 'object') {
            constantCollection[cons][Object.keys(i)[0]] = {}
            i[Object.keys(i)[0]].map(val => {
              constantCollection[cons][Object.keys(i)[0]][val] = `${cons}_${Object.keys(i)[0]}_${val}`
            })
          }
        })
      } else if (typeof constant[cons] === 'string') {
        return constantCollection[cons] = `${cons}_${constant[cons]}`
      }
    })
  }

  return constantCollection
}
