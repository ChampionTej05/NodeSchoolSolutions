const http = require('http');
const bl = require('bl');
const { callbackify } = require('util');
const { lookupService } = require('dns');
const args = process.argv;

// // get the data for each url 

// function getData(url, callback){
//   http.get(url, (response)=>{
//     response.pipe(bl((err, data) =>{
//       if (err){
//         return callback(err);
//       }
//       data = data.toString();
//       callback(null, data);
//     }))

//   })
// }


// url = args[2];
// getData(url,  ((err, data) =>{
//     if(err){
//       return console.error(err);
//     }
//     console.log(data);
//     url = args[3];
//     getData(url , ((err , data) =>{
//       if(err){
//         return console.error(err);
//       }
//       console.log(data);
//       url = args[4];
//       getData(url, ((err, data)=>{
//         if(err) return console.error(err);
//         console.log(data);
//       }))
//     }))
// }))


// Refactor getData to return a Promise
function getData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      response.pipe(bl((err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data.toString());
        }
      }));
    });
  });
}

// Async function to handle the order of requests
async function fetchDataInOrder() {
  try {
    // Assuming args[2], args[3], and args[4] are your URLs
    const urls = [args[2], args[3], args[4]];

    for (const url of urls) {
      const data = await getData(url);
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
}

// Call the async function
fetchDataInOrder();

