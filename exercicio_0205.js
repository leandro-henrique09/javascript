// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor){
    if(valor){
        return 'É Truthy'
    } else {
        return 'É False'
    }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrade(lado) {
    return lado * 4;
}

console.log(perimetroQuadrade(3));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome,sobrenome){
    return nome + ' ' + sobrenome
}

console.log(nomeCompleto('Leandro', 'Henrique'));

// Crie uma função que verifica se um número é par
function verificaPar(valor){
    if(valor % 2 === 0){
        return `${valor} é par`
    } else {
        return `${valor} é ímpar`
    }
}

console.log(verificaPar(11));


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function retornaTipo(dado) {
    tipoDado = typeof dado
    return tipoDado;
}

console.log(retornaTipo());

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function() {
    return 'Clicou'
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);