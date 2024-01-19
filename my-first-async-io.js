const fs = require('fs');

const filePath = process.argv[2];
fs.readFile(filePath, (err, data) =>{
  if (err){
    console.error('Error occured');
  }else{
    const contents = data.toString().split("\n");
    console.log(contents.length - 1);
  }
  
});