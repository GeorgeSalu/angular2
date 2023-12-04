const error = (): never => {
  throw new Error("Algo deu errado")
}

console.log(error())