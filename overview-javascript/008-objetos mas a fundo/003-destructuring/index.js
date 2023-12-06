const Tenis = {
  tamanho: 45,
  estoque: true,
  marcas: [{ nome: "nike" },{nome: "adidas"}],
  secret: 124234,
  n: 5,
  link: { a: "a", b: { c: "C" } }
}

const { tamanho, estoque, marcas } = Tenis;

console.log(tamanho, estoque, marcas)

const { secret: randonNumber, n: avaliacoes } = Tenis
console.log(randonNumber)
console.log(avaliacoes)

const { link: { a } } = Tenis
console.log(a)