class Jogador {
    pontuação = 0;

    pausar() {
        console.log("Você pausou o jogo!");
    }
    sair() {
        console.log("Você saiu do jogo!");
    }
}

const jogador1 = new Jogador();
const jogador2 = new Jogador();
const jogador3 = new Jogador();
const jogador4 = new Jogador();

jogador1.pontuação += 1;

console.log(jogador1.pontuação);
console.log(jogador2.pontuação);

jogador1.pausar();
jogador2.sair();




class Pessoa {
    nome;
    idade;

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Criando um objeto pessoa
const pessoa = new Pessoa();
pessoa.nome = "Emerson";
pessoa.idade = 17;

pessoa.apresentar(); // Saída: Olá, meu nome é João e tenho 25 anos.
