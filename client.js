
const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
  host: IP,
  port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handling message from server
  conn.on("data", (data) => {
    console.log(data);
  });
  //create connection between client and server established
  conn.on("connect", () => {
    conn.write("Name: W");
  });
  return conn;
}

module.exports = { connect };  