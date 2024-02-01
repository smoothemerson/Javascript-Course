const carro1 = {
    //Propriedades
    modelo:"Mercedes",
    cor:"cinza",
    ano:"2022",

    //Métodos
    drive : function(){
        console.log("Você dirige o carro");
    },

    brake : function(){
        console.log("Você pisa nos freios");
    },
}

const carro2 = {
    modelo:"BMW",
    cor:"preta",
    ano:"2022",

    drive : function(){
        console.log("Você dirige o carro");
    },

    brake : function(){
        console.log("Você pisa nos freios");
    },
}

console.log(carro1.modelo);
console.log(carro1.cor);
console.log(carro1.ano);

carro1.drive();
carro1.brake();






// Criando um objeto pessoa
const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro",
    saudacao: function() {
      console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.profissao}.`);       //This é uma referência ao objeto que ela pertence
    }                                                                                   //Nesse caso, o objeto é a pessoa
  };
  
  // Acessando propriedades do objeto
  console.log(pessoa.nome); // Saída: "João"
  console.log(pessoa.idade); // Saída: 30
  
  // Chamando o método do objeto
  pessoa.saudacao(); // Saída: "Olá, meu nome é João e eu sou um Engenheiro."
  
  // Adicionando uma nova propriedade ao objeto
  pessoa.hobby = "Fotografia";
  
  // Modificando uma propriedade existente
  pessoa.profissao = "Desenvolvedor";
  
  // Removendo uma propriedade do objeto
  delete pessoa.idade;
  