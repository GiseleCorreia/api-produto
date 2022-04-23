const Sequelize = require('sequelize')
const dbConn = require('../database')

const produtoController = require('../controllers/produtoController')

const Produto = dbConn.define(
  'produto',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    nome: {
      type: Sequelize.STRING(50),
      field: 'nome'
    },
    descricao: {
      type: Sequelize.TEXT,
      field: 'descricao'
    },
    preco: {
      type: Sequelize.DOUBLE,
      field: 'preco'
    },
    estoque: {
      type: Sequelize.INTEGER,
      field: 'estoque'
    },
    linkFoto: {
      type: Sequelize.STRING(255),
      field: 'link_foto'
    }
  },
  {
    freezeTableName: true
  }
)
