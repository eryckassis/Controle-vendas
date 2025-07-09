import ColecaoDeProdutos from "./colecaoDeProdutos.js";

class NomeProduto {
  constructor(valor) {
    this.valor = valor;
  }
  ehIgualA(outroNome) {
    return this.valor === outroNome.valor;
  }
  exibir() {
    return this.valor;
  }
}

class Produto {
  constructor(nomeProduto, quantidade) {
    this.nomeProduto = nomeProduto;
    this.quantidade = quantidade;
  }
  mesmoProduto(outroProduto) {
    return this.nomeProduto.ehIgualA(outroProduto.nomeProduto);
  }
  diminuirQuantidade(valor) {
    if (valor > this.quantidade) {
      throw new Error("Quantidade insuficiente para diminuir.");
    }
    this.quantidade -= valor;
  }
  quantidadeDisponivel() {
    return this.quantidade;
  }
  exibirNome() {
    return this.nomeProduto.exibir();
  }
}

class Estoque {
  constructor() {
    this.colecao = new ColecaoDeProdutos();
  }

  adicionarProdutos(produto) {
    this.colecao.adicionar(produto);
  }

  removerProdutos(produto) {
    this.colecao.remover(produto);
  }

  buscarProduto(produto) {
    return this.colecao.encontrar(produto);
  }

  listarProdutos() {
    return this.colecao.listar();
  }
}

class Venda {
  constructor(estoque) {
    this.estoque = estoque;
  }

  vender(produto, quantidade) {
    const produtoNoEstoque = this.estoque.buscarProduto(produto);
    if (!produtoNoEstoque)
      return `Produto não encontrado: ${produto.exibirNome()}`;
    if (produtoNoEstoque.quantidadeDisponivel() < quantidade)
      return `Estoque insuficiente para: ${produto.exibirNome()}`;
    produtoNoEstoque.diminuirQuantidade(quantidade);
    if (produtoNoEstoque.quantidadeDisponivel() === 0) {
      this.estoque.removerProduto(produto);
    }
    return `Venda Realizada de ${quantidade} unidade(s) de ${produto.exibirNome()}.`;
  }
}
console.log("Modelo de Estoque carregado com sucesso!");

export { NomeProduto, Produto, Estoque, Venda };
