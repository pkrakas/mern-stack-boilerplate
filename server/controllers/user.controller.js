const User = require('../models/User')

async function GetUsers(req, res) {
    const users = await User.find({}).select('-password')
    res.send(users)
}

module.exports = {
    GetUsers
}