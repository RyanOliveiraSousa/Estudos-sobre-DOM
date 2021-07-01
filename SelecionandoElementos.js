// getElementbyId()
const element = document.getElementById('blog-title')

console.log(element)


//getElementbyClassName()

const element2 = document.getElementsByClassName('one')

console.log(element2)


//getElementbyTagName()

const element3 = document.getElementsByTagName('head')

console.log(element3)


//querySelector

const element4 = document.querySelector('.one')

console.log(element4)

//querySelectorAll

const elements = document.querySelectorAll('p')

console.log(elements)

elements.forEach(el => console.log(el))

