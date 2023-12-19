let total = sum(2, 3);                                          // Chamada da função sum passando os argumentos 2 e 3, retorna o resultado da soma
displayConsole(total);                                          // Chamada da função displayConsole passando o resultado da soma como argumento
displayDOM(total);                                              // Chamada da função displayDOM passando o resultado da soma como argumento

function sum(x, y){                                             // Definição da função sum que recebe dois parâmetros x e y
    let resultado = x + y;                                      // Realiza a soma dos parâmetros x e y e atribui o resultado à variável resultado
    return resultado;                                           // Retorna o resultado da soma
}

function displayConsole(output){                                // Definição da função displayConsole que recebe um parâmetro output
    console.log(output);                                        // Exibe o valor do parâmetro output no console
}

function displayDOM(output){                                    // Definição da função displayDOM que recebe um parâmetro output
    document.getElementById("minhaLabel").innerHTML = output;   // Define o valor do parâmetro output no elemento HTML com o ID "minhaLabel"
}

sum(2, 3, displayConsole);                                      // Chamada da função sum passando os argumentos 2 e 3 e a função displayConsole como callback