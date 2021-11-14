//добавить класс и искать кнопку по классу
let menuButton = document.querySelector(".main-header__menu");
let header = document.querySelector('.main-header');

const openModal = function () {
    header.classList.toggle('modal-open');
}

menuButton.addEventListener('click', openModal);

