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
const main = document.querySelector("#contact-us-main");
const mainContactTitleH1 = document.querySelector("#contact-us-main .right-main .contact-title h1");
const mainContactTitleP = document.querySelector("#contact-us-main .right-main .contact-title p");
const mainContactAddressP = document.querySelectorAll("#contact-us-main .contact-address p");
const mainContactAddressCallImg = document.querySelector("#contact-us-main .contact-address .contact-phone img");
const mainContactAddressCallEmail = document.querySelector("#contact-us-main .contact-address .contact-email img");
const mainContactSocialMediaGithub = document.querySelector("#contact-us-main .contact-social-media img[alt = 'github']");
const mainContactSocialMediaTwitter = document.querySelector("#contact-us-main .contact-social-media img[alt = 'twitter']");
const mainContactSocialMediaLinkedin = document.querySelector("#contact-us-main .contact-social-media img[alt = 'linkedin']");
const mainVerticalLineImg = document.querySelector("#contact-us-main .vertical-line img");
const mainFormLabel = document.querySelectorAll("#contact-us-main .left-main form label");
const mainFormInput = document.querySelectorAll("#contact-us-main .left-main form input");
const mainFormTextArea = document.querySelector("#contact-us-main .left-main form textarea");
// !footer
const footer = document.querySelector("#footer");
const footerFax = document.querySelector("#footer .FAQ img");
const footerCall = document.querySelector("#footer .call img");
const footerLocation = document.querySelector("#footer .location img");
const footerEndP = document.querySelector("#footer .footer-end p");
darkModeBtn.addEventListener("click", () => {
    mainFormInput.forEach(input => input.classList.toggle("dark"));
    mainFormTextArea.classList.toggle("dark");
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
        // !main-contact-us
        main.style.backgroundColor = "#0B192D";
        main.style.border = "none";
        mainContactTitleH1.style.color = "#E6E6E6";
        mainContactTitleP.style.color = "#DEDEDE";
        mainContactAddressP.forEach(p => p.style.color = "#E6E6E6");
        mainContactAddressCallImg.src = "./assets/images/dark-mode/call-contact.svg";
        mainContactAddressCallEmail.src = "./assets/images/dark-mode/sms.svg";
        mainContactSocialMediaGithub.src = "./assets/images/dark-mode/github-contact.svg";
        mainContactSocialMediaTwitter.src = "./assets/images/dark-mode/twitter.svg";
        mainContactSocialMediaLinkedin.src = "./assets/images/dark-mode/linkedin.svg";
        mainVerticalLineImg.src = "./assets/images/dark-mode/vertical-line.svg";
        mainFormLabel.forEach(label => label.style.color = "#fff");
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
        // !main-contact-us
        main.style.backgroundColor = "#fff";
        main.style.border = "1px solid #F5F6F8";
        mainContactTitleH1.style.color = "#070D31";
        mainContactTitleP.style.color = "#6F7076";
        mainContactAddressP.forEach(p => p.style.color = "#070D31");
        mainContactAddressCallImg.src = "./assets/images/light-call.svg";
        mainContactAddressCallEmail.src = "./assets/images/sms.svg";
        mainContactSocialMediaGithub.src = "./assets/images/github.svg";
        mainContactSocialMediaTwitter.src = "./assets/images/twitter.svg";
        mainContactSocialMediaLinkedin.src = "./assets/images/linkedin.svg";
        mainVerticalLineImg.src = "./assets/images/rectangle.svg";
        mainFormLabel.forEach(label => label.style.color = "#070D31");
        // !footer
        footerFax.src = "./assets/images/bag.svg";
        footerCall.src = "./assets/images/call.svg";
        footerLocation.src = "./assets/images/location.svg";
        footerEndP.style.color = "#666666";
    }
})
