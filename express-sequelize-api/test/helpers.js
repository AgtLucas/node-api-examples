import supertest from 'supertest';
import chai from 'chai';
import app from '../index.js';
import config from '../config.js';

global.config = config;
global.app = app;
global.expect = chai.expect;
global.request = supertest(app);
