class carta {
    constructor(valor, naipe) {
        this.valor = valor;
        this.naipe = naipe;
    }
}

let cartas = [                              //ANONYMOUS OBJECTS
    new carta("A", "Coração"),
    new carta("A", "Espadas"),
    new carta("A", "Ouros"),
    new carta("A", "Paus"),
    new carta("2", "Coração"),
    new carta("2", "Espadas"),
    new carta("2", "Ouros"),
    new carta("2", "Paus")
];

cartas.forEach(carta => console.log(`${carta.valor} ${carta.naipe}`));



class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const pessoas = [                       //ANONYMOUS OBJECTS
    new Pessoa("João"),
    new Pessoa("Maria"),
    new Pessoa("Pedro"),
    new Pessoa("Ana")
];

pessoas.forEach(pessoa => {
    console.log(pessoa.nome);
});
