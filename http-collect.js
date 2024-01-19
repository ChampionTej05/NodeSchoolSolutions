const http = require('http');

const args = process.argv;

const url = args[2];

// http.get(url, (response)=>{
//   response.setEncoding('utf-8')
//   let rawData ='';
//   response.on('data', (chunk) => rawData+=chunk);
//   response.on('end', () =>{
//     console.log(rawData.length);
//     console.log(rawData);
//   });
//   response.on('error', (err) =>{
//     console.error(err);
//   })

// })
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})