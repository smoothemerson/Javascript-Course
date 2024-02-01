async function carregarArquivo(){

    let arquivoCarregado = false;

    if(arquivoCarregado){
        return "Arquivo carregado!"
    }
    else{
        throw "Arquivo não foi carregado!";
    }
}

carregarArquivo().then(valor => console.log(valor))
        .catch(error => console.log(error));