// const doc = fetch('./doc.txt');
// doc.then(resolucao => {
//     return resolucao.text()
// }).then((body) => {
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body;
// })

const inputCep = document.querySelector('#cep')
const inputRua = document.querySelector('#rua')
const inputBairro = document.querySelector('#bairro')
const inputCidade = document.querySelector('#cidade')
const pAlerta = document.querySelector('.alerta')

inputCep.addEventListener('blur', async () => {
     try {
        console.log(inputCep.value);
        inputRua.value = '';
        inputBairro.value = '';
        inputCidade.value = '';
        pAlerta.innerText = ''
        const valorCep = inputCep.value.replace(/\D/g, '');

        if(inputCep.value.trim( )=== ''){
            pAlerta.innerText = 'O campo CEP não pode ficar vazio'
            return;
        }
        else if (valorCep.length !== 8) {
            console.log('Digite um CEP válido');
            pAlerta.innerText = 'Digite um CEP válido'
            return;
        } 

        const cep = await fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
        if(!cep.ok) {
            throw new Error("Falha na comunicação com a API")
        }
        const body = await cep.json()
        console.log(body);
         if(!body.erro){
            inputRua.value = body.logradouro
            inputBairro.value = body.bairro
            inputCidade.value = body.localidade
        }
        else{
            throw new Error("CEP NÃO ENCONTRADO")
        }
     } catch (error) {
        console.log("Falhou: ",error.message);
        pAlerta.innerText = `Erro: ${error.message}`
     }
});
    
    
    
    
   
    // cep.then(r => r.json())
   // .then((body) => {
   //     if(!body.erro){
   //         console.log(body);
   //         inputRua.value = body.logradouro
   //         inputBairro.value = body.bairro
   //         inputCidade.value = body.localidade
   //         return body;
   //     }
   //     else{
   //         throw new Error("CEP NÃO ENCONTRADO")
   //     }
   // })
   // .then((v) => {
   //     console.log(`Endereço encontrado: ${v.logradouro}, ${v.localidade}`);
   // }).catch((e) => {
   //     console.log("Falhou: ",e.message);
   // })
