let idade = window.prompt("Quantos anos você tem ?")

console.log(typeof idade);
idade = Number(idade);
console.log(typeof idade);
idade += 1;

console.log("Feliz Aniversário! Você tem", idade, "anos");


let x;
let y; 
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

document.getElementById("janela1").innerHTML = "Feliz Aniversário! Você tem " + idade + " anos";
document.getElementById("janela2").innerHTML = "O valor atribuído a x é: " + x
document.getElementById("janela3").innerHTML = "O tipo de data de x é: " + typeof x;
document.getElementById("janela4").innerHTML = "O valor atribuído a y é: " + y
document.getElementById("janela5").innerHTML = "O tipo de data de y é: " + typeof y;
document.getElementById("janela6").innerHTML = "O valor atribuído a z é: " + z
document.getElementById("janela7").innerHTML = "O tipo de data de z é: " + typeof z;