const mongoose = require('mongoose')

const connectDB = () => 
    mongoose.connect(process.env.DB_URI)
        .then(() => console.log("\x1b[32m", '__ Connected to MongoDB. __'))
        .catch(err => console.log("\x1b[31m", `__ Failed to connect to MongoDB: ${err} __`))

module.exports = connectDB