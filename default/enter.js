

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
        var userData = JSON.stringify($("#form").serializeObject());
        chrome.storage.sync.set({ data: userData }, function () {
            console.log('Data is set to ' + userData);
        });
        enterChat();
    });
});

function enterChat() {
    document.location.href = "../chat/index.html";
}
