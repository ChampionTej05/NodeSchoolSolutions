const strftime = require('strftime');
const net = require('net');
const args = process.argv;

const port = args[2];

const dateFormat = "%F %H:%M";


const server = net.createServer((socket) =>{
  const today = strftime(dateFormat, new Date());
  socket.end(today.toString()+ "\n");
})

server.listen(Number(port));