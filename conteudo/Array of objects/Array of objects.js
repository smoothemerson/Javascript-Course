class Carro {
    constructor(modelo, ano, cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }


    dirigir() {
        console.log(`Você está dirigindo um ${this.modelo}`);
    }
}

const carros = [
    new Carro("BMW", 2020, "vermelho"),
    new Carro("Mercedes", 2021, "azul"),
    new Carro("Audi", 2022, "branco"),
    new Carro("Ferrari", 2023, "preto")
];

function mostrarPropriedades(objeto) {
    for (const propriedade in objeto) {
        console.log(`${propriedade}: ${objeto[propriedade]}`);
    }
    console.log('---');
}

for (const carro of carros) {
    mostrarPropriedades(carro);
}

carros[1].dirigir();

comecarCorrida(carros);

function comecarCorrida(carros) {
    for (const carro of carros) {
        carro.dirigir();
    }
}

console.log(carros[0].modelo);
console.log(carros[0].ano);
console.log(carros[0].cor);


//EXEMPLO DE ARRAY DE OBJETOS 

const carros1 = [
    { modelo: "BMW", ano: 2020, cor: "vermelho" },
    { modelo: "Mercedes", ano: 2021, cor: "azul" },
    { modelo: "Audi", ano: 2022, cor: "branco" },
    { modelo: "Ferrari", ano: 2023, cor: "preto" }
];

console.log(carros1[0].modelo);  // "BMW"
console.log(carros1[1]["ano"]);  // 2021
