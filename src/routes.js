const express = require('express')
const routes = express.Router() //Usando somente a funcionalidade de rotas do express
const UserController = require('./controllers/UserController')

routes.post('/add-user', UserController.store)

module.exports = routes //exportando a funcionalidade routes 