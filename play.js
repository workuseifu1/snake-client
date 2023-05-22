const net = require("net");


//import object keys from client.js

const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");
connect();
setupInput(connect()); //return value from connect object pass to setupInput to interact with server.


