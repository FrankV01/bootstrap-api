import restify, {Request, Response, Next} from 'restify'
import dotenv from 'dotenv';

dotenv.config();


const port = process.env.PORT || "3000";

function respond(req:Request, res: Response, next: Next) {
  res.send(`⚡ Restify + TypeScript Server`);
  next();
}
function respond_hello(req: Request, res: Response, next: Next) {
  res.send('hello ' + req.params.name);
  next();
}

const server = restify.createServer();
server.get('/hello/:name', respond_hello);
server.head('/hello/:name', respond_hello);

server.get('/', respond);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export {
  server,
  restify
}