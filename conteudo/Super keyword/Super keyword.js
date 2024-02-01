class Animais{

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}
class Coelho extends Animais{

    constructor(nome, idade, VelocidadeNaTerra){
        super(nome, idade);
        this.VelocidadeNaTerra = VelocidadeNaTerra;
    }
}
class Peixe extends Animais{

    constructor(nome, idade, VelocidadeNaÁgua){
        super(nome, idade);
        this.VelocidadeNaÁgua = VelocidadeNaÁgua;
    }
}
class Gavião extends Animais{

    constructor(nome, idade, VelocidadeNoAr){
        super(nome, idade);
        this.VelocidadeNoAr = VelocidadeNoAr;
    }
}

const coelho = new Coelho("coelho", 1, 40);
const peixe = new Peixe("peixe", 2, 80);
const gavião = new Gavião("gavião", 3, 100);

console.log(coelho.nome);
console.log(coelho.idade);
console.log(coelho.VelocidadeNaTerra);

console.log(peixe.nome);
console.log(peixe.idade);
console.log(peixe.VelocidadeNaÁgua);

console.log(gavião.nome);
console.log(gavião.idade);
console.log(gavião.VelocidadeNoAr);