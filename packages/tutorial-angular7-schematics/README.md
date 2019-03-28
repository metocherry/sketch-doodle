# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with
```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish


# schematics 적용할 프로젝트 생성
ng new bigdata-app
npm link ../bigdata-schematics
ng g bigdata-schematics:model --help

# 생성
ng g bigdata-schematics:model --name-test --props=a:string,b:string,c:number

# angular 사용
npm install @schematics/angular

ng g bigdata-schematics:model model/user --props=id:string,name:string,age:number

# 템플릿 사용
```

```json
"ng-add": {
  "description": "Add @clr"
}
```

That's it!
