
/*
console.log(navigator.cookieEnabled);
document.cookie = "primeiroNome=Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
document.cookie = "ultimoNome=Estrela; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
console.log(document.cookie);
deletarCookie("primeiroNome");
deletarCookie("ultimoNome");
deletarCookie("email");
*/

const primeiroTexto = document.querySelector("#primeiroTexto");
const ultimoTexto = document.querySelector("#ultimoTexto");
const botaoEnviar = document.querySelector("#enviar");
const cookieBotao = document.querySelector("#cookies");
const limparBotao = document.querySelector("#limpar");

botaoEnviar.addEventListener("click", () => {
    setCookie("primeiroNome", primeiroTexto.value, 365);
    setCookie("ultimoNome", ultimoTexto.value, 365);
})

cookieBotao.addEventListener("click", () => {
    primeiroTexto.value = getCookie("primeiroNome");
    ultimoTexto.value = getCookie("ultimoNome");
    console.log(document.cookie);
})

limparBotao.addEventListener("click", () => {
    deletarCookie("primeiroNome");
    deletarCookie("ultimoNome");
    console.log(document.cookie);
})


function setCookie(nome, valor, diasParaViver){
    const data = new Date();
    data.setTime(data.getTime() + (diasParaViver * 24 * 60 * 60 * 1000));
    let expira = "expira =" + data.toUTCString();
    document.cookie = `${nome}=${valor}; ${expira}; path=/`;
}
function deletarCookie(nome){
    setCookie(nome, null, null);
}
function getCookie(nome){
    const cookieDecodificado = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecodificado.split("; ");
    let resultado = null

    cookieArray.forEach(elemento => {
        if(elemento.indexOf(nome) == 0){
            resultado = elemento.substring(nome.length + 1);
        }
    })
    return resultado;
    console.log(cookieArray);
}