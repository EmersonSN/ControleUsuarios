const express = require('express')
const routes = require('./routes')//importando a funcionalidade routes do file routes

const app = express()

app.use(routes)
app.use(express.json)//express se comunicará via JSON
app.listen(8080)