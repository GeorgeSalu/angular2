let Tenis = {
  tamanho: 45,
  estoque: true,
}

let link = { link: { a: "a", b: { c: "c" } } };

let clone1 = Tenis;
console.log(clone1)

let mesclar1 = Object.assign(Tenis, link);
console.log(mesclar1)