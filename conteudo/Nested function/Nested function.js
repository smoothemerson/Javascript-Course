let nomedeusuario = "emerson";
let inboxdoUsuario = 0;

login();

function login(){
    mostraNomedeUsuario();
    mostrarinboxdoUsuario();

    function mostraNomedeUsuario(){
        console.log(`Bem vindo ${nomedeusuario}`)
    }
    
    function mostrarinboxdoUsuario(){
        console.log(`Você tem ${inboxdoUsuario} novas mensagens!`)
    }
}
