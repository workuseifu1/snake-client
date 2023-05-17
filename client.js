
const net = require("net");
// establishes a connection with the game server

  const conn = net.createConnection({  
    host: "localhost",
    port: 50541
  });  
  // interpret incoming data as text
  const myEncode = conn.setEncoding("utf8");
  
  // handling message from server
  const myMessage = conn.on("data", (data) => {
    console.log(data)
  });
  module.exports = {conn,myEncode,myMessage};  //object destucturing