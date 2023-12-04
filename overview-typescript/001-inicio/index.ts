// typescript
// npm install -g typescript
// tsc --init

// plugin: code runner
// npm i -g ts-node
// ctrl + alt + n

console.log('typescript')

const pedido = (pedido: string) => {
  return `Deu bom o seu pedido ${pedido}`
}

console.log(pedido("123"))