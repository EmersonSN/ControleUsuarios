const Sequelize =  require ('sequelize')//importando a classe Sequelize
const dbConfig = require('./config/database.js')//importando as configurações do DB

const dbConnection = new Sequelize(dbConfig) //fazendo a conexão do banco de dados, passando os parametros já configurados

module.exports = dbConnection