
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

  //print a message to the screen and send name of the player to server
  const myName = conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ww")
  });

  module.exports = {conn,myEncode,myMessage,myName};  //object destucturing