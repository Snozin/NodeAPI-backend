#!/usr/bin/env node

/**
 * Module dependencies.
 */
// import "core-js/stable"
"use strict";

require("regenerator-runtime/runtime");

var _app = _interopRequireDefault(require("../app"));

var _http = _interopRequireDefault(require("http"));

var _debug = _interopRequireDefault(require("debug"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var debug = (0, _debug["default"])("expresstuned:server");

_dotenv["default"].config();
/**
 * Get port from environment and store in Express.
 */


var port = normalizePort(process.env.PORT || "3000");

_app["default"].set("port", port);

console.log("Server running on http://localhost:".concat(port));
/**
 * Create HTTP server.
 */

var server = _http["default"].createServer(_app["default"]);
/**
 * Listen on provided port, on all network interfaces.
 */


server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
/**
 * Event listener for HTTP server "error" event.
 */


function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port; // handle specific listen errors with friendly messages

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;

    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;

    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */


function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}