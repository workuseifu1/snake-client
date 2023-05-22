const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();  
  stdin.on("data", handleUserInput);  
  return stdin;
};
// when Ctrl + C key pressed on a keyboard it will exit
const handleUserInput = function (key) {    
 if(key === '\u0003') {  
   process.exit();
 } 
};

module.exports = { setupInput }; 