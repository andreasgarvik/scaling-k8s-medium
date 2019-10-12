const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

// Config
const app = express()
app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

// Routes
const twitter = require('./routes/twitter')
app.use('/api/twitter', twitter)

// Startup
const PORT = process.env.PORT || 8080
app.listen(PORT)
