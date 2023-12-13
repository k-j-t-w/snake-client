const { connect } = require('./client.js')
const { setupInput } = require('./input.js')
conn =  connect();

console.log("Connecting ...");
setupInput(conn);