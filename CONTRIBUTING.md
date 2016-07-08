# Contributing

To send a pull request of a new api example, just follow these rules:

* The project's name should be named as: `web_module-db_module-api`;
* The project must have a task CRUD, using these endpoints:
  * `GET /tasks`: List all tasks;
  * `GET /tasks/:taskId`: Find a task;
  * `POST /tasks`: Create a task;
  * `PUT /tasks/:taskId`: Update a task;
  * `DELETE /tasks/:taskId`: Delete a task;
* All code must use ES6 implementation;
* The project must have tests for these routes using [mocha](https://www.npmjs.com/package/mocha) and [supertest](https://www.npmjs.com/package/supertest).
* You can copy and modify your project, using [these project as examples](https://github.com/caio-ribeiro-pereira/node-api-examples/tree/master/express-mongoose-api).
* And don't forget to include your name into [collaborators list](https://github.com/caio-ribeiro-pereira/node-api-examples#collaborators)
