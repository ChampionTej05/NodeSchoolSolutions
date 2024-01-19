const fs = require('fs');
const path = require('path');
const args = process.argv;
const dirPath = args[2];
const fileExtension = args[3];

// console.log(fileExtension);


fs.readdir(dirPath, (err , files) =>{
  // console.log(files);
  files.forEach((file) =>{
    const extension  = path.extname(file);
    
    // console.log('Extension : ', extension);
    if ( extension === "."+fileExtension){
      console.log(file);
    }
  })
})