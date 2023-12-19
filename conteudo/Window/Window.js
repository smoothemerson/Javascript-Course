
/*
console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(window.location.href);
window.location.href = "https://google.com";
console.log(window.location.hostname);
console.log(window.location.pathname);
meuBotao.addEventListener("click", () => window.open(https://google.com));
meuBotao.addEventListener("click", () => window.close());
meuBotao.addEventListener("click", () => window.print());
const meuBotao = document.querySelector("#meuBotao");
window.alert("Olá");
window.confirm("Pressione OK para continuar!");
*/

const meuBotao = document.querySelector("#meuBotao");
meuBotao.addEventListener("click", () => {
    window.close();
})

console.log(window.scrollX);
console.log(window.scrollY);


let idade = window.prompt("Digite sua idade");
if(idade < 18){
    window.alert("Você tem que ter +18 anos para acessar esse site!");
    window.close();
}