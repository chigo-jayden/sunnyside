let list = document.querySelector("nav ul")
let hide = document.querySelector(".close")
let show = document.querySelector(".open")

show.addEventListener('click', ()=> {
    list.classList.add("show")
})

hide.addEventListener('click', ()=> {
    list.classList.remove("show")
})   

