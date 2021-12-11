import express from 'express'
// import asyncHandler from 'express-async-handler'
import { Advert } from '../../models'

const router = express.Router()

// router.get(
//   '/',
//   asyncHandler(async (req, res, next) => {
//     const adverts = Advert.find()
//     res.json({results: adverts})
//   })
// )

router.get('/', async (req, res, next) => {
  const adverts = await Advert.find()
  res.json({ results: adverts })
})

export default router
