import restify, {Request, Response, Next} from 'restify'
import dotenv from 'dotenv';

dotenv.config();


const port = process.env.PORT || "3000";

function example(req:Request, res: Response, next: Next) {
  console.log('='.repeat(100));
  console.log('example')
  console.log(req.url);
  next()
}

function respond(req:Request, res: Response, next: Next) {
  res.send(`⚡ Restify + TypeScript Server`);
  next();
}
function respond_hello(req: Request, res: Response, next: Next) {
  res.send('hello ' + req.params.name);
  next();
}

const server = restify.createServer();
server.get('/hello/:name', [example, respond_hello]);
server.head('/hello/:name', [example, respond_hello]);

server.get('/', [example, respond]);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export {
  server,
  restify
}