import fs from 'node:fs/promises'
import querystring from 'node:querystring'


export function postData(jsonPath, res) {
    if (req.method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk.toString();
    });
    req.on('end', () => {
      const postData = querystring.parse(data);
      console.log('POST data:', postData);
      res.end('Data received');
    });
  } else {
    res.end('Send a POST request to this endpoint');
  }
}