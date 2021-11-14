
let menuButton = document.querySelector(".menuButton");
let listMenu = document.querySelector('.listMenu');

const openModal = function () {
    listMenu.classList.toggle('modal-open');
}

menuButton.addEventListener('click', openModal);

