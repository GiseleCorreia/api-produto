const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')
const cors = require('cors')

const dbConn = new Sequelize('donuts', 'root', '', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  define: {}
})

async function hasConection() {
  try {
    await dbConn.authenticate()
    console.log('Banco de dados contectado!')
  } catch (error) {
    console.error('Erro ao conectar o banco de dados!')
  }
}

Object.assign(dbConn, {
  hasConection
})

module.exports = dbConn
