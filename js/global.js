/*******************************/
/* JavaScript principal do App */
/*******************************/

// Referência do botão do menu
var btnMenu = $('btnMenu');

// Referência do menu principal
var nav = $('nav');

// Referência do fundo do menu
var modalMenu = $('modalMenu');

// Ajustes iniciais: oculta o menu
hideMenu();

// Quando clicar no botão do menu
btnMenu.addEventListener('click', toggleMenu, false);

// Quando clicar no fundo do menu
modalMenu.addEventListener('click', hideMenu, false);

// Função que controla o menu
function toggleMenu(event) {

    // Evita a ação normal do link no HTML
    event.preventDefault();

    ///// Faz o "toggle" (liga-desliga) do menu
    if (navOn) // Se o menu está ativo:
        hideMenu(); // Oculta o menu.
    else // Senão:
        showMenu(); // Mostra o menu.

}

// Função que mostra o menu
function showMenu() {

    // Gira o ícone do menu
    btnMenu.getElementsByTagName('i')[0].classList.add('fa-rotate-270');

    // mostra o fundo do menu
    modalMenu.classList.add('animOpen');

    // mostra o menu
    nav.classList.add('animOpen');

    // Menu esta aberto
    navOn = true;

}

// Função que oculta o menu
function hideMenu() {

    // "Desgira" o ícone do menu
    btnMenu.getElementsByTagName('i')[0].classList.remove('fa-rotate-270');

    // Oculta o menu
    nav.classList.remove('animOpen');

    // Oculta o fundo do menu
    modalMenu.classList.remove('animOpen');

    // Menu está fechado
    navOn = false;

}

// Função que serve de atalho para "document.getElementById"
function $(objId) {

    return document.getElementById(objId);

}

// Função que serve de atalho para "console.log()"
function _(txtLog) {

    console.log(txtLog);

}