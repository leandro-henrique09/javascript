// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pessoa = {
    nome: 'Paulo',
    sobrenome: 'Jorge'
}


// Crie um método no objeto anterior, que mostre o seu nome completo
var pessoa = {
    nome: 'Paulo',
    sobrenome: 'Jorge',
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoa.nomeCompleto());


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

console.log(carro.preco);


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raça: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem'){
            return 'Latir'
        } else {
            return 'Nada'
        }
    }
}

console.log(cachorro.latir('criança'));
