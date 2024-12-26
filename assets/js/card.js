let sizeItems, sliderPictures, puctureSrc, mainPicture, propsItems;

sizeItems = document.querySelectorAll(".card-params-size-item");
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
        let propsContent, height;
        height = 0;
        propsContent = propsItem.parentNode.querySelector(".card-info-item-content");
        if(!propsContent.classList.contains("show")){
            for(let i = 0; i < propsContent.childElementCount; i++){
                console.log(propsContent.children[i].offsetHeight);
                height += propsContent.children[i].offsetHeight;
                height += checkIndentation(propsContent.children[i]);
                
            }
            propsContent.style.maxHeight = height + "px";
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
            openCheck = 0;
        }
    });
});