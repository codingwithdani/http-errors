/* let httpErrors = [
  {
    id: 1,
    title: 'Continue',
    content: '',
    error: '100'
  },
  {
    id: 2,
    title: 'Switching Protocols',
    content: '',
    error: '101'
  },
  {
    id: 3,
    title: 'Processing',
    content: '',
    error: '102'
  }
] */
require('./mongo')
const logger = require('./loggerMiddleware')
const cors = require('cors')
const express = require('express')
const HttpError = require('./models/HttpError')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (request, response) => {
  response.send('<h1>Hello world</h1>')
})

app.get('/api/errors', (request, response) => {
  HttpError.find({}).then(errors => {
    response.json(errors)
  })
})

app.post('/api/errors', (request, response) => {
  const error = request.body

  if (!error || !error.content) {
    return response.status(400).json({
      error: 'content is missing'
    })
  }

  const newError = {
    title: error.title,
    content: error.content,
    error: error.error
  }

  response.status(201).json(httpErrors)
})

app.get('/api/errors/:id', (request, response, next) => {
  const id = Number(request.params.id)
  const error = httpErrors.find(e => e.id === id)
  if (error) {
    response.json(error)
  } else {
    response.status(404).end()
  }
})

app.use((request, response, next) => {
  response.status(404).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
