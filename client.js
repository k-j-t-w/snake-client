// imports our requirements
const net = require("net");
const { IP, PORT } = require('./constants');

// this function establishes a connection based on the given IP and PORT (which are declared in our constants file)
const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // on a successful connection, do this
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: KW');
  });

  // interprets incoming data and logs it to the console
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };