class Carro{

    constructor(modelo, ano, cor){
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
}

const carro1 = new Carro("BMW", 2020, "vermelho");
const carro2 = new Carro("Mercedes", 2021, "azul");
const carro3 = new Carro("Audi", 2022, "branco");

mostrarInformações(carro1);
mostrarInformações(carro2);
mostrarInformações(carro3);

mudarCor(carro1, "dourado");
mostrarInformações(carro1);

function mostrarInformações(carro){
    console.log(carro.modelo);
    console.log(carro.ano);
    console.log(carro.cor);
}

function mudarCor(carro, cor){
    carro.cor = cor;
}


// Definindo um objeto chamado "pessoa"
const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
  };
  
  // Definindo uma função que recebe um objeto como argumento
  function imprimirInformacoes(objeto) {
    console.log("Nome:", objeto.nome);
    console.log("Idade:", objeto.idade);
    console.log("Cidade:", objeto.cidade);
  }
  
  // Chamando a função e passando o objeto "pessoa" como argumento
  imprimirInformacoes(pessoa);
  