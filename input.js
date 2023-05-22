let connection;
const setupInput = function (conn) {
  connection = conn;   //set the same scope as the connect object
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();  
  stdin.on("data", handleUserInput);  
  return stdin;
};
// when Ctrl + C key pressed on a keyboard it will exit and to controle the game with keys.
const handleUserInput = function (key) {    
 if(key === '\u0003') {  
   process.exit();
 }
 if (key === 'w') {
  connection.write("Move: up");
 }
 if (key === 'a') {
  connection.write("Move: left");
 }
 if (key === 's') {
  connection.write("Move: down");
 }
 if (key === 'd') {
  connection.write("Move: right");
 }
};

module.exports = { setupInput }; 