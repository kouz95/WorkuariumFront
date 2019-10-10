const imageContainer = document.querySelector(".js-image"),
    imageButton = imageContainer.querySelector("button");

function popupImage(){
    whale.windows.create({
        url: whale.extension.getURL("../canvas/index.html"), type: "popup", left: 10, top: 150, width: 1470, height: 1030 
    })
}

function clickCheck(){
    imageButton.addEventListener('click', popupImage ,false)
}

function init(){
    clickCheck();
}
init();