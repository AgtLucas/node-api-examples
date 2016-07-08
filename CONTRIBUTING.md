# Contributing

To send a pull request of new project, first you must create a API using a web framework and a database framework for Node.js, following the rules below:

* The project's name should be named as: `web_module-db_module-api`;
* The project must have a task CRUD, using these endpoints:
  * `GET /tasks`: List all tasks;
  * `GET /tasks/:taskId`: Find a task;
  * `POST /tasks`: Create a task;
  * `PUT /tasks/:taskId`: Update a task;
  * `DELETE /tasks/:taskId`: Delete a task;
* The project must have tests for these routes using [mocha](https://www.npmjs.com/package/mocha) and [supertest](https://www.npmjs.com/package/supertest).
* You can copy and modify your project, using [these project as examples](https://github.com/caio-ribeiro-pereira/node-api-examples/tree/master/express-mongoose-api).
