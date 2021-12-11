import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  // Formas de pasar variables a la vista. LOCAL PARA ESTA VISTA
  res.locals.name = 'antes Maricarmen'
  res.render('index', { name2: 'Paco' })
})

export default router
