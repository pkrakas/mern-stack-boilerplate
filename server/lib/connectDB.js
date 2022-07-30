const mongoose = require('mongoose')

const connectDB = () => 
    mongoose.connect(process.env.DB_URI)
        .then(() => console.log('%cConnected to MongoDB.', 'color: green'))
        .catch(err => console.log(`Failed to connect to MongoDB: ${err}`))

module.exports = connectDB