# webpack 기본 설정
 module bundle

 파일들을 여러개 작성 후 하나의 파일로 묶어 준다. (ex index.js)
 cli에서 npm을 설치해준다.

1. npm 초기화
```
npm init -y
```
2. webpack 설치 (cli에서 사용할 경울 webpack-cli 같이 설치
```
npm install --save-dev webpack webpack-cli
```
3. webpack 실행
- cli에서 구동
    -  --entry bundle해줄 파일 경로   
    -  --output-path 파일 bundling 될 파일 경로
```
npx webpack --entry ./src/index.js --output-path ./dist
```   


- webpack.config.js에서 구동
    [webpack](https://webpack.kr) 사이트에 접속해서 소스를 복사 후 webpack.config.js에 붙여 넣는다
    - 파일명 패스 수정해서 넣어주고 아래 코드를 cli에서 실행해주면 된다. (mode 속성 추가 가능)
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
```
- 웹팩 실행
```
npx wabpack
```

- 번들링은 자주 사용되기 때문에 package.json scripts 부분에 추가해줘도 좋다
```
 "scripts": {
    "build": "webpack"
  },
```