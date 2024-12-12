let body, loginCheck, changeToLogin, regForm, loginForm, changeToReg, bannerBottom, bannerBottomContent, counter, menuToggle, authToggle, closeToggle, closeToggleAuth, menu, auth, menuContent, loginChange, loginMail, loginTel;

body = document.querySelector("body");
bannerBottom = document.querySelector(".banner-item-bottom-text");
bannerBottomContent = document.querySelector(".banner-item-bottom-text").innerHTML;
counter = 0;
menuToggle = document.querySelector(".site-header-menu-toggle");
closeToggle = document.querySelector(".site-header__close");
closeToggleAuth = document.querySelector(".site-header__close--auth");
menu = document.querySelector(".site-header-info");
menuContent = menu.querySelector(".site-header-info-content");
auth = document.querySelector(".site-header-auth");
loginChange = document.getElementById("login-change-tel");
loginMail = document.getElementById("login-email");
loginTel = document.getElementById("login-tel");
changeToReg = document.getElementById("reg");
regForm = document.querySelector(".auth-form-reg");
loginForm = document.querySelector(".login-form");
changeToLogin = document.querySelector(".auth-form-reg-change");
authToggle = document.querySelector(".site-header-action__img--login");
loginCheck = 0;

loginChange.addEventListener("click", ()=>{
    if(loginCheck == 0){
        loginMail.style.display = "none";
        loginTel.style.display = "block";
        loginCheck = 1;
        loginChange.innerHTML = "Войти по E-mail";
    }
    else{
        loginMail.style.display = "block";
        loginTel.style.display = "none";
        loginCheck = 0;
        loginChange.innerHTML = "Войти по номеру телефона";
    }
});

changeToReg.addEventListener("click", ()=>{
    regForm.style.display = "flex";
    loginForm.style.display = "none";
});

changeToLogin.addEventListener("click", ()=>{
    regForm.style.display = "none";
    loginForm.style.display = "flex";
});

document.addEventListener("DOMContentLoaded", ()=>{
    menu.style.height = window.innerHeight + "px";
    menuContent.style.maxHeight = window.innerHeight - 150 + "px";
    auth.style.height = window.innerHeight  - 150 + "px";
});

while(bannerBottom.offsetWidth < window.innerWidth){
    if(counter == 0){
        bannerBottom.innerHTML = " • " + bannerBottomContent + " • ";
        counter++;
    }
    else{
        bannerBottom.innerHTML += " • ";
    }
    bannerBottom.innerHTML += bannerBottomContent;
}
bannerBottom.innerHTML += bannerBottom.innerHTML;

menuToggle.addEventListener("click", ()=>{
    menu.classList.add("show");
    body.style.overflow = "hidden";
});

closeToggle.addEventListener("click", ()=>{
    menu.classList.remove("show");
    body.removeAttribute("style");
});

authToggle.addEventListener("click", function(e){
    e.preventDefault();
    auth.classList.add("show");
    body.style.overflow = "hidden";
});
closeToggleAuth.addEventListener("click", ()=>{
    auth.classList.remove("show");
    body.removeAttribute("style");
});