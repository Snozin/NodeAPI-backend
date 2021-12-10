const mongoose = require('mongoose')
require('dotenv').config()

// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// dotenv.config()

mongoose.connection.on('error', (error) => {
  console.log('Error durante el proceso de conexión:', error)
  process.exit(1)
})

mongoose.connection.once('open', () => {
  console.log('MongoDB conectado a:', mongoose.connection.name)
})

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
})

module.exports = mongoose.connection

// export default mongoose.connection
