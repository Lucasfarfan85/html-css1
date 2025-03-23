let antesButton = document.getElementById('antes')
let depoisButton = document.getElementById('depois')
let container = document.querySelector('.container')
let items = document.querySelector('.item')
let indicator = document.querySelector('indicador')
let itemOld = document.querySelector('.lista .active')

let active = 0
let firstPosition = 0
let lastPosition = item.length - 1


depoisButton.onclick = () => {

    let itemOld = document.querySelector('.lista .active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    item[active].classList.add('active')


}

antesButton.onclick = () => {
    let itemOld = document.querySelector('.lista .active')
    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1
    item[active].classList.add('active')
}