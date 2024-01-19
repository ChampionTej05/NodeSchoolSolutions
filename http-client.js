const http = require('http');

const args = process.argv;

const url = args[2];

http.get(url, (response)=>{
  response.setEncoding('utf-8')
  const rawData =[];
  response.on('data', (chunk) => rawData.push(chunk));
  response.on('end', () =>{
    rawData.forEach((data)=> console.log(data))
  });
  response.on('error', (err) =>{
    console.error(err);
  })

})