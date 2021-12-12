const mongoose = require('mongoose')
const password = require('./password.js')
const connectionString = `mongodb+srv://aguileramalave:${password}@cluster0.soci1.mongodb.net/apiErrorDataBase?retryWrites=true&w=majority`
// conexion to mondb

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('DataBase connected')
}).catch(error => { console.error(error) })

/* const httpError = new HttpError({
  title: 'Continue',
  content: '',
  error: '100'
})

httpError.save().then(result => {
  console.log(result)
  mongoose.connection.close()
}).catch(error => {
  console.error(error)
}) */
