
const fs = require('fs');
const args = process.argv;
// assuming args is always passed
const filePath  = args[2] || '';

if(filePath!=''){
  const readBuffer = fs.readFileSync(filePath);
  const buffString = readBuffer.toString();

  const splitLines = buffString.split("\n");
  console.log(splitLines.length-1)
}else{
  console.log(0);
}
