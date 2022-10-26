require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

// controller

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())
app.use(express.static('./public'))

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5001

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening on PORT: ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
