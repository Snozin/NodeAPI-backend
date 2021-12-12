import mongoose from 'mongoose'
import path from 'path'
import fs from 'fs/promises'

const advertSchema = mongoose.Schema(
  {
    name: { type: String, index: true },
    price: { type: Number, index: true },
    sale: { type: Boolean, index: true },
    photo: String,
    tags: { type: [String], index: true },
  },
  {
    collection: 'Adverts',
  }
)

advertSchema.statics.filterList = async function (
  filter,
  skip,
  limit,
  select,
  sort
) {
  const query = Advert.find(filter)

  query.skip(parseInt(skip))
  query.limit(parseInt(limit))
  query.select(select)
  query.sort(sort)

  return query.exec()
}

// Cargar json de anuncios
advertSchema.statics.loadJSON = async function () {
  const file = path.join(__dirname, '../../initialAdverts.json')
  const data = await fs.readFile(file, { encoding: 'utf-8' })

  if (!data) throw new Error(`${file} está vacío!`)

  const adverts = JSON.parse(data).adverts
  const insertedAdverts = await Advert.insertMany(adverts)

  return insertedAdverts
}

const Advert = mongoose.model('Advert', advertSchema)

export default Advert
