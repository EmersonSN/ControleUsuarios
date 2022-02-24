const Sequelize =  require ('sequelize')//importando a classe Sequelize
const dbConfig = require('../config/database.js')//importando as configurações do DB
const User = require('../models/User')

const dbConnection = new Sequelize(dbConfig) //fazendo a conexão do banco de dados, passando os parametros já configurados

User.init(dbConnection)

module.exports = dbConnection