// declaring connection globally so it can be accessed in all scopes
let connection;

// fetches our constants
const { commands }= require('./constants')

// this function takes in a connection and sets up input from the user, 
// it then takes the inputs and passes them in the handleUserInput function
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

// this function takes an input and writes to the server a command, based off our commands object
const handleUserInput = function(key) {
  if (key === '\u0003') {process.exit()}

  if (commands[key]) {connection.write(commands[key])}

};

module.exports = { setupInput };