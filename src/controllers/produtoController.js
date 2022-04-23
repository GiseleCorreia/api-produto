const Produtos = require('../models/Produtos')

const produtoController = {
  listarProduto: async (req, res) => {
    const listaDeProdutos = await Produtos.findAll()
    res.json(listaDeProdutos)
  },

  async cadastrarProduto(req, res) {
    const { nome, preco, quantidade } = req.body

    const novoProduto = await Produtos.create({
      nome,
      preco,
      quantidade
    })

    res.json(novoProduto)
  },

  async deletarProduto(req, res) {
    const { id } = req.params

    await Produtos.destroy({
      where: {
        id
      }
    })

    res.json('Produto Deletado')
  },

  async atualizarProduto(req, res) {
    const { id } = req.params
    const { nome, preco, quantidade } = req.body

    const produtoAtualizado = await Produtos.updade(
      { nome, preco, quantidade },
      {
        where: {
          id
        }
      }
    )
    res.json('Produto Atualizado')
  }
}

module.exports = produtoController
