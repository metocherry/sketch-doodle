# GraphQL

    {
      "type": "node",
      "request": "launch",
      "name": "nodemon",
      "program": "${workspaceFolder}\\index.js",
      "runtimeExecutable": "nodemon --exec babel-node",
      "restart": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "gulp:start",
      "program": "${workspaceRoot}/node_modules/gulp/bin/gulp.js",
      "stopOnEntry": false,
      "args": ["start"],
      "cwd": "${workspaceRoot}",
      "runtimeArgs": ["--nolazy"],
      "console": "integratedTerminal",
      "port": 3000
    }

## Require

### Nodemon

`nodemon`은 스크립트 모니터링 유틸리티입니다.
프로젝트 폴더의 모든 파일을 모니터링하다가, 수정이 될 경우, 이를 반영하여 서버롤 재시작합니다.

#### Install Nodemon

```bash
npm install -g nodemon
```

or

```bash
npm install --save-dev nodemon
```

#### VSCode에서 Nodemon 으로 디버깅하기

VSCode에서 디버깅하기 위해서는 `nodemon`이 global로 설치되어 있어야 합니다.
`nodemon`을 글로벌로 설치했다면, `launch.json` 파일을 아래와 같이 수정합니다.

```json
"configuration": [
  {
    "type": "node",
    "request": "launch",
    "name": "debug",
    "runtimeExecutable": "yarn",
    "runtimeArgs": ["debug", "--nolazy"],
    "restart": true,
    "sourceMaps": true,
    "outFiles": ["${workspaceFolder}\\dist\\**\\*.js"],
    "timeout": 60000,
    "console": "integratedTerminal",
    "internalConsoleOptions": "neverOpen"
  }
]
```
