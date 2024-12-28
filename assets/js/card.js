let sizeItems, sizePropsItems, sliderPictures, puctureSrc, mainPicture, propsItems;

sizeItems = document.querySelectorAll(".card-params-size-item");
sizePropsItems = document.querySelectorAll(".content-product-size-list-item");
sliderPictures = document.querySelectorAll(".card-pic-list-item__img");
mainPicture = document.querySelector(".card-pic-main__img");
propsItems = document.querySelectorAll(".card-info-item-activator");


function checkIndentation(currentElemContent){
    let parentElem = currentElemContent.parentNode, indentation = 0;
    if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-left")) != 0){
       indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-left"));
    }
    if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-right")) != 0){
       indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-right"));
    }
    if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-top")) != 0){
       indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-top"));
    }
    if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-bottom")) != 0){
       indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("padding-bottom"));
    } 
    if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-left")) != 0){
       indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-left"));
    }
    if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-right")) != 0){
       indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-right"));
    }
    if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-top")) != 0){
       indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-top"));
    }
    if(parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-bottom")) != 0){
       indentation += parseInt(window.getComputedStyle(parentElem).getPropertyValue("margin-bottom"));
    } 
    if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-left")) != 0){
       indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-left"));
    }
    if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-right")) != 0){
       indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-right"));
    }
    if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-top")) != 0){
       indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-top"));
    }
    if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-bottom")) != 0){
       indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("padding-bottom"));
    } 
    if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-left")) != 0){
       indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-left"));
    }
    if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-right")) != 0){
       indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-right"));
    }
    if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-top")) != 0){
       indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-top"));
    }
    if(parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-bottom")) != 0){
       indentation += parseInt(window.getComputedStyle(currentElemContent).getPropertyValue("margin-bottom"));
    } 
    return indentation;
}

sizePropsItems.forEach((sizePropsItem)=>{
    sizePropsItem.addEventListener("click", ()=>{
        let activePropSize = document.querySelector(".content-product-size-list-item.active");
        activePropSize.classList.remove("active");
        sizePropsItem.classList.add("active");
        /* дописать ajax подкрузку параметров */
    });
});

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
        let propsContent, height, propsToggle;
        height = 0;
        propsContent = propsItem.parentNode.querySelector(".card-info-item-content");
        propsToggle = propsItem.parentNode.querySelector(".card-info-item-toogle");
        if(!propsContent.classList.contains("show")){
            for(let i = 0; i < propsContent.childElementCount; i++){
                height += propsContent.children[i].offsetHeight;
                height += checkIndentation(propsContent.children[i]);
            }
            propsContent.style.maxHeight = height + "px";
            propsToggle.classList.add("active");
            setTimeout(
                ()=>{
                    propsContent.classList.add("show");
                }, 100
            );
            openCheck = 1;
        }
        else{
            propsContent.style.maxHeight = 0;
            propsContent.classList.remove("show");
            propsToggle.classList.remove("active");
            openCheck = 0;
        }
    });
});
$(document).ready(function(){
    $("#slider").owlCarousel({
        items: 1,
        loop: true,
        pagination : true,
    });
});

Fancybox.bind(".card-pic-main__img", {
     mainClass: "standart_modal", 
     Image: { 
        zoom: false, 
        click: "close", 
        wheel: "slide" 
    } 
});
