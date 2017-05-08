This is my first Angular 4 project :)

This app consumes Git's REST services to list users and repositories.

The first screen (users) shows a list of Github users (30 users), each one in card, 4 cards per column and a set of information about each user.
Each card allows you to see user's repositories by clicking in Repositories link (this send user to second screen). Also URL changes adding the owner's username.
Each card allows to see user's Github page.
A Next Users link is shown at page's bottom, this allows you to pick another bunch of users.

The second screen (repositories) shows a list of user's repositories, in the same distribution than first screen.
Each card contains  link to repository, the repository name, a description, the issues count and forks count.
A simple pagination tool is located at page's bottom, this allows navigation through user repositories.

You can find the project deployed here: https://dry-peak-67008.herokuapp.com/users

---

# UsersAndRepositories

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
