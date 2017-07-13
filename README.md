## Run app

This app is dockerized and uses docker-compose to connect and run the server and client containers.

- First run the command `docker-compose up` to build all the containers.

- Then navigate to `http://localhost:4200/` to open the app.

## Unit testing

- Install frontend depencencies running `npm install` inside `client/phones`.
- To run all the frontend test go inside `client/phones/` and run `npm test`.

## End to End testing

- Install frontend depencencies running `npm install` inside `client/phones`.
- To run the end to end tests go inside `client/phones/` and run `npm run e2e`.