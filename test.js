import c from './index'

describe('Constant-Factory', () => {
  it('returns a object', () => {
    expect(c()).to.be.a('object')
  })

  describe('Simple mode', () => {
    it('returns a object with generated constant with one item', () => {
      expect(c('TODO', ['ITEM'])).to.deep.equal({
        ITEM: 'TODO_ITEM'
      })
    })

    it('returns a object with generated constant with multiple items', () => {
      expect(c('TODO', ['ITEM', 'POST', 'HELLO'])).to.deep.equal({
        ITEM: 'TODO_ITEM',
        POST: 'TODO_POST',
        HELLO: 'TODO_HELLO'
      })
    })
  })

  describe('Advanced mode', () => {
    it('returns a deep object with assigned constants and constant-entries', () => {
      expect(c({
        FOO: ['BAR'],
        HELLO: ['WORLD'],
        THIS: ['IS', 'A', 'DEEP', 'TEST']
      })).to.deep.equal({
        FOO: {
          BAR: 'FOO_BAR'
        },
        HELLO: {
          WORLD: 'HELLO_WORLD'
        },
        THIS: {
          IS: 'THIS_IS',
          A: 'THIS_A',
          DEEP: 'THIS_DEEP',
          TEST: 'THIS_TEST'
        }
      })
    })
  })
})
