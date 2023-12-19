class Carro {
    constructor(poder) {
        this._gas = 25;                                         //O uso do _ indica que ela é considerada privada e não deve ser acessada diretamente fora da classe Carro
        this._poder = poder;
    }
    get gas() {
        return `${this._gas}L (${this._gas / 50 * 100}%)`;        //50 é o tanque do carro cheio
    }
    get poder() {
        return `${this._poder}km²`;
    }
    set gas(valor) {
        if (valor > 50) {
            valor = 50;
        }
        else if (valor < 0) {
            valor = 0;
        }
        this._gas = valor;
    }
}

let carro = new Carro(400);

carro.gas = 100;

console.log(carro.poder);
console.log(carro.gas);