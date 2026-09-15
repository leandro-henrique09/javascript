// // Retorne no console todas as imagens do site
// const imgs = document.querySelectorAll('img')
// console.log(imgs);

// // Retorne no console apenas as imagens que começaram com a palavra imagem

// const image = document.querySelectorAll('img[src^="img/image"]');
// console.log(image);

// // Selecione todos os links internos (onde o href começa com #)
// const linksInternos = document.querySelectorAll('[href^="#"]')
// console.log(linksInternos);

// // Selecione o primeiro h2 dentro de .animais-descricao
// const primeiroH2 = document.querySelector('.animais-descricao h2')
// console.log(primeiroH2);

// // Selecione o último p do site
// const ultimoP = document.querySelectorAll('p')
// console.log(ultimoP[ultimoP.length - 1].innerText);]


// const menu = document.querySelector('.menu');
// menu.classList.add('ativo', 'teste');
// menu.classList.remove('azul');
// // menu.classList.toggle('azul');

// if(menu.classList.contains('azul')){
//     menu.classList.add('possui-azul')
// } else {
//     menu.classList.add('não-possui-azul')
// }

// menu.className += ' className'

// const animais = document.querySelector('.animais')
// console.log(animais.attributes['data-texto'])

// const img = document.querySelector('img');

// img.setAttribute('alt', 'É uma raposa.');

// const temAtributo = img.hasAttribute('src')

// console.log(temAtributo);


// console.log(img.getAttribute('src'))

// const carro = {
//     portas: 4,
//     andar: (km) => {
//         console.log(`Andou ${km} km.`);       
//     }
// }

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-


// Adicione a classe ativo a todos os itens do menu
// const menu = document.querySelectorAll('.menu a');

// menu.forEach((item) => item.classList.add('ativo')) 
// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// menu.forEach((item, index) => {
//     const primeiroA = (index != 0) ? item.classList.remove('ativo') : ''
// })

// // Verifique se as imagens possuem o atributo alt
// const imgs = document.querySelectorAll('img')

// imgs.forEach((item) => {
//     console.log(item.hasAttribute('alt'));
// })

// // Modifique o href do link externo no menu
// const href = document.querySelector('a[href^="http"]');
// href.setAttribute('href', 'Troquei o href')
// console.log(href);




// =================================================








// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item, index, array) {
//     // console.log(item);
//     // console.log(index);
//     // console.log(array);
// });

// const titulos = document.getElementsByClassName('titulo')
// const titulosArray = Array.from(titulos)

// titulosArray.forEach(function(item) {
//     console.log(item);  
// })

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//     console.log(item);
// })







// =-=-=-=-=-=-=-=-=-=-=-=-=-=-



// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')

paragrafos.forEach((item) => console.log(item));


// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => console.log(item.innerText));


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
