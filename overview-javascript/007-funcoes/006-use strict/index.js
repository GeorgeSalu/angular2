/**
 * o strict mode eleminia alguns erros silenciosos
 * que passariam batido do javascript e os faz emitir erros.
 * 
 * alem disso, essa forma corrige alguns erros que tornam o javascript 
 * dificil de ser otimizado, então alguns vezes os codigos no modo estrito
 * rodam mas otimizados e velozes do que os codigo no modo normal
 * 
 */

"use strict";

(() => {
  teste = "teste"
})();

console.log(teste)