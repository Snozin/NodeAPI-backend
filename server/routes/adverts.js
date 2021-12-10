import express from 'express'
import asyncHandler from 'express-async-handler'
import path from 'path'
import fs from 'fs/promises'
// import { Advert } from '../../models'

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

    // const numAdverts = await Advert.loadJSON(file)
    
    const data = await fs.readFile(file, { encoding: 'utf-8' })
    // console.log(numAdverts)
    console.log('Cosa mala aaaa')

    // res.json(adverts)
    res.json(JSON.parse(data))
    // res.send(path.join(__dirname, '../../anuncios.json'))
  })
)

export default router
