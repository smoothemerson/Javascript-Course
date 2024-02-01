async function carregarArquivo() {

    let arquivoCarregado = false;

    if (arquivoCarregado) {
        return "Arquivo carregado!"
    }
    else {
        throw "Arquivo não foi carregado!";
    }
}

async function comecarProcesso() {
    try {
        let mensagem = await carregarArquivo();

        console.log(mensagem);
    }
    catch (error) {
        console.log(error);
    }
}

comecarProcesso();