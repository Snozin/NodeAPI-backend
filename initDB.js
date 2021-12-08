'use strict'

require('dotenv').config()

const mongoose = require('mongoose')
const readline = require('readline')
const connection = require('./lib/MongooseConnection.js')
// const { Agent, User } = require('./models')
const { User } = require('./models')

const main = async () => {
  await new Promise((resolve, reject) => {
    connection.once('open', resolve)
    connection.once('error', reject)
  })

  if (!(await confirm('¿Quires inicializar la BD? (yes/no)'))) {
    console.log('Proceso abortado. No se ha borrado nada')
    return process.exit(0)
  }

  // await dropCollection('Users')
  // await initAgents()
  await initUsers()

  mongoose.connection.close()
}

const initAgents = async () => {
  const { deletedCount } = await Agent.deleteMany()
  console.log(`Eliminados ${deletedCount} agentes.`)

  const result = await Agent.insertMany([
    {
      name: 'Smith',
      age: 30,
    },
    {
      name: 'Doe',
      age: 0,
    },
  ])
  console.log(`Insertados ${result.length} agentes.`)
}

const initUsers = async () => {
  const { deletedCount } = await User.deleteMany()
  console.log(`Eliminados ${deletedCount} usuarios`)

  const result = await User.insertMany([
    {
      email: 'admin@example.com',
      password: 1234,
    },
    {
      email: 'user@example.com',
      password: 1234,
    },
  ])
  console.log(`Insertados ${result.length} usuarios.`)
}

// Eliminar la tabla Agentes completa
const dropCollection = async (collection) => {
  // const dropped = await connection.dropCollection("agents")
  const dropped = await connection.dropCollection(collection)
  console.log('Borrado', dropped)
}

const confirm = (questionText) =>
  new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    rl.question(questionText, (answer) => {
      rl.close()
      if (answer.toLowerCase() === 'yes') {
        resolve(true)
        return
      }
      resolve(false)
    })
  })

main().catch((err) => console.log(err))
