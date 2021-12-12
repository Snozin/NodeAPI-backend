import express, { json } from 'express'
import createError from 'http-errors'
// import asyncHandler from 'express-async-handler'
import { Advert } from '../../models'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    JSON.parse('asd')
    const adverts = await Advert.find()
    res.json({ data: adverts })
  } catch (err) {
    next(createError(500, `Error al obtener datos de la BD. \n ${err}`))
  }
})

export default router
