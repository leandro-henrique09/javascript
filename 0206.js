var pessoa = {
    nome: 'Leandro',
    idade: 22,
    cidade: 'Jandira'
}

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.perimetro(9));
