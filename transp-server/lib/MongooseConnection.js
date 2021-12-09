"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const mongoose = require('mongoose')
_dotenv["default"].config();

_mongoose["default"].connection.on('error', function (error) {
  console.log('Error durante el proceso de conexión:', error);
  process.exit(1);
});

_mongoose["default"].connection.once('open', function () {
  console.log('MongoDB conectado a:', _mongoose["default"].connection.name);
});

_mongoose["default"].connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true // useCreateIndex: true,

}); // module.exports = mongoose.connection


var _default = _mongoose["default"].connection;
exports["default"] = _default;