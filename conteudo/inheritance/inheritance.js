class Animais {

    vivo = true;

    comer(){
        console.log(`Esse ${this.nome} está comendo`)
    }

    dormir(){
        console.log(`Esse ${this.nome} está dormindo`)
    }
}


class Coelhos extends Animais{

    nome = "coelho";

    correr(){
        console.log(`Esse ${this.nome} está correndo`)
    }
}

class Peixes extends Animais{

    nome = "peixe";

    nadar(){
        console.log(`Esse ${this.nome} está nadando`)
    }
}

class Gavião extends Animais{

    nome = "gavião";

    voar(){
        console.log(`Esse ${this.nome} está voando`)
    }
}

const coelho = new Coelhos();
const peixe = new Peixes();
const gavião = new Gavião();

console.log(coelho.vivo);
coelho.comer();
coelho.dormir();
coelho.correr();

console.log(peixe.vivo);
peixe.comer();
peixe.dormir();
peixe.nadar();

console.log(gavião.vivo);
gavião.comer();
gavião.dormir();
gavião.voar();