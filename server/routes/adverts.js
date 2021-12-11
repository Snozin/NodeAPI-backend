import express from 'express'
// import asyncHandler from 'express-async-handler'
import path from 'path'
import { Advert } from '../models'

const router = express.Router()

// router.get(
//   '/',
//   asyncHandler(async (req, res) => {

//     const file = path.join(__dirname, '../../anuncios.json')

//     const numAdverts = await Advert.loadJSON(file)

//     // res.send(`Se han insertado: ${numAdverts} anuncios`)
//     res.json(numAdverts)
//   })
// )

router.get('/', async (req, res) => {
  const file = path.join(__dirname, '../../anuncios.json')

  const numAdverts = await Advert.loadJSON(file)

  res.send(`Se han insertado: ${numAdverts} anuncios`)
  // res.json(numAdverts)
})

export default router
