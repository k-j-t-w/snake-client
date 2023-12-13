const { connect } = require('./client.js');
const { setupInput } = require('./input.js');
let conn =  connect();

console.log("Connecting ...");
setupInput(conn);