const error = (): never => {
  throw new Error("Algo deu errado")
}

//console.log(error())

const validate = (value: any) => {
  if( typeof value === "string") {
    return console.log("é uma string")
  } else if(typeof value === "number") {
    return console.log("é um number")
  }

  console.log(error())
}

validate("D")