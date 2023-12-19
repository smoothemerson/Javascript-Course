const promise = new Promise((resolve, reject) => {
    let arquivoCarregado = true;

    if(arquivoCarregado){
        resolve("Arquivo carregado");
    }
    else{
        reject("Arquivo não carregado");
    }
});

promise.then(valor => console.log(valor))
        .catch(error => console.log(error));



const esperar = tempo => new Promise(resolve => {
    setTimeout(resolve, tempo);
});

esperar(3000).then(() => console.log("Obrigado por esperar!"));



// Criando uma Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve(randomNumber);
      } else {
        reject(new Error('Erro: o número gerado foi maior ou igual a 0.5'));
      }
    }, 1000);
  });
  
  // Usando a Promise
  myPromise
    .then((result) => {
      console.log('Sucesso:', result);
    })
    .catch((error) => {
      console.log('Erro:', error.message);
    });
  