const http = require("http");
const express = require("express");
const app = express();
const utils = require("./routes");

const server = http.createServer(utils);
server.listen(3000);
