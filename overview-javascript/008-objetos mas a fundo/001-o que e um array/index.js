let tenis = {
  tipo: "tenis de corrida",
  cardaco: "g",
  estoque: false,
  tamanho: {
    palmilha: 39,
    tenis: 40,
    caixa: {
      largura: 35,
      altura: 40,
      profundidade: 10
    },
  },
  marca: [
    {
      nome: "nike"
    },
    {
      nome: "adidas"
    },
    {
      nome: "etc"
    }
  ],
  getMarcaArrayValores: function(param) {
    return this.marcaArrayObj[para]
  },
  getMarcaArrayObj: function(param) {
    return this.marcaArrayObj[para].nome
  }
}

console.log(tenis);
console.log(tenis.tipo);
console.log(tenis.tamanho);