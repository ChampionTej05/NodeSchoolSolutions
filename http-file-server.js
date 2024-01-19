const http = require('http');
const fs = require('fs'); 

const args = process.argv;
const port = Number(args[2]);
const filePath = args[3];

// fs.createReadStream(filePath)

// const server = http.createServer((request, response) =>{
//   let result = ''
//   const readStream = fs.createReadStream(filePath);
//   readStream.on('data', ((chunk) =>{
//     result+=chunk
//   }));
//   readStream.on('end', ()=>{
//     response.end(result);
//   })
// })

http.createServer((request, response) =>{
  response.writeHead(200, {'content-type': 'text/plain'});
  fs.createReadStream(filePath).pipe(response);
})
.listen(port)

// server.listen(port);