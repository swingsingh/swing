const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

const authRoute = require('./routes/auth.routes')
app.use('/api/v1/user', authRoute)

const adminRoute = require('./routes/auth.routes')
app.use('/api/v1/user', authRoute)
module.exports = app