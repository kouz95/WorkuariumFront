$(document).ready(function () {
    jQuery.fn.serializeObject = function () {
        var obj = null;
        try {
            if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
                var arr = this.serializeArray();
                if (arr) {
                    obj = {};
                    jQuery.each(arr, function () {
                        obj[this.name] = this.value;
                    });
                }
            }
        } catch (e) {
            alert(e.message);
        } finally { }
        return obj;
    };

    $("#btn").click(function () {
        var userName = JSON.stringify($("#form").serializeObject());
        chrome.storage.sync.set({ name: userName }, function () {
            console.log('userName is set to ' + userName);
        });
        enterChat();
    });
});

function enterChat() {
    document.location.href = "../chat/index.html";
}
