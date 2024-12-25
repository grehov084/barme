let sizeItems, sliderPictures, puctureSrc, mainPicture, propsItems;

sizeItems = document.querySelectorAll(".card-params-size-item");
sliderPictures = document.querySelectorAll(".card-pic-list-item__img");
mainPicture = document.querySelector(".card-pic-main__img");
propsItems = document.querySelectorAll(".card-info-item-activator");

sizeItems.forEach((sizeItem)=>{
    sizeItem.addEventListener("click", ()=>{
        let activeSize = document.querySelector(".card-params-size-item.active");
        activeSize.classList.remove("active");
        sizeItem.classList.add("active");
    });
});

sliderPictures.forEach((sliderPicture)=>{
    sliderPicture.addEventListener("click", ()=>{
        let activePicture;
        activePicture = document.querySelector(".card-pic-list-item.active");
        activePicture.classList.remove("active");
        sliderPicture.parentNode.classList.add("active");
        mainPicture.setAttribute("src", sliderPicture.getAttribute("src"));
    });
});

propsItems.forEach((propsItem)=>{
    propsItem.addEventListener("click", ()=>{
        
    });
});