const mongoose = require('mongoose')

const httpErrorSchema = new mongoose.Schema({
  title: String,
  content: String,
  error: String
})

httpErrorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const HttpError = mongoose.model('httpError', httpErrorSchema)

module.exports = HttpError
