$(document).ready(function () {
    // jquery 확장
    jQuery.fn.serializeObject = function () {
        var obj = null;
        try {
            // this[0].tagName이 form tag일 경우
            if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
                var arr = this.serializeArray();
                if (arr) {
                    obj = {};
                    jQuery.each(arr, function () {
                        // obj의 key값은 arr의 name, obj의 value는 value값
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
        // 반환받은 obj를 JSON 객체로 변환
        readJSON();
        var jsonObj = JSON.stringify($("#form").serializeObject(), null, "\t");
        console.log(jsonObj);

        $.getJSON("test.json", async function(data) {
            await console.log(data);
            await data.member.push(jsonObj);
            await readJSON();
        })
    });
});

function objToJson(formData) {
    var data = formData;
    var obj = {};
    $.each(data, function (idx, ele) {
        obj[ele.name] = ele.value;
    });
    return obj;
}

function readJSON() {
    $.getJSON("test.json", function (data) {
        console.log(data);
    });
}