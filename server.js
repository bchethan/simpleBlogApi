import http from "node:http";
import path from "node:path";
import fs from 'node:fs/promises'

const port = 8000;
const __dirname = import.meta.dirname
console.log(__dirname)

const server = http.createServer(async(req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  try{
    const jsonPath = path.join(__dirname,'data', 'posts.json')
    const data = await fs.readFile(jsonPath,'utf8')
    
    res.end(data);
  }catch(err){
    console.log(err)
    res.end({
      "message":"error while loading data"
    })
  }
});

server.listen(port, () =>
  console.log(`Hey its live at http:localhost:${port}`)
);
