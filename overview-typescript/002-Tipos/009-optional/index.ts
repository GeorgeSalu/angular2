const fn = (nome: string, idade?: number) => {
  if(!idade) {
    return `nome: ${nome}, idade : sem valor definido`
  }

  return `nome : ${nome}, idade ${idade}`
}

console.log(fn("george", 10))
console.log(fn("george"))

const pessoa: { nome: string, idade?: number } = {nome: "george", idade: 20}