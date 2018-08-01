const charMap = require('./charMap')
const textMap = require('./textMap')

const codeMap = Object.keys(charMap).map(e => ++e)
// console.log(codeMap)
const checkCode = (code) => {
  return codeMap.includes(Number(code))
}

module.exports = {
  codeToText: (val) => {
    if (!checkCode(val)) return ''
    return textMap[val - 1]
  },
  codeToChar: (val) => {
    if (!checkCode(val)) return ''
    return charMap[val - 1]
  },
  charToCode: (val) => {
    return charMap.indexOf(val) + 1 || ''
  },
  codeMap,
  charMap,
  textMap
}
