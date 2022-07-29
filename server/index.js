require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3010

app.use(express.json())
app.use(cors())



app.listen(() => console.log(`Server is listening on PORT ${PORT}.`))
