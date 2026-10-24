// Escreva uma função que receba um número inteiro como entrada e retorne a quantidade de bits iguais a um na representação binária desse número. É possível garantir que a entrada seja não negativa.

// Exemplo : A representação binária de 1234é 10011010010, portanto a função deve retornar 5neste caso.

// function countBits(n) {

//     const binarioN = n.toString(2);
//     let countOne = 0

//     for (const element of binarioN) {
//         if(element == 1) {
//             countOne++;
//         }
//     }
//     return countOne;

// }

// console.log(countBits(0));

const countBits = function(n) {
  return n.toString(2).split('0').join("").length;
};

console.log(countBits(1500));
