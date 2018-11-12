# Angular starter 
This project is a starter package generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Purpose of project

The purpose of the project is to quickly get up and running with your projects, following best practices & to keep a well tested CI flow.


## Commit convention

This project follows the [Angular commit conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) by using the [@commitlint/config-angular](https://github.com/marionebl/commitlint/tree/master/@commitlint/config-angular) package.

Using [husky](https://github.com/typicode/husky) we have to possibility to use the `commit-msg` git hook to trigger a commit lint before the commit gets committed.

## Format staged files

Staged files will be formated using [prettier](https://github.com/prettier/prettier) using the `pre-commit` hook that [husky](https://github.com/typicode/husky) provides.

## Unit testing
Testing is done using [jest](https://github.com/facebook/jest)

Unit test will be triggered before pushing to git using the `pre-push` hook provided by [husky](https://github.com/typicode/husky).

## e2e testing
E2E testing is done using [cypress](https://github.com/cypress-io/cypress)

## CI/CD
The project is using CircleCI that triggers semantic-release
