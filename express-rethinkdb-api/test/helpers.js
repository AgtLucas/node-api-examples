import supertest from 'supertest';
import chai from 'chai';
import r from 'rethinkdb';
import app from '../index.js';
import config from '../config.js';

global.config = config;
global.r = r;
global.expect = chai.expect;
global.request = supertest(app);
