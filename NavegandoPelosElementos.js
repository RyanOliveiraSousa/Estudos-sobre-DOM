//Navegando pelos elementos

const element = document.querySelector("h1")

console.log(element.parentNode)

//Navengando pelos elementos filhos

const el = document.querySelector("body")

console.log(el.childNodes) //(el.children)

//fist child

console.log(el.firstChild) //(el.firstElementChild)

//last child

console.log(el.lastChild) //(el.lastElementChild)


//nextSibling sibling = irmao

const el1 = document.querySelector("header")

console.log(el1.nextSibling) //nextElementSibling

//previousSibling

console.log(el1.previousSibling) //previousElementSibling