import express from 'express'
import { Advert } from '../models'
const router = express.Router()

/* GET home page. */
// router.get('/', (req, res, next) => {
// Formas de pasar variables a la vista. LOCAL PARA ESTA VISTA
// res.locals.title = 'NodeAPI'
// res.render('index', {name: paco})
// next()
// })

router.get('/', async (req, res, next) => {
  res.locals.title = 'NodeAPI'
  try {
    const { name, tags, sale, price, skip, limit, select, sort } = req.query
    const filter = {
      ...(name ? { name: new RegExp(name, 'i') } : {}),
      ...(price ? { price: getPriceValues(price) } : {}),
      ...(tags ? { tags: tags.split(' ') } : {}),
      ...(sale !== undefined ? { sale: sale } : {}),
    }

    const adverts = await Advert.filterList(filter, skip, limit, select, sort)

    console.log(adverts)
    res.render('index', { results: adverts })
  } catch (error) {
    next(error)
  }
})

export default router
