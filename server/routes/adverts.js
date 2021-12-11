import express from 'express'
import asyncHandler from 'express-async-handler'
import path from 'path'
import { Advert } from '../models'

const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    // const start = parseInt(req.query.start) || 0
    // const limit = parseInt(req.query.limit) || 1000 //Limite de registros devueltos por el API
    // const sort = req.query.sort || '_id'
    // const includeTotal = true

    // const {total, rows} = await Advert.listIndexes()

    const file = path.join(__dirname, '../../anuncios.json')

    const numAdverts = await Advert.loadJSON(file)

    res.send(`Se han insertado: ${numAdverts} anuncios`)
  })
)

export default router
