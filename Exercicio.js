const abrir = document.querySelector("button")

abrir.addEventListener('click', ()=>{

    const open = document.querySelector("div")

        open.classList.remove('invisible')
      

        

})
document.addEventListener('keydown', event =>{
  
    const Iskey = event.key === 'Escape'

    if(Iskey){
        const open = document.querySelector("div")

        open.classList.add('invisible')

    }

})
