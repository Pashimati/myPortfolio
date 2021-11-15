const buttonToTop = document.querySelector(".buttonToTop");

const backToTop = function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};

buttonToTop.addEventListener('click', backToTop);