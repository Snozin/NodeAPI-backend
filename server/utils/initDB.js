import 'regenerator-runtime/runtime'
import dotenv from 'dotenv'
dotenv.config()

import connection from '../lib/MongooseConnection'
import {Advert } from '../models'

const main = async () => {
  await new Promise((resolve, reject) => {
    connection.once('open', resolve)
    connection.once('error', reject)
  })

  await initAdverts()
  connection.close()
}

const initAdverts = async () => {
  try {
    const { deletedCount } = await Advert.deleteMany()
    console.log(`Eliminados ${deletedCount} anuncios`)

    const inserted = await Advert.loadJSON()
    console.log(`Insertados ${inserted.length} anuncios`)
  } catch (error) {
    console.log(error)
  }
}

main().catch((err) => console.log(err))
