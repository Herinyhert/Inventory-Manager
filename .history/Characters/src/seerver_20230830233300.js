const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(morgan("devc"))

module.exports = server;