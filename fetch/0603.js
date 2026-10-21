// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// const inputCep = document.querySelector('#cep')
// const inputRua = document.querySelector('#rua')
// const inputBairro = document.querySelector('#bairro')
// const inputCidade = document.querySelector('#cidade')
// const pAlerta = document.querySelector('.alerta')

// inputCep.addEventListener('blur', async () => {
//      try {
//         console.log(inputCep.value);
//         inputRua.value = '';
//         inputBairro.value = '';
//         inputCidade.value = '';
//         pAlerta.innerText = ''
//         const valorCep = inputCep.value.replace(/\D/g, '');

//         if(inputCep.value.trim( )=== ''){
//             pAlerta.innerText = 'O campo CEP não pode ficar vazio'
//             return;
//         }
//         else if (valorCep.length !== 8) {
//             console.log('Digite um CEP válido');
//             pAlerta.innerText = 'Digite um CEP válido'
//             return;
//         } 

//         const cep = await fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
//         if(!cep.ok) {
//             throw new Error("Falha na comunicação com a API")
//         }
//         const body = await cep.json()
//         console.log(body);
//          if(!body.erro){
//             inputRua.value = body.logradouro
//             inputBairro.value = body.bairro
//             inputCidade.value = body.localidade
//         }
//         else{
//             throw new Error("CEP NÃO ENCONTRADO")
//         }
//      } catch (error) {
//         console.log("Falhou: ",error.message);
//         pAlerta.innerText = `Erro: ${error.message}`
//      }
// });
    


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s


// async function mostraValores() {
//     const url = await fetch('https://blockchain.info/ticker')
//     const bodyUrl = await url.json();
//     const divConteudo = document.querySelector('.dados')

//     infoReal = bodyUrl.BRL

//     console.log(infoReal.buy);
    
//     divConteudo.innerHTML = `
//         <div>Valor de compra: R$${Intl.NumberFormat('pt-BR').format(infoReal.buy)}</div>
//         <div>Ultimo valor negociado: R$${Intl.NumberFormat('pt-BR').format(infoReal.last)}</div>
//     `  
// }

// mostraValores();
// setInterval(mostraValores, 30000)

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

async function mostrarPiada() {
    const url = await fetch('https://api.chucknorris.io/jokes/random')
    const body = await url.json();
    let piada = body.value
    const paragrafoPiada = document.querySelector('.piada')

    paragrafoPiada.innerHTML = piada;  
}

const btnPiada = document.querySelector('.btn-proximo')

btnPiada.addEventListener('click', mostrarPiada)
