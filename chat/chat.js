const chatContainer = document.querySelector(".js-chat"),
    h1 = chatContainer.querySelector("h1");

chrome.storage.sync.get(['name'], function(result) {
    console.log(result);
    var obj = JSON.parse(result.name);
    h1.innerText = "Welcome! " + obj.name;
  });