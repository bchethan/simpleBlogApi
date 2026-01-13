import http from "node:http";
import path from "node:path";
import { getData } from "./utils/getData.js";

const port = 8000;
const __dirname = import.meta.dirname

const server = http.createServer(async(req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const jsonPath = path.join(__dirname,'data', 'posts.json')

  if(req.url === '/api' && req.method === 'GET'){
    getData  (jsonPath, res)
  }
});

server.listen(port, () =>
  console.log(`Hey its live at http:localhost:${port}`)
);
