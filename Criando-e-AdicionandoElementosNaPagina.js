//Criando e adicionado elementos

//create element
const div = document.createElement("div")
div.innerText = "Olá devs"

                        //append / prepend
const body = document.querySelector("body")

body.append(div) //body.prepend(div)


//Insert Before

const body1 = document.querySelector("body")
const header = body1.querySelector("header")
body1.insertBefore(div, header .nextSibling)
