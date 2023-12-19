let notas = [100, 50, 90, 60, 70];

notas = notas.sort(ordemCrescente);

notas.forEach(print);

notas = notas.sort(ordemDescendente);       //100 - 50 = 50, como deu um valor positivo entao a ordem seria decrescente
                                            //50 - 100 = -50 como deu um valor negativo então a ordem seria crescente
notas.forEach(print);

function ordemCrescente(a, b){              //Os parâmetros x e y representam os elementos do array que estão sendo comparados durante o processo de ordenação
    return b - a;                           //A ordem em que os elementos são passados como argumentos para a função de comparação depende do algoritmo de classificação subjacente.
}                                           //Para ordenação crescente, se o valor retornado for negativo (por exemplo, return a - b;), significa que a deve ser colocado antes de b.
                                            //Se o valor retornado for positivo, significa que b deve ser colocado antes de a.
function ordemDescendente(a, b){            //Se o valor retornado for zero, significa que a e b têm a mesma ordem relativa e não é necessário alterar sua posição.
    return a - b;
}

function print(elemento){
    console.log(elemento);
}