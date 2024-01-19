const readDirectoryContents = require('./mymodule');
const args = process.argv;

readDirectoryContents(args[2], args[3], (err, data) =>{
  if(err) {
    return 
  }
  data.forEach((file)=>{
    console.log(file);
  })
})