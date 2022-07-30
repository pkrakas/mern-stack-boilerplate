const User = require('../models/User')
const userRouter = require('express').Router()

userRouter.get('/users', async (req, res) => {
    const users = await User.find({}).select('-password')
    res.send(users)
})

module.exports = userRouter