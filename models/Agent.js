const mongoose = require('mongoose')

const agentSchema = mongoose.Schema(
  {
    name: { type: String, index: true },
    age: { type: Number, index: true },
  },
  { collection: 'agents' }
)

// agentSchema.statics.list = function (filter, limit, skip, fields, sort) {
//   const query = Agent.find(filter)
//   query.limit(limit)
//   query.skip(skip)
//   query.select(fields)
//   query.sort(sort)
//   return query.exec()
// }

const Agent = mongoose.model('Agent', agentSchema)

module.exports = Agent
