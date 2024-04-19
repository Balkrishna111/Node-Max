const http = require("http");
const utils = require("./routes");

const server = http.createServer(utils);
server.listen(3000);
