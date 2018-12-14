/**
 * @module server/app.test.js
 * @description Unit Testing for Server Routes
 */

const request = require('supertest');
const app = require('./app');

describe('SERVER TEST: GET Request > Root Path', () => {
  it('Should respond with status 200 and "Hello World"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
})