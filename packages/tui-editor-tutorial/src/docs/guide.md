# Angular 템플릿 관리

## Table of Contents

- [개발환경 세팅](#개발환경-세팅)
  - [Git](#git)
  - [NodeJS](#nodejs)
  - [Angular](#angular)
- [시작하기](#시작하기)
  - [프로젝트 구조](#프로젝트-구조)
  - [페이지 생성하기](#페이지-생성하기)
  - [스타일 적용하기](#스타일-적용하기)
  - [애니메이션 적용하기](#애니메이션-적용하기)
  - [라우터를 이용한 페이지 이동하기](#라우터를-이용한-페이지-이동하기)
- [간단한 프로토타입](#간단한 프로토타입)

## 개발환경 세팅

### Git

- [Git](#https://git-scm.com/)
- [SourceTree](#https://www.sourcetreeapp.com/)

소스 형상관리를 위해 설치합니다.
GUI Tool `SourceTree`를 설치하시면, 더 쉽게 관리하실 수 있습니다.

### NodeJS

- [NodeJS 10.15.3 LTS](#https://nodejs.org/en/)

NodeJS 페이지에서 `10.15.3 LTS` 버전을 다운 받아 설치합니다. 설치되면 아래와 같이 확인하실 수 있습니다.

```bash
node -v
v10.15.3

npm -v
6.4.1
```

### Angular

- [Angular Document](#https://angular.io/docs)

Angular 프로젝트 관리 편의를 위해 `@angular/cli`를 글로벌로 설치합니다.
`ng` 명령어를 실행하면, 이용 가능한 커맨드를 보실 수 있습니다.

```bash
npm install -g @angular/cli
ng
```

## 시작하기

프로젝트를 시작하기 위해서 GitLab 서버에 있는 프로젝트 Repository를 클론합니다.

```bash
git clone angular-scaffolding
```

클론 후, 개발 서버 실행을 위해 프로젝트 root 폴더에서 node 모듈을 설치합니다.

```bash
cd angular-scaffolding

# 모듈 설치
npm install

# 서버 실행
npm start
```

### 프로젝트 구조

```doc
- app/                  --- 앱 로직, 데이터, 뷰 등
  - constants/          --- 공통으로 쓰일 고정된 정보(메시지 프로퍼티 등)
  - cross-cutting/      --- 페이지 변경 또는 데이터 통신 간에 인터셉터 로직
  - data/               --- 데이터(모델, 셀렉터, 액션 등)
  - presentation/       --- 뷰
    - layout/           --- 뷰 레이아웃
    - ui/               --- 뷰 공통 컴포넌트
    - views/            --- 뷰 페이지
  - utils/              --- 공통 유틸리티
- assets/               --- 이미지, 폰트 등
  - images/
  - fonts/
- environments/         --- 개발 및 프로덕션 환경
  - environment.prod.ts --- 프로덕션 환경
  - environment.ts      --- 개발 환경
- main.ts               --- Entry Point
- styles.scss           --- 글로벌 스타일
```

### 부트스트랩

Angular를 실행했을 때, `angular.json` 파일에 `build.main`에 지정되어 있는 파일을 실행합니다.
기본적으로 `src/main.ts` 파일로 설정되어있습니다.

`src/main.ts`

```typescript
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

`platformBrowserDynamic().bootstrapModule(AppModule)`를 보면 `AppModule`를 파라메타로 넘긴것을 볼수 있는데,
angular가 `AppModule`을 부트스트랩한다는 것을 알 수 있습니다. 즉, `AppModule`이 서비스의 시작 지점이라는 것을 의미합니다.

`src/app/app.module.ts`

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- declarations : 컴포넌트, 디렉티브, 파이프를 사용하기 위해서, 모듈에 정의합니다. 사용하기 위한 컴포넌트, 디렉티브, 파이프가 모듈에 정의되어 있지 않으면, 모듈은 찾지 못하고, 에러를 발생시킵니다.
- imports : 의존성 있는 모듈을 정의합니다. 위에는 BrowserMdoule(브라우저와 관련된 모듈)과 AppRoutingModule에 의존하고 있습니다.
- providers : 서비스를 앱에서 사용할 수 있도록 주입하려면, 이곳에 추가되어야합니다.
- bootstrap : 모듈이 앱의 부트스트랩에 사용 될 때, 최상위 컴포넌트로 로드해야 한다는 것을 나타냅니다 .

### 페이지 생성하기

#### 모듈과 라우팅 파일 생성하기

`ng g module <path>` 명령어를 사용하여 module 파일을 생성할 수 있습니다.

```bash
ng g module presentation/views/auth
```

위와 같은 명령어를 생성하면, 아래와 같은 파일이 생성된 것을 확인할 수 있습니다.
**뷰와 관련된 부분은 `presentation` 폴더에 위치합니다.**

```doc
- app/presentation/views/auth
  - auth.module.ts
```

`routing` 파일과 함께 생성하고 싶다면, `--routing` 옵션과 함께 실행하시면 됩니다.

```bash
ng g module presentation/views/auth --routing
```

Result:

```doc
- app/presentation/views/auth
  - auth.module.ts
  - auth-routing.module.ts
```

`app/presentation/views/auth/auth.module.ts`

```typescript
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
```

`app-routing.module.ts`에 있는 `RouterModule.forRoot`와 다르게 `RouterModule.forChild`를  사용하는 이유는 서비스에는 하나의 forRoot만 사용할 수 있기 때문입니다. forRoot를 사용시 에러가 발생합니다.

`app/presentation/views/auth/auth-routing.module.ts`

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}
```

#### component 파일 생성

`ng g component(c) <path>` 명령어를 사용하여 component 파일을 생성할 수 있습니다.

```bash
ng g component presentation/views/auth
```

```doc
- app/presentation/views/auth
  - auth.component.html
  - auth.component.scss
  - auth.component.spec.ts
  - auth.component.ts
```

모듈을 생성하고 실행해야합니다. 기본적으로 `path`에서 모듈 파일을 찾아서, 자동으로 `declarations`에 선언해주기 때문입니다. 만약 모듈을 찾을 수 없어 에러가 발생한다면 `--module` 옵션을 사용하요, 선언을 추가할 모듈을 지정할 수 있습니다.

```bash
ng g component presentation/views/auth --module app.module
```

`app.module.ts` 파일을 찾아가면, 자동으로 추가되어있는 것을 확인하실 수 있습니다.

- selector
- templateUrl
- styleUrl

### 애니메이션 적용하기

## 간단한 프로토타입
