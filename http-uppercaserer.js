const http = require('http');
const args = process.argv;

const port = Number(args[2]);


const server = http.createServer((request, response) =>{

  // if it is get method, no work 
  if (request.method == 'POST'){
    let body = '';
    request.on('data', ((chunk) =>{
      body+=chunk
    }));
    request.on('end', ()=>{
      const upperCase = body.toUpperCase();
      response.writeHead(200, {'content-type': 'text/plain'});
      response.end(upperCase);
    })
  }
});

server.listen(port);