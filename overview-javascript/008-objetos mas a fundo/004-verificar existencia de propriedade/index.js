/**
 * hasOwnProperty 
 * 
 * property name in Object
 * 
 */


const Tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{ nome: "nike" },{nome: "adidas"}],
  secret: 124234,
  n: 5,
  link: { a: "a", b: { c: "C" } }
}



console.log(Tenis.hasOwnProperty("teste"))
console.log("tamanho" in Tenis)