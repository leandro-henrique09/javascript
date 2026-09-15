const img = document.querySelector('img')

function callback(event){
    console.log(event);
}

img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')

function callbackListas(event) {
    console.log(event.currentTarget);
    console.log(event.type);
    console.log(event.target); 
}
animaisLista.addEventListener('click', callbackListas)

console.log(animaisLista);

const linkExterno = document.querySelector('a[href^="http"]')

function handleCLick(event) {
    event.preventDefault()
    console.log('clicou');
    console.log(this);   
}

linkExterno.addEventListener('click', handleCLick)

const h1 = document.querySelector('h1')

function handleEvent(event) {
    console.log(event.type, event);
    
}


// h1.addEventListener('click', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// h1.addEventListener('mousemove', handleEvent)

// window.addEventListener('scroll', handleEvent)

function handleKey(event) {
    if(event.key === 'f'){
        document.body.classList.toggle('fullscreen')
    }
    console.log(event.key);
}
window.addEventListener('keydown', handleKey)