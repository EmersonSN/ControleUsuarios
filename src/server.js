const express = require('express')
const routes = require('./routes')//importando a funcionalidade routes do file routes
require('./database/index')

const app = express()

app.use(express.json())//express se comunicará via JSON
app.use(routes)
app.listen(8080)