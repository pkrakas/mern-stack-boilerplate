const route = require('express').Router()
const UserController = require('../controllers/user.controller')

route.get('/all', UserController.GetUsers)

module.exports = route