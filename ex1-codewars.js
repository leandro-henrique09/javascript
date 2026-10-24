// Exercicio de lógica de programação pelo CodeWars

// Complete o método/função para que ele converta palavras delimitadas por hífen/sublinhado em camel case . A primeira palavra na saída deve ser escrita com inicial maiúscula somente se a palavra original já estiver em maiúscula (conhecido como Upper Camel Case, também chamado de Pascal case). As palavras seguintes devem sempre ser escritas com inicial maiúscula.

// Exemplos
// "the-stealth-warrior"é convertido em"theStealthWarrior"

// "The_Stealth_Warrior"é convertido em"TheStealthWarrior"

// "The_Stealth-Warrior"é convertido em"TheStealthWarrior"

// Solução: 
function toCamelCase(str){
    const stringSplit = str.replace(/[-_]/g, " ").split(" ");

    let resultadoSplit = stringSplit.map((palavra, indice) => {
        if(indice === 0){
            return palavra;
        } else {
            return palavra[0].toUpperCase() + palavra.slice(1)
        }
    })

    const palavraFinal = resultadoSplit.join("")

    return palavraFinal;
}

console.log(toCamelCase('the-stealth-warrior'));
