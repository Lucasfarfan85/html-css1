let antesButton = document.getElementById('antes')
let depoisButton = document.getElementById('depois')
let container = document.querySelector('.container')
let items = document.querySelector('.item')
let indicator = document.querySelector('indicador')
let itemOld = document.querySelector('.active')

let active = 0
let firstPosition = 0
let lastPosition


depoisButton.onclick = () => {

    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')
}

antesButton.onclick = () => {
    console.log("botao antes")
}