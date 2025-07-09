class ColecaoDeProdutos {
  constructor() {
    this.produtos = [];
  }
  adicionar(produto) {
    if (this.produtos.some((p) => p.mesmoProduto(produto))) return;
    this.produtos.push(produto);
  }
  remover(produto) {
    this.produtos = this.produtos.filter((p) => !p.mesmoProduto(produto));
  }

  encontrar(produto) {
    return this.produtos.find((p) => p.mesmoProduto(produto));
  }
  listar() {
    return this.produtos.map(
      (p) => `${p.exibirNome()} (${p.quantidadeDisponivel()})`
    );
  }
}

export default ColecaoDeProdutos;
