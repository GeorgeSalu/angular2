const pedidos = [
  { id: 420, nome: "Dener", alimento: "Sandubão de Bacon",  bebida: "Suco Limão",},
  {  id: 152,  nome: "Naiady",  alimento: "Sandubão Vegano",  bebida: "Suco de Laranja",},
  { id: 29, nome: "Marcio", alimento: "Coxinha", bebida: "Suco de Uva" },
  {  id: 33,  nome: "Isabel",  alimento: "Sandubão de Picanha",  bebida: "Refrigerante",},
  { id: 55, nome: "José", alimento: "Pizza", bebida: "Refrigerante" },
];

/**
 * 
 * o metodo map alem de interar todo o array ele é muito bom para editar o iterador
 * 
 */

pedidos.map((element, index) => {
  if(element.id === 29) {
    return (element.alimento = "kibe")
  }
})

console.log(pedidos)