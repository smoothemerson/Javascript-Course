//começar
console.time("timer1");

alert("Click no botão OK!");
setTimeout(() => console.log("Olá!"), 3000);

//fim
console.timeEnd("timer1");


console.time('tempo-de-execucao');

for (let i = 0; i < 200; i++) {
  // Faz alguma coisa dentro do loop
  const resultado = i * 2;
  console.log(resultado);
}

console.timeEnd('tempo-de-execucao');
