# Node Express v4 boilerplate with mongo

CRUD Book with the following stack:

| **Tech** | **Description** |
|----------|-------|
|[Node](https://nodejs.org/)                          | JavaScript runtime built on Chrome's V8 JavaScript engine. |
|[Exoress](https://expressjs.com/)                    | Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications..| 
|[Mongoose](http://redux.js.org)                      | Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.| 
|[Morgan](https://github.com/expressjs/morgan)        | HTTP request logger middleware for node.js | 
|[Winston](https://github.com/winstonjs/winston)      | A logger for just about everything. |
|[dotenv](https://github.com/motdotla/dotenv)         | Zero-dependency module that loads environment variables from a .env file into [process.env](https://nodejs.org/docs/latest/api/process.html#process_process_env). | 
|[Jest](https://facebook.github.io/jest/)             | Automated tests with built-in expect assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | 
|[Supertest](https://github.com/visionmedia/supertest)| [Super-agent](https://github.com/visionmedia/superagent) driven library for testing node.js HTTP servers using a fluent API | 
|[ESLint](http://eslint.org/)                         | Lint JS. Reports syntax and style issues. Using [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest) for additional Jest specific linting rules. | |
|[npm Scripts](https://docs.npmjs.com/misc/scripts)   | Glues all this together in a handy automated build. | 

## Requirements 
* Node.js v8.x or later
* NPM (or YARN)
* MongoDB
* Create `.env` file in `/` with following properties
```
SERVER_PORT=9001
LOG_LEVEL=debug
```

## Configuration / setup & run / Get started

```sh
# clone repository
$ git clone repositoryurl
$ cd express-boilerplate

# install dependencies
$ npm install

# start the server
$ npm run start
```

## Usage

You can run `$ npm run doc` to create documentation, it can be found in `/documentation`

## Testing

To test application run `$ npm run test` or check coverage with `$ npm run coverage`

## Docker
Try it with docker!
```sh
# build docker image
$ docker build -t express-boilerplate:1 .

# run docker image (set variables as you need)
docker run --rm -p 9000:9000 \ 
-e ENVIRONMENT VaRIABLES... TBD
express-boilerplate:1
```

## To Do

* Testing
* Documenting
* Dockerizing
* Mock services depending on environment (create one that need this behaviour)
* response service
* validations with joi

## Contributing
I'd love to have your helping hand on `express-boilerplate`! so feel free to ask for support, or 
make pull requests.

## License
This Boilerplate is open source software [licensed as MIT](https://github.com/migithub/miapp/blob/master/LICENSE).

## Contact

> GitHub [@alejandroiddev](https://github.com/alejandroiddev)

