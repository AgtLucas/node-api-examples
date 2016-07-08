module.exports = {
  isTest: false,
  server: {
    port: 3000,
    host: 'localhost'
  },
  bodyParser: {
    extended: true
  },
  rethinkdb: {
    db: 'express_rethinkdb',
    host: 'localhost',
    port: 28015
  },
  consign: {
    verbose: false
  },
  model: {
    schema: {
      unknownProperties: 'delete'
    },
    update: {
      returnChanges: true
    }
  }
};
