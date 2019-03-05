import request from 'supertest';
import '@babel/polyfill';
import app from '../server';
import mongoDB from './mongoDB';

describe('Test the root path', () => {
  beforeAll(() => {
    mongoDB.connect();
  });

  afterAll(done => {
    mongoDB.disconnect(done);
  });

  test('It should response the GET method', () => {
    return request(app)
      .get('/api/health')
      .expect(200);
  });
});
