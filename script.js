var menu = document.querySelector('.menu');
var menu-hamburguer = document.querySelector('#menu-hamburguer');

menu.onclick = e => {
    if(!menu-hamburguer.classList.contains('oculto')){
        menu-hamburguer.classList.add('oculto');
    } else {
        menu-hamburguer.classList.remove('oculto');
    }
}