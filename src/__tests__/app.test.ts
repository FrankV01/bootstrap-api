import request from 'supertest';
import { server } from '../app';

describe('Test the root path', () => {
  
  test('Calls root', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('⚡ Restify + TypeScript Server');
  });
  test('Hello', async () => {
      const res = await request(server).get('/hello/world');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe('hello world')
  });
  test('Hello head', async () => {
    const res = await request(server).head('/hello/Space');
    expect(res.statusCode).toBe(200);
  });
  
  afterAll(done => {
    server.close()
    done()
  });
  
});
