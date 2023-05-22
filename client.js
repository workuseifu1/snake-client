
const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handling message from server
  conn.on("data", (data) => {
    console.log(data);    
  });
  //print a message to the screen and send name of the player to server
  conn.on("connect", () => {    
    conn.write("Name: W");
  });
  conn.on("connect", () => {
    // conn.write("Move: up");
    // conn.write("Move: up");
    // conn.write("Move: up");
    // conn.write("Move: up");
    // setTimeout(() => { conn.write("Move: up"); }, 50)
    // setTimeout(() => { conn.write("Move: left"); }, 150)
    // setTimeout(() => { conn.write("Move: down"); }, 100)
    // setTimeout(() => { conn.write("Move: right"); }, 200)
  });
    // send the string moves as data to the server
    
  
  return conn;
}


module.exports = { connect };  