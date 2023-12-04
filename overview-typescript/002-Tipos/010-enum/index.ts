enum Mes {
  JAN = "Janeiro",
  FEV = "Fevereiro",
  MAR = "Marco",
}

const pessoa: { nome: string, mesAniversario: string } = {
  nome: "george",
  mesAniversario: Mes.JAN
}

if(pessoa.mesAniversario === Mes.JAN) {
  console.log(pessoa)
}