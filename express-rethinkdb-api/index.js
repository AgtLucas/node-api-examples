import consign from 'consign';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import r from 'rethinkdb';
import config from './config.js';

const app = express();

r.connect(config.rethinkdb, (err, conn) => {
  if (err) {
    console.log(`Database ${config.rethinkdb.db} error:`);
    throw err;
  }
  app.use(morgan('common', { skip: () => config.isTest }));
  app.use(helmet());
  app.use(bodyParser.urlencoded(config.bodyParser));
  app.use(bodyParser.json());
  app.use(compression());

  consign(config.consign)
    .include('models')
    .then('routes')
    .into(app, conn)
  ;

  app.listen(config.server.port, () => {
    if (!config.isTest) {
      console.log('Express-RethinkDB TODO API');
      console.log(`Address: ${config.server.host}:${config.server.port}`);
    }
  });
});

module.exports = app;
