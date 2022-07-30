require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./lib/connectDB')
const loadRoutes = require('./routes/index')

const PORT = process.env.PORT || 3010

app.use(express.json())
app.use(cors())

loadRoutes(app)

connectDB()
app.listen(() => console.log(`Server is listening on PORT ${PORT}.`))
