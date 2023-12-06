/**
 * Objeto: Tenis (propriedade) "cadarco", "palmilha"
 * Objeto: Celular (Propriedade)
 * Objeto: Drone (Propriedade)
 * 
 * Propriedade / Atributos / Funcionalidade
 */

let Tenis = {
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

console.log(Tenis);
console.log(Tenis.tipo);
console.log(Tenis.tamanho);