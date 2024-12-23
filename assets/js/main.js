let body, windowWidth, sections, typeItemCurrent, typeItemOverlay, typeItemArr, typeContent, overlay, header, loginCheck, changeToLogin, regForm, loginForm, changeToReg, bannerBottom, bannerBottomContent, counter, menuToggle, authToggle, closeToggle, closeToggleAuth, menu, auth, menuContent, loginChange, loginMail, loginTel;

body = document.querySelector("body");
header = document.querySelector(".site-header");
bannerBottom = document.querySelector(".banner-item-bottom-text");
bannerBottomContent = document.querySelector(".banner-item-bottom-text");
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
typeItemOverlay = document.querySelector(".catalog-settings-type-overlay");
sections = document.querySelectorAll(".catalog-settings-item");

const typeCurrentSwith = '<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">' +
'<path d="M1 5.99996L5.24264 10.2426L13.7279 1.75732" stroke="#F35C98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
'</svg>';
const bodyBGactive = "rgba(0, 0, 0, 0.5)";

loginCheck = 0;

function removeFilterOverlay(){
    typeItemOverlay.classList.remove("show");
    typeContent.classList.remove("show");
    body.removeAttribute("style");
}

if(typeItemArr != null){
    typeItemArr.forEach((typeItem) => {
        typeItem.addEventListener("click", function(e){
            let activeElem, activeElemText, activeElemToggle, currentElemToggle, currentElem, selectedElemText;
            activeElem = document.querySelector(".type-list-item.active");
            activeElemText = activeElem.querySelector(".catalog-setting-type-current-text");
            activeElemToggle = activeElem.querySelector(".type-list-item__toggle");
            selectedElemText = document.querySelector(".catalog-setting-type-current-text");
            currentElem = e.target;
            if(currentElem.classList.contains("type-list-item-text") || currentElem.classList.contains("type-list-item__toggle")){
                currentElem = currentElem.parentNode.parentNode;
            }
            else if(currentElem.classList.contains("type-list-item-wrap")){
                currentElem = currentElem.parentNode;
            }
            else if(currentElem.tagName == "svg"){
                currentElem = currentElem.parentNode.parentNode.parentNode;
            }
            else if(currentElem.tagName == "path"){
                currentElem = currentElem.parentNode.parentNode.parentNode.parentNode;
            }
            if(activeElem.id != currentElem.id){
                activeElem.classList.remove("active");
                currentElem.classList.add("active");
                currentElemToggle = currentElem.querySelector(".type-list-item__toggle");
                selectedElemText.innerHTML = currentElem.querySelector(".type-list-item-text").innerHTML;
                activeElemToggle.innerHTML = "";
                currentElemToggle.innerHTML = typeCurrentSwith;
                typeContent.classList.remove("show");
                if(windowWidth < 451){
                    removeFilterOverlay();
                }
                //тут дописать ajax фильтр
            }
        });
    });
}

if(typeItemCurrent != null){
    typeItemCurrent.addEventListener("click", ()=>{
        if(!typeContent.classList.contains("show")){
            typeContent.classList.add("show");
            if(windowWidth < 451){
                typeItemOverlay.style.height = window.innerHeight + "px";
                typeItemOverlay.classList.add("show");
                body.style.overflow = "hidden";
            }
        }
        else{
            typeContent.classList.remove("show");
        }
    });
}

if(typeItemOverlay != null){
    typeItemOverlay.addEventListener("click", ()=>{
        removeFilterOverlay();
    });
}

if(sections != null){
    sections.forEach((section)=>{
        section.addEventListener("click", function(s){
            let currentSection;
            if(!section.classList.contains("active")){
                currentSection = document.querySelector(".catalog-settings-item.active");
                currentSection.classList.remove("active");
                section.classList.add("active");
                // тут дописать ajax фильтр
            }
        });
    });
}

if(bannerBottomContent != null){
    bannerBottomContent = bannerBottomContent.innerHTML;
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
window.addEventListener("load", ()=>{
    windowWidth = window.innerWidth;
});
window.addEventListener("resize", ()=>{
    windowWidth = window.innerWidth;
});

if(bannerBottom != null){
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
}

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

/* CARD */

