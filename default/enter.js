const enterContainer = document.querySelector(".js-enter"),
    enterButton = enterContainer.querySelector("button");

function enterChat(){
    document.location.href="../chat/index.html";
}

function enterCheck(){
    enterButton.addEventListener('click', enterChat ,false)
}

function init(){
    enterCheck();
}
init();