let bannerBottom, bannerBottomContent, counter, menuToggle, closeToggle, menu;

bannerBottom = document.querySelector(".banner-item-bottom-text");
bannerBottomContent = document.querySelector(".banner-item-bottom-text").innerHTML;
counter = 0;
menuToggle = document.querySelector(".site-header-menu-toggle");
closeToggle = document.querySelector(".site-header__close");
menu = document.querySelector(".site-header-info");

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
});
closeToggle.addEventListener("click", ()=>{
    menu.classList.remove("show");
});