/* PROGRAMA PARA CALCULAR A ÁREA DA CIRCUNFERÊNCIA (SEM CONST)
let pi = 3.14159;
let raio;
let circunferencia;

raio = window.prompt("Digite o raio do círculo");
raio = Number(raio);

circunferencia = 2 * pi * raio;

console.log("A área da circunferência é", circunferencia);
*/

/* PROGRAMA PARA CALCULAR A ÁREA DA CIRCUNFERÊNCIA (COM CONST)  
USAMOS CONST NESSE PROGRAMA PARA NÃO MUDARMOS A VARIÁVEL "PI"
AS OUTRAS VARIÁVEIS SEMPRE SE ATUALIZARÃO AO RODAR O PROGRAMA*/

const PI = 3.14159;
let raio;
let circunferencia;

raio = window.prompt("Digite o raio do círculo");
raio = Number(raio);

circunferencia = 2 * PI * raio;

console.log("A área da circunferência é", circunferencia);
document.getElementById("resultado").innerHTML = "A área da circunferência é: " + circunferencia;