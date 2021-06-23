// const { describe, expect, it } = require("jest");
const getColorPair = require('./index')

describe('The getColorPair function', () => {
  describe('response', () => {
    const response = getColorPair()

    it('should be defined.', () => {
      expect(response).toBeDefined()
    })

    it('should contain exactly two items.', () => {
      expect(response).toHaveLength(2)
    })

    const [foregroundColor, backgroundColor] = response

    describe('foreground color', () => {
      it('should be defined.', () => {
        expect(foregroundColor).toBeDefined()
      })
    })

    describe('background color', () => {
      it('should be defined.', () => {
        expect(backgroundColor).toBeDefined()
      })
    })
  })
})
