//Server Imports
const express = require('express');

//Middleware
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

const server = express();

//Server Configuration
server.use(
    express.json(),
    helmet(),
    cors(),
    logger('dev')
)

// HOMEPAGE ROUTING
server.get("/", async (req, res) => {
    res.json({ message: "Server Is Working" });
  });

module.exports = server;