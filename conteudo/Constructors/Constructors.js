class estudantes {

    constructor(nome, idade, mediaNotas){
        this.nome = nome;
        this.idade = idade;
        this.mediaNotas = mediaNotas;
    }
    estudo(){
        console.log(`${this.nome} está estudando`)
    }
}

const estudante1 = new estudantes("Bob Esponja", 10, 7.5);
const estudante2 = new estudantes("Patrick", 9, 6.5);
const estudante3 = new estudantes("Sandy", 11, 8.5);


console.log(estudante1.nome);
console.log(estudante1.idade);
console.log(estudante1.mediaNotas);

console.log(estudante2.nome);
console.log(estudante2.idade);
console.log(estudante2.mediaNotas);


console.log(estudante3.nome);
console.log(estudante3.idade);
console.log(estudante3.mediaNotas);

estudante1.estudo();
estudante2.estudo();
estudante3.estudo();




class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  // Criando um objeto pessoa usando o construtor
  const pessoa = new Pessoa("Bob", 20);
  
  pessoa.apresentar(); // Saída: Olá, meu nome é Bob e tenho 20 anos.
  