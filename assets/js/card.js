let sizeItems, careElems, sizePropsItems, sliderPictures, puctureSrc, mainPicture, propsItems;

sizeItems = document.querySelectorAll(".card-params-size-item");
sizePropsItems = document.querySelectorAll(".content-product-size-list-item");
sliderPictures = document.querySelectorAll(".card-pic-list-item__img");
mainPicture = document.querySelector(".card-pic-main__img");
propsItems = document.querySelectorAll(".card-info-item-activator");
careElems = document.querySelectorAll(".item-care-elem-pic");

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

function fadeIn(el, timeout, display){
    if(el.style.opacity == 0){
        el.style.opacity = 0;
        el.style.display = display || 'flex';;
        el.style.transition = `opacity ${timeout}ms`;
        setTimeout(() => {
            el.style.opacity = 1;
        }, timeout);
    }
}

function fadeOut(el, timeout){
    //el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    body.style.cssText = "";
    setTimeout(() => {
      // el.style.display = 'none';
      el.removeAttribute("style");
    }, timeout); 
}

sizePropsItems.forEach((sizePropsItem)=>{
    sizePropsItem.addEventListener("click", ()=>{
        let activePropSize = document.querySelector(".content-product-size-list-item.active");
        activePropSize.classList.remove("active");
        sizePropsItem.classList.add("active");
        /* дописать ajax подгрузку параметров */
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

careElems.forEach((careElem)=>{
    if(window.innerWidth > 768){
        careElem.addEventListener("mouseover", function(e){
            let careElemInfo, activeCare;
            if(e.target.tagName == "SVG"){
                careElemInfo = e.target.parentNode.parentNode.querySelector(".item-care-elem__text");
            }
            else if(e.target.tagName == "PATH"){
                careElemInfo = e.target.parentNode.parentNode.parentNode.querySelector(".item-care-elem__text");
            }
            else{
                careElemInfo = e.target.parentNode.parentNode.querySelector(".item-care-elem__text");
            }
            /*
            activeCare = document.querySelectorAll(".item-care-elem__text.show");
            if(activeCare != null){
                for(let i = 0; i < activeCare.length; i++){
                    fadeOut(activeCare[i]);
                    activeCare[i].classList.remove("show");
                }
            }
            */
            if(careElemInfo != null && !careElemInfo.classList.contains("show")){
                careElemInfo.classList.add("show");
                fadeIn(careElemInfo, 200);
            }
        });
        
        careElem.addEventListener("mouseout", function(e){
            let careElemInfoOut = null;
            careElemInfoOut = document.querySelectorAll(".item-care-elem__text.show");
            if(careElemInfoOut != null && e.relatedTarget != null && e.relatedTarget.tagName != "svg" && e.relatedTarget.tagName != "path"){
                for(let i = 0; i < careElemInfoOut.length; i++){
                    fadeOut(careElemInfoOut[i]);
                    careElemInfoOut[i].classList.remove("show");
                    careElemInfoOut[i].removeAttribute("style");
                }
            }
        });
        
    }
    if(window.innerWidth < 768){
        careElem.addEventListener("click", function(c){
            let activeCare, careElemContent;
            careElem = null;
            careElemContent = null;
            activeCare = Array();
            if(c.target.tagName == "IMG" || c.target.tagName == "svg"){
                careElem = c.target.parentNode.parentNode;
            }
            else if(c.target.tagName == "path"){
                careElem = c.target.parentNode.parentNode.parentNode;
            }
            careElemContent = careElem.querySelector('.item-care-elem__text');
            activeCare = document.querySelector(".item-care-elem__text.show");
            if(activeCare != null){
                fadeOut(activeCare, 200);
                activeCare.classList.remove("show"); 
            }
            careElemContent.classList.add("show");
            fadeIn(careElemContent, 200);   
        });
    }
});
