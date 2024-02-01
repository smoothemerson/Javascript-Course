let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numeros){
    let total = 0;
    for(let numero of numeros){
        total += numero;
    }
}





function somar(...numeros) {
    let soma = 0;
    for (let numero of numeros) {
      soma += numero;
    }
    return soma;
  }
  
  console.log(somar(1, 2, 3, 4, 5)); // Output: 15







function calcularMedia(...notas) {
    // A função "calcularMedia" recebe um número indefinido de argumentos representando as notas dos alunos.
    // O parâmetro rest "...notas" captura todos os argumentos restantes e armazena-os em um array chamado "notas".
  
    let soma = 0;
    // Inicializa a variável "soma" com o valor zero para armazenar a soma das notas.
  
    for (let nota of notas) {
      // Itera sobre cada elemento "nota" do array "notas".
  
      soma += nota;
      // Adiciona o valor da "nota" atual à variável "soma".
    }
  
    const media = soma / notas.length;
    // Calcula a média dividindo a "soma" pelo número total de notas no array "notas".
    // A propriedade "length" retorna o número de elementos no array.
  
    return media;
    // Retorna o valor da média calculada.
  }
  
  console.log(calcularMedia(7, 8, 9, 6));
  // Chama a função "calcularMedia" passando as notas dos alunos como argumentos.
  // No exemplo acima, as notas passadas são 7, 8, 9 e 6.
  
  // O resultado é impresso no console.
  // No exemplo, a média das notas é 7.5.
  