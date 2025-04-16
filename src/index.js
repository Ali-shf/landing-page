// hamburger-menu
const hamburgerMenu = document.querySelector("#mobile-navbar > img");
hamburgerMenu.addEventListener("click", () => {
    const hamburgerList = document.querySelector("#hamburger-list");
    const hamburgerContaner = document.querySelector("#mobile-navbar .hamburger-container");
    hamburgerList.classList.remove("hidden");
    hamburgerContaner.classList.toggle("active");
})