chrome.storage.sync.get(['name'], function(result) {
    console.log('Value currently is ' + result.name);
  });

const imageContainer = document.querySelector(".js-image"),
    imageButton = imageContainer.querySelector("button");

const windowWidth = window.screen.width,
    windowHeight = window.screen.height,
    sidebarWidth = document.documentElement.clientWidth;

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

function popupImage(){
    whale.windows.create({
        url: whale.extension.getURL("../testCanvas/index.html"),
        type: "popup",
        left: 10,
        top: 100,
        width: Math.round((windowWidth - sidebarWidth) * 0.9),
        height: Math.round(windowHeight * 0.9) 
    })
}

function clickCheck(){
    imageButton.addEventListener('click', popupImage ,false)
}

function init(){
    clickCheck();
}
init();