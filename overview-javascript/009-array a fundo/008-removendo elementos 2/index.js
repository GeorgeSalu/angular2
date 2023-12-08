let arr = [
  { nome: "dener", tel: "(99) 9999 9999" },
  { nome: "mozao", tel: "(99) 9999 9999" },
  { nome: "amigo 1", tel: "(99) 9999 9999" },
  { nome: "amigo 2", tel: "(99) 9999 9999" },
  { nome: "amigo 3", tel: "(99) 9999 9999" },
]

console.table(arr)

//arr.splice(3,1) remove o indice 3 e so ele
const newArray = arr.slice(0, 3)

console.table(newArray)