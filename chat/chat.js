const chatContainer = document.querySelector(".js-chat"),
    h1 = chatContainer.querySelector("h1"),
    h3 = chatContainer.querySelector("h3");

chrome.storage.sync.get(['data'], function(result) {
    console.log(result);
    var obj = JSON.parse(result.data);
    h1.innerText = "Welcome! " + obj.name;
    h3.innerText = "Curr Link : " + obj.link;
  });