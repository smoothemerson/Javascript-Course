const carro1 = {
    modelo: "Ferrari",
    cor: "vermelha",
    ano: "2020",

    dirigir: function() {
        console.log(`Você está dirigindo a ${this.modelo}`);
    }
}

const carro2 = {
    modelo: "Audi",
    cor: "Prata",
    ano: "2021",

    dirigir: function() {
        console.log(`Você está dirigindo o ${this.modelo}`);
    }
}

carro1.dirigir(); // Você está dirigindo a Ferrari
carro2.dirigir(); // Você está dirigindo o Audi