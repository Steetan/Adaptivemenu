const headerBurg = document.querySelector(".header__burger")
const headerNav = document.querySelector(".header__nav")

headerBurg.addEventListener("click", navclick)

function navclick() {
    headerNav.classList.toggle('header__nav--active');
    (headerNav.className == 'header__nav header__nav--active') ?
        document.body.style.overflow = "hidden":
        document.body.style.overflow = "auto"
}
