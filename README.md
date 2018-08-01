# wx-qqface
提供对qq表情、字符表情、html图片标签的互转。表情资源[请见](https://github.com/uojo/wx-qqface/resources)

## Install
To install from npm:
```
npm install --save wx-qqface
```

## Usage
For Node.js:
```javascript
var qqface = require('wx-qqface');

qqface.codeToText(1)
// 微笑

qqface.codeToChar(1)
// /::)

qqface.charToCode("/::)")
// 1
```

## API

### codeToText(code)
表情的数字码转为文字信息

code [number]

### codeToChar(code)
表情的数字码转为字符信息

code [number]

### charToCode(char)
表情的字符信息转数字码

char [string]

### codeMap
表情的数字码集合

### charMap
表情的字符信息集合

### textMap
表情的文字信息集合


## ChangeLog
### 0.1.0
- 第一版本。
