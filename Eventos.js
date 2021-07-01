//Eventos

//Eventos de teclado

const input = document.querySelector('input')
//onkeyup,onkeydown,onkeypress
input.onkeyup = function(){

        console.log("rodei")
}
//Adicionado eventos via Js

const h1 = document.querySelector('h1')
h1.addEventListener('click',() =>{

    console.log('Click')
})
//Adicionado eventos via Js Outro Metodo **nao recomendavel**

const h2 = document.querySelector('h2')
h2.onclick = print

function print(){

    console.log("outro metodo")
}

//ARGUMENTO EVENTR

const input1 = document.querySelector('input')

input1.onkeydown = function(event){
    console.log(event.currentTarget.value)

}