const express = require('express')
const routes = express.Router() //Usando somente a funcionalidade de rotas do express

routes.get('/', (req, res) =>{
    console.log('Servidor em funcionamento')//teste de conexão
    return res.json({ id1: 'Funcionando'})//teste de API
})

module.exports = routes //exportando a funcionalidade routes 