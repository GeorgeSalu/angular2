/**
 * arrow functions possuem this lexico enquanto o modelo normal possui this dinamico
 * 
 * isso significa que arrow functions herdam o contexto local de onde foi delcarado
 * enquanto o modelo normal possui o contexto associado ao objeto que ele esta vinculado
 * no momento da chamada
 * 
 * se ele estiver associado a ninguem na chamada, ele assumira this automaticamente
 * como o contexto globla, que no caso dos navegadores é window
 *  
 */

function nomeFunc() {
  return "george";
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
  return "george"
}

console.log(nomeFuncArrow())