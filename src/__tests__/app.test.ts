import request from 'supertest';
import { app } from '../app';

describe('Test the root path', () => {
  let server= app;
  
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('⚡ Express + TypeScript Server');
  });
  
  
  
  afterAll(done => {
  });
  
});
