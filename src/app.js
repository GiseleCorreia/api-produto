const express = require('express')
const app = express()

const cors = require('cors')
const mysql = require('mysql2/promise')

const dbConn = require('./database')
dbConn.hasConection()

const produtoController = require('./controllers/produtoController')

const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
