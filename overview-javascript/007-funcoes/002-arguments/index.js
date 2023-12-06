function soma(num1,num2) {
  if(typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  return "voce passou dados diferenetes";
}

console.log(soma(1,5))