const saudacoes1 = (nomedeUsuario1, idade) => {
    console.log(`olá ${nomedeUsuario1} você tem ${idade} anos!`);
}

saudacoes1("renato", 15);


const porcentagem1 = (x, y) => {
    return x / y * 100;
}

console.log(`${porcentagem1(30, 60)}%`);


let notas = [100, 30, 60, 70, 50, 20, 80, 40, 90, 10, 0];

notas.sort((x, y) => y - x);
notas.forEach((elemento) => console.log(elemento));


const soma = (a, b) => a + b;
console.log(soma(5, 10));