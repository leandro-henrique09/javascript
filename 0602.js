// const promesa = new Promise((resolve, reject) => {
//     let condicao = true; 
//     if(condicao) {
//         setTimeout(() => {
//             resolve({nome: "André", idade: 22});
//         }, 1000)
//     } else {
//         reject(Error("Um erro ocorreu na promise"))
//     }
// })

// const retorno = promesa
// .then(resolucao => {
//     console.log(resolucao);
//     resolucao.profissao = 'Programador';
//     return resolucao
// })
// .then(resolucao => {
//     console.log(resolucao);
// }, rejeitado => {
//     console.log(rejeitado);
// })
// .finally(() => {
//     console.log("Acabou");
    
// })

// console.log(retorno);

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Usuario logado.");
    }, 1000);
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Dados carregados.");
    }, 1500);
})

const carregouTudo = Promise.race([login, dados])

carregouTudo.then((resolucao) => {
    console.log(resolucao);
    
})
