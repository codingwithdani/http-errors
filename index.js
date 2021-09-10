let httpErrors = [
    {
        "id": 1,
        "title": "Continue",
        "content": "",
        "error": "100"
    },
    {
        "id": 2,
        "title": "Switching Protocols",
        "content": "",
        "error": "101"
    },
    {
        "id": 3,
        "title": "Processing",
        "content": "",
        "error": "102",
    }
]

const { request, response } = require('express')
const express = require('express')
const app = express()
/* const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(httpErrors))
}) */

app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
})

app.get('/api/errors', (request, response) => {
    response.json(httpErrors)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)