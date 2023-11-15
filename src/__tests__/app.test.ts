import request from 'supertest';
import { server } from '../app';

describe('Test the root path', () => {
  
  test('It should response the GET method', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('⚡ Restify + TypeScript Server');
  });
  
  
  //TODO: Properly tear down the server.
  afterAll(done => {
    server.close()
    done()
  });
  
});
