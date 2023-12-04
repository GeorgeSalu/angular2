let array1: [string, string, number, boolean] = ["george", "teste", 123, false];
let array2: Array<string | number | boolean> = [true, "george", 123,"silva"];

console.log(array1)
console.log(array2)

let obj1: {nome: string, sobrenome: string, idade: number, deuBom: boolean} = 
{ nome: "george", sobrenome: "silva", idade: 123, deuBom: false }

let obj2: Array<{
  nome: string,
  sobrenome: string,
  idade: number,
  deuBom: boolean
}> = [
  {
    nome: "george",
    sobrenome: "silva",
    idade: 123,
    deuBom: true
  }
]

console.log(obj1)
console.log(obj2)