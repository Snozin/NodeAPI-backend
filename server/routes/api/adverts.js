import express, { json } from 'express'
import createError from 'http-errors'
// import asyncHandler from 'express-async-handler'
import { Advert } from '../../models'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const adverts = await Advert.find()
    res.json({ data: adverts })
  } catch (error) {
    next(createError(500, `Error al obtener datos de la BD. ${error}`))
  }
})

router.get('/:id', async (req, res, next) => {
  const _id = req.params.id
  try {
    const advert = await Advert.find({ _id })
    
    res.json({ data: advert })
  } catch (error) {
    next(createError(500, `Error al obtener el valor con id: ${_id}. ${error}`))
  }
})

export default router
