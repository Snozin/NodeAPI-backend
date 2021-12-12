import mongoose from 'mongoose'
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

// Cargar json de anuncios
advertSchema.statics.loadJSON = async function (file) {
  const data = await fs.readFile(file, { encoding: 'utf-8' })

  if (!data) throw new Error(`${file} está vacío!`)

  const adverts = JSON.parse(data).anuncios
  const numAdverts = adverts.length

  for (const ad of adverts) {
    await new Advert(ad).save()
  }

  return numAdverts
}

const Advert = mongoose.model('Advert', advertSchema)

export default Advert
