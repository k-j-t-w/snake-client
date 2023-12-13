let connection;


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  };

  if (key === 'w') {
    conn.write("Move: up");
  };

  if (key === 'a') {
    conn.write("Move: left");
  };

  if (key === 's') {
    conn.write("Move: down");
  };

  if (key === 'd') {
    conn.write("Move: right");
  };

  if (key === 'z') {
    conn.write("Say: whatsUp");
  };

  if (key === 'x') {
    conn.write("Say: lol");
  };

  if (key === 'c') {
    conn.write("Say: howdy");
  };
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput}