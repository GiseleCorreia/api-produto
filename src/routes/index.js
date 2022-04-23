const express = require('express')
const produtoController = require('../controllers/produtoController')
const routes = express.Router()

routes.post('/produto/cadastro', produtoController.cadastrarProduto)
routes.get('/produto/lista', produtoController.listarProduto)
routes.delete('/produto/:id/deletar', produtoController.deletarProduto)
routes.put('/produto/:id/atualizar', produtoController.atualizarProduto)

module.exports = routes
