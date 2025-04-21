// !hamburger-menu
const hamburgerMenu = document.querySelector("#mobile-navbar > img");
hamburgerMenu.addEventListener("click", () => {
    const hamburgerList = document.querySelector("#hamburger-list");
    const hamburgerContaner = document.querySelector("#mobile-navbar .hamburger-container");
    hamburgerList.classList.remove("hidden");
    hamburgerContaner.classList.toggle("active");
})
// !dark-mode

const darkModeBtn = document.querySelector("#navbar .dark-mode img");
const htmlElement = document.getElementById("light");
const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll("#navbar .right-nav ul li a");
const navbarLogo = document.querySelector("#navbar .right-nav h5");
const header = document.getElementById("header");
const headerCircles = document.querySelectorAll("#header .circle");
const headerStars = document.querySelectorAll("#header .star");
const headerleftBtn = document.querySelector("#header .header-btn .left-btn");
const main = document.getElementById("main");
const mainPicture = document.querySelector("#main .main-picture img");
const featuresTitleP = document.querySelector(".features .features-title p");
const featuresItems = document.querySelectorAll(".features .features-items .item");
const featuresItemsP = document.querySelectorAll(".features .features-items .item p");
const featuresItemsPen = document.querySelector(".features .features-items .item .pen");
const featuresItemsDashboard = document.querySelector(".features .features-items .item .dashboard");
const featuresItemsSave = document.querySelector(".features .features-items .item .save");
const featuresItemsProfile = document.querySelector(".features .features-items .item .profile");
const downloadImg = document.querySelector(".download .left-side img");
const downloadTitleP = document.querySelector(".download .right-side .right-title p");
const downlaodContentP = document.querySelectorAll(".download .right-content p");
const commentHeaderP = document.querySelector(".comment-container .comment-header p");
const commentCards = document.querySelectorAll("#main .comment-container .comment-cards .card");
const commentCardTitleDesc = document.querySelectorAll("#main .comment-container .card-title .card-title-desc p");
const commentCardContentP = document.querySelectorAll("#main .comment-container .card-content p");
const commentFooterRightSlide = document.querySelector("#main .comment-container .comment-footer .right-slider img");
const commentFooterLeftSlide = document.querySelector("#main .comment-container .comment-footer .left-slider img");
const commentFooterSlides = document.querySelectorAll("#main .comment-container .comment-footer .slide");
const footer = document.querySelector("#footer");
const theme = document.querySelector(":root");
darkModeBtn.addEventListener("click", () => {
    header.classList.toggle("dark");
    main.classList.toggle("dark");
    footer.classList.toggle("dark");
    if (darkModeBtn.classList.contains("light")) {
        htmlElement.id = "dark";
        darkModeBtn.classList.remove("light");
        darkModeBtn.classList.add("dark");
        darkModeBtn.src = "./assets/images/dark-mode/dark-moon.svg";
        darkModeBtn.style.color = "#2F3132";
        // !navbar
        navbar.style.backgroundColor = "#2F3132";
        navbarLinks.forEach(link => {link.style.color = "#fff";});
        navbarLogo.style.color = "#fff";
        // !header
        header.style.color = "#fff";
        headerCircles.forEach(circle => circle.style.display = "none");
        headerStars.forEach(star => star.src = "./assets/images/dark-mode/star.svg");
        headerleftBtn.style.backgroundColor = "#122549";
        headerleftBtn.style.color = "#fff";
        // !main-content
        mainPicture.src = "./assets/images/dark-mode/penoo.svg";
        // !features
        featuresTitleP.style.color = "#E6E6E6";
        featuresItems.forEach(item => item.style.backgroundColor = "#0B192D");
        featuresItemsP.forEach(p => p.style.color = "#F0F0F0");
        featuresItemsPen.src = "assets/images/dark-mode/pen.svg";
        featuresItemsDashboard.src = "assets/images/dark-mode/dashboard.svg";
        featuresItemsSave.src = "assets/images/dark-mode/save.svg";
        featuresItemsProfile.src = "assets/images/dark-mode/profile.svg";
        // !download
        downloadImg.src = "./assets/images/dark-mode/group.svg";
        downloadTitleP.style.color = "#fff";
        downlaodContentP.forEach(p => p.style.color = "#E6E6E6");
        // !comment-container
        commentHeaderP.style.color = "#E6E6E6";
        commentCards.forEach(card => card.classList.add("dark"));
        commentCardTitleDesc.forEach(p => p.style.color = "#E6E6E6");
        commentCardContentP.forEach(p => p.style.color = "#E6E6E6");
        commentFooterSlides.forEach(slide => slide.classList.add("dark"));
        commentFooterRightSlide.src = "./assets/images/dark-mode/right-slide.svg";
        commentFooterLeftSlide.src = "./assets/images/dark-mode/left-slide.svg";
    } else {
        htmlElement.id = "light";
        darkModeBtn.classList.remove("dark");
        darkModeBtn.classList.add("light");
        darkModeBtn.src = "./assets/images/dark-mode.png";
        // !nav
        navbar.style.backgroundColor = "#fff";
        navbarLinks.forEach(link => link.style.color = "#000");
        navbarLogo.style.color = "#000";
        // !header
        header.style.color = "#000";
        headerCircles.forEach(circle => circle.style.display = "block");
        headerStars.forEach(star => star.src = "./assets/images/star.png");
        headerleftBtn.style.backgroundColor = "#EBF3FE";
        headerleftBtn.style.color = "#2C7EF8";
        // !main-content
        mainPicture.src = "./assets/images/penoo.svg";
        // !features
        featuresTitleP.style.color = "#444749";
        featuresItems.forEach(item => item.style.backgroundColor = "#fff");
        featuresItemsP.forEach(p => p.style.color = "#444749");
        featuresItemsPen.src = "assets/images/pen.svg";
        featuresItemsDashboard.src = "assets/images/dashboard.svg";
        featuresItemsSave.src = "assets/images/saved place.svg";
        featuresItemsProfile.src = "assets/images/profile.svg";
        // !downlaod
        downloadImg.src = "./assets/images/group.svg";
        downloadTitleP.style.color = "#444749";
        downlaodContentP.forEach(p => p.style.color = "#444749");
        // !comment
        commentHeaderP.style.color = "#444749";
        commentCards.forEach(card => card.classList.remove("dark"));
        commentCardTitleDesc.forEach(p => p.style.color = "#5C5C5C");
        commentCardContentP.forEach(p => p.style.color = "#444749");
        commentFooterSlides.forEach(slide => slide.classList.remove("dark"));
        commentFooterRightSlide.src = "./assets/images/right-slider.svg";
        commentFooterLeftSlide.src = "./assets/images/left-slider.svg";
    }
})