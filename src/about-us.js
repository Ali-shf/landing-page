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
// !navbar
const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll("#navbar .right-nav ul li a");
const navbarLogo = document.querySelector("#navbar .right-nav h5");
// !header
const header = document.getElementById("header");
const headerCircles = document.querySelectorAll("#header .circle");
const headerStars = document.querySelectorAll("#header .star");
const headerleftBtn = document.querySelector("#header .header-btn .left-btn");
// !main
const mainRgihtContent = document.querySelector("#about-us-main .right-main");
const mainPersonalTitleH2 = document.querySelector("#about-us-main .right-main .personal-title h2");
const mainPersonalTitleH3 = document.querySelector("#about-us-main .right-main .personal-title h3");
const mainPersonalDesc = document.querySelectorAll("#about-us-main .right-main .personal-desc p");
const mainPersonalInfo = document.querySelector("#about-us-main .left-main .personal-info");
const mainPersonalInfoBirthday = document.querySelectorAll("#about-us-main .left-main .personal-info .card");
const mainPersonalInfoBirthdayH3 = document.querySelectorAll("#about-us-main .left-main .personal-info .card h3");
const mainPersonalInfoBirthdayP = document.querySelectorAll("#about-us-main .left-main .personal-info .card p");
// !footer
const footer = document.querySelector("#footer");
const footerFax = document.querySelector("#footer .FAQ img");
const footerCall = document.querySelector("#footer .call img");
const footerLocation = document.querySelector("#footer .location img");
const footerEndP = document.querySelector("#footer .footer-end p");
darkModeBtn.addEventListener("click", () => {
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
        // !mian-about-us
        mainRgihtContent.style.backgroundColor = "#0B192D";
        mainRgihtContent.style.border = "none";
        mainPersonalTitleH2.style.color = "#fff";
        mainPersonalTitleH3.style.color = "##B5B5B5";
        mainPersonalDesc.forEach(p => p.style.color = "#E6E6E6");
        mainPersonalInfo.style.backgroundColor = "#0B192D";
        mainPersonalInfo.style.border = "none";
        mainPersonalInfoBirthday.forEach(birthday => birthday.style.backgroundColor = "#0E1E34");
        mainPersonalInfoBirthday.forEach(birthday => birthday.style.border = "none");
        mainPersonalInfoBirthdayH3.forEach(h3 => h3.style.color = "#fff");
        mainPersonalInfoBirthdayP.forEach(p => p.style.color = "#ACACAC");
        // !footer
        footerFax.src = "./assets/images/dark-mode/fax.svg";
        footerCall.src = "./assets/images/dark-mode/call.svg";
        footerLocation.src = "./assets/images/dark-mode/location.svg";
        footerEndP.style.color = "#DFDFDF";
    } else {
        htmlElement.id = "light";
        darkModeBtn.classList.remove("dark");
        darkModeBtn.classList.add("light");
        darkModeBtn.src = "./assets/images/dark-mode.png";
        // !nav
        navbar.style.backgroundColor = "#fff";
        navbarLinks.forEach(link => link.style.color = "#000");
        navbarLogo.style.color = "#000";
         // !mian-about-us
        mainRgihtContent.style.backgroundColor = "#fff";
        mainRgihtContent.style.border = "1px solid #F5F6F8";
        mainPersonalTitleH2.style.color = "#000";
        mainPersonalTitleH3.style.color = "#575757";
        mainPersonalDesc.forEach(p => p.style.color = "#444749");
        mainPersonalInfo.style.backgroundColor = "#fff";
        mainPersonalInfo.style.border = "1px solid #F5F6F8";
        mainPersonalInfoBirthday.forEach(birthday => birthday.style.backgroundColor = "#F9FAFB");
        mainPersonalInfoBirthday.forEach(birthday => birthday.style.border = "1px solid #F5F5F5");
        mainPersonalInfoBirthdayH3.forEach(h3 => h3.style.color = "#070D31");
        mainPersonalInfoBirthdayP.forEach(p => p.style.color = "#707070");
        // !footer
        footerFax.src = "./assets/images/bag.svg";
        footerCall.src = "./assets/images/call.svg";
        footerLocation.src = "./assets/images/location.svg";
        footerEndP.style.color = "#666666";
    }
})