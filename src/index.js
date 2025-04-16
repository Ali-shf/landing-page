// hamburger-menu
const hamburgerMenu = document.querySelector("#mobile-navbar .hamburger-container");
hamburgerMenu.addEventListener("click", () => {
    const hamburgerList = document.querySelector("#hamburger-list");
    hamburgerList.classList.remove("hidden");
    hamburgerMenu.classList.toggle("active");
})