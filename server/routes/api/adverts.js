import express from 'express'
import createError from 'http-errors'
import { Advert } from '../../models'

const router = express.Router()

const msg404 = 'No se encontró el elemento:'

router.get('/', async (req, res, next) => {
  try {
    const adverts = await Advert.find()

    res.json({ result: adverts })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id
    const advert = await Advert.find({ _id })

    if (advert.length === 0) {
      next(createError(404, `${msg404} ${_id}`))
      // res.status(404).json({ error: `${msg404} ` })
      return
    }

    res.json({ result: advert })
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const advertData = req.body
    const advert = new Advert(advertData)
    const createdAdvert = await advert.save()

    res.status(201).json({ result: createdAdvert })
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id
    const { deletedCount } = await Advert.deleteOne({ _id })

    if (deletedCount === 0) {
      next(createError(404, `${msg404} ${_id}`))
      return
    }

    res.json({ result: 'deleted.' })
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const _id = req.params.id
    const advertData = req.body
    const advert = await Advert.findOneAndUpdate({ _id }, advertData, {
      new: true, //Devuelve el estado después de la actualización
    })

    if (!advert) {
      next(createError(404, `${msg404} ${_id}`))
      return
    }

    res.json({ result: advert })
  } catch (error) {
    next(error)
  }
})

export default router
