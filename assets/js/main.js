let body, typeItemCurrent, typeItemArr, typeCurrentSwith, typeContent, overlay, header, loginCheck, changeToLogin, regForm, loginForm, changeToReg, bannerBottom, bannerBottomContent, counter, menuToggle, authToggle, closeToggle, closeToggleAuth, menu, auth, menuContent, loginChange, loginMail, loginTel;

body = document.querySelector("body");
header = document.querySelector(".site-header");
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
overlay = document.querySelector(".site-header-overlay");
typeItemCurrent = document.querySelector(".catalog-setting-type-current");
typeContent = document.querySelector(".catalog-setting-type-list");
typeItemArr = document.querySelectorAll(".catalog-setting-type-list__item");
typeCurrentSwith = '<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
'<path d="M1 5.99996L5.24264 10.2426L13.7279 1.75732" stroke="#F35C98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
'</svg>';

loginCheck = 0;

if(typeItemArr != null){
    typeItemArr.forEach((typeItem) => {
        
    });
}

if(typeItemCurrent != null){
    typeItemCurrent.addEventListener("click", ()=>{
        if(!typeContent.classList.contains("show")){
            typeContent.classList.add("show");
        }
        else{
            typeContent.classList.remove("show");
        }
    });
}

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
    auth.style.height = window.innerHeight - 79 + "px";
    overlay.style.height = window.innerHeight + "px";
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
    overlay.classList.add("show");
    body.style.overflow = "hidden";
    header.classList.add("site-header--height");
});

closeToggle.addEventListener("click", ()=>{
    menu.classList.remove("show");
    overlay.classList.remove("show");
    body.removeAttribute("style");
    setTimeout(() => header.classList.remove("site-header--height"), 5000);
});

authToggle.addEventListener("click", function(e){
    e.preventDefault();
    auth.classList.add("show");
    overlay.classList.add("show")
    body.style.overflow = "hidden";
    header.classList.add("site-header--height");
});
closeToggleAuth.addEventListener("click", ()=>{
    auth.classList.remove("show");
    overlay.classList.remove("show");
    body.removeAttribute("style");
    setTimeout(() => header.classList.remove("site-header--height"), 5000);

});