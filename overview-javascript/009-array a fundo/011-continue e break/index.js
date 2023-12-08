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

for(let item of myArrayObj) {
  if(item.nome === "nay") {
    console.log("o ozao ta te esperando");
    continue;
  }

  if(item.nome === "jose") {
    console.log("lembrar de enviar sms");
    break;
  }

  console.log(item)
}