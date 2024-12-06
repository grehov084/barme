let bannerBottom, bannerBottomContent, counter;

bannerBottom = document.querySelector(".banner-item-bottom-text");
bannerBottomContent = document.querySelector(".banner-item-bottom-text").innerHTML;
counter = 0;

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