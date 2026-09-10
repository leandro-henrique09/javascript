// function imc2(peso, altura) {
//     const imc = peso / (altura ** 2)
//     console.log(imc);   
// }

// imc2(80, 1.80)
// console.log(imc2(80,1.80));

// function terceiraIdade(idade) {
//     if(typeof idade !== 'number'){
//         return 'Por favor preencha um número'
//     } else if(idade >= 60) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(terceiraIdade('60'));

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} paises.`
}

console.log(faltaVisitar(120))