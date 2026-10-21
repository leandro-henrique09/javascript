async function puxarDados() {
    try {
        const responseDados = await fetch('./dados.json')
        const jsonDados = await responseDados.json()
        console.log(jsonDados.aula);
        document.body.innerText = jsonDados.aula
    }
    catch(erro) {
        console.log(erro);    
    }
}

puxarDados()