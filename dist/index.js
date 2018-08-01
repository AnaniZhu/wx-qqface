'use strict';

var charMap = require('./charMap');
var textMap = require('./textMap');

var codeMap = Object.keys(charMap).map(function (e) {
  return ++e;
});
// console.log(codeMap)
var checkCode = function checkCode(code) {
  return codeMap.includes(Number(code));
};

module.exports = {
  codeToText: function codeToText(val) {
    if (!checkCode(val)) return '';
    return textMap[val - 1];
  },
  codeToChar: function codeToChar(val) {
    if (!checkCode(val)) return '';
    return charMap[val - 1];
  },
  charToCode: function charToCode(val) {
    return charMap.indexOf(val) + 1 || '';
  },
  codeMap: codeMap,
  charMap: charMap,
  textMap: textMap
};