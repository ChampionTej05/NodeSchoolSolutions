const http = require('http');
const url = require('url');
const args = process.argv;

const port = Number(args[2]);


const server = http.createServer((request, response) =>{

  if (request.method == 'GET'){
    // check if the API PATH is correct 

    const parsedURL = url.parse(request.url, true)
    const path = parsedURL.pathname;
    const query = parsedURL.query;

    if(path == '/api/parsetime'){
      const isoTime = query.iso;
      const date = new Date(Date.parse(isoTime));

      const responseBody = {
        "hour" : date.getUTCHours(),
        "minute": date.getUTCMinutes(),
        "second": date.getUTCSeconds()
      }

      response.writeHead(200, {'content-type': 'application/json'});
      response.end(JSON.stringify(responseBody));
    }else if (path == '/api/unixtime'){
      const isoTime = query.iso;
      const unixTime = Date.parse(isoTime);
      const responseBody   = {
        "unixtime": unixTime
      }
      response.writeHead(200, {'content-type': 'application/json'});
      response.end(JSON.stringify(responseBody));
    }

    // Get query part from the request both 

    // format the ISO time stamp to get hour, minute , second 

    // create JSON for response 


  }

});

server.listen(port);