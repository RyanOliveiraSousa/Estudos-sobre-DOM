//Manipulando Conteudo
//textContent

const element = document.querySelector('p')

element.textContent = 'Olá Devs'

//inner text

const element2 = document.querySelector('h1')

element2.innerText = 'Olá Devs'


//inner httml

const element3 = document.querySelector('.two')
//diferente das outras poder usar htmls como small hr etc,
element3.innerHTML = "RELOU <small> Ryan </small>"


//value
const element4 = document.querySelector('input')
element4.value = 'Valor que eu quiser'


//Atributos

const h1 = document.querySelector("h1")
h1.setAttribute("class", "cor")

console.log(h1.getAttribute('class'))

h1.removeAttribute("class")
h1.removeAttribute("id")

