# ModuleFederationDemo

## Angualar14

```sh
// angular version must be 14
ng update @angular/core@14 @angular/cli@14

```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Add & Init

```sh
ng add @angular-architects/module-federation --project shell --port 4200 --type host

ng add @angular-architects/module-federation --project remote --port 4201 --type remote
```

## Isseue Solved

if you not able to use `ng add module federaion`

```sh
npm i @angular-architects/module-federation@^14.3.10 -D

```

The key point `mf.manifest.json` file should be load in set up

```sh
mf.manifest.json

```

## Reference

1. https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/
2. https://blog.csdn.net/lvxinaidou/article/details/125856927
3. https://github.com/manfredsteyer/module-federation-plugin-example/tree/static
