const myArray = [1,2,3,4,5,6];
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
]

for(let i = 0; i < myArrayObj.length; i++) {
  //console.log(myArray[i])
  console.log(myArrayObj[i])
}

console.log("--------------")

const obj = { nome: "dener", sobrenome: "silva" }

for(let item in obj) {
  console.log(item)
}