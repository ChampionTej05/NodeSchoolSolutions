const fs = require('fs');
const path = require('path');


function readDirectoryContents(dirPath, fileExtension, callback){
  fs.readdir(dirPath, (err , files) =>{
    // console.log(files);
    if (err) {
      return callback(err)
    }
    const filteredFiles = []
    files.forEach((file) =>{
      const extension  = path.extname(file);
      
      // console.log('Extension : ', extension);
      if ( extension === "."+fileExtension){
        filteredFiles.push(file);
      }
    });
    callback(null, filteredFiles)
  })
}


module.exports = readDirectoryContents;