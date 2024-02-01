class carro{
    static numeroDeCarros = 0;

    constructor(modelo){
        this.modelo = modelo;
        carro.numeroDeCarros += 1;
    }

    static comecarCorrida(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new carro("Lambo");
const car2 = new carro("Ferrari");
const car3 = new carro("Mercedes");
const car4 = new carro("BMW");

console.log(carro.numeroDeCarros);

carro.comecarCorrida();




class Matematica {
    static calcularRaizQuadrada(numero) {
      return Math.sqrt(numero);
    }
  }
  
  console.log(Math.floor(Matematica.calcularRaizQuadrada(1000))); // Saída: 4  