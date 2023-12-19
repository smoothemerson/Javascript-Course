let data = new Date();
/*
let data = new Date(0);
let data = new Date(2023, 0, 1, 2, 3, 4, 5);
let data = new Date("Janeiro 1, 2023 00:00:00");

let ano = data.getFullYear();
let diaDoMes = data.getDate();
let diaDaSemana = data.getDay();
let mes = data.getMonth();
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
let milisegundos = data.getMilliseconds();

data.setFullYear(2024);
data.setMonth(11);
data.setDate(31);
data.setHours(23);
data.setMinutes(1);
data.setSeconds(30);
data.setMilliseconds(0);

data = data.toLocaleDateString();
*/
document.getElementById("minhaLabel1").innerHTML = FormatarData(data);
document.getElementById("minhaLabel2").innerHTML = FormatarTempo(data);

function FormatarData(data){
    let ano = data.getFullYear();
    let mes = data.getMonth();
    let dia = data.getDate();

    return `${dia}/${mes}/${ano}`;
}
function FormatarTempo(data){
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let amOuPm = horas >= 12 ? "PM" : "AM";

    horas = (horas % 12) || 12;

    return `${horas}:${minutos}:${segundos}${amOuPm}`;
}



// Criando um objeto Date com a data e hora atual
var dataAtual = new Date();

// Obtendo o dia, mês, ano, horas e minutos da data atual
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Lembrando que os meses são indexados a partir de zero
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();

// Exibindo a data e hora atuais formatadas
console.log("Data atual: " + dia + "/" + mes + "/" + ano);
console.log("Hora atual: " + horas + ":" + minutos);
