const myArrayObj = [
  {
    nome: "dener",
    sobrenome: "silva"
  },
  {
    nome: "nay",
    sobrenome: "silva"
  },
  {
    nome: "jose",
    sobrenome: "silva"
  }
];

myArrayObj.forEach((item, index) => {
  console.log(index, item.nome)
})