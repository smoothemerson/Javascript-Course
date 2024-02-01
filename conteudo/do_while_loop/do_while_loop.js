let userName;

do{
    userName = window.prompt("Digite seu nome!");
}while(userName == "")

console.log("Olá ", userName);
document.getElementById("xLabel").innerHTML = "Olá " + userName;