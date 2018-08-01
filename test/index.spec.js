const qqface = require('../src/')
// console.log(qqface)
const {codeToText, codeToChar, charToCode, codeMap, charMap, textMap} = qqface

describe('method', () => {
  it('codeToText', () => {
    expect(codeToText(1)).toBe('微笑')
  })

  it('codeToChar', () => {
    expect(codeToChar(1)).toBe('/::)')
  })

  it('charToCode', () => {
    expect(charToCode('/::)')).toBe(1)
  })
})

describe('map', () => {
  it('total', () => {
    expect(codeMap.length).toBe(textMap.length)
    expect(charMap.length).toBe(textMap.length)
  })
})
