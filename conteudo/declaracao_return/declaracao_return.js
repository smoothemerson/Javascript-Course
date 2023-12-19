let area;
let largura;
let altura;

largura = window.prompt("Digite a largura");
altura = window.prompt("Digite a altura");

area = getArea(largura, altura);

console.log("A area é: ", area);

function getArea(largura, altura){
    let resultado = largura * altura;
    return resultado;
}