"use strict";

const div = document.querySelector("div");
console.log(div);

div.innerHTML = "<strong>Esse é meu texto alterado</strong>"

const elementUL = document.createElement("ul");

[1,2,3].forEach((element) => {
  const elementLi = document.createElement("li");
  console.log(elementLi);
  elementLi.innerText = element;
  elementUL.appendChild(elementLi);
})

div.appendChild(elementUL);