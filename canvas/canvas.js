const canvasContainer = document.querySelector(".js-canvas");
var canvas = canvasContainer.querySelector("canvas"),
ctx = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 970;
// canvas.id = "canvas";

// var background = new Image();
// background.src = "test.png";

// background.onload = function(){
//     ctx.drawImage(background,0,0);
// }



function initCanvas(){

    function getPosition(event){
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;
        return {X: x, Y: y};
    }
    
    function finishDraw(){
        pos.drawable = false;
        pos.X = -1;
        pos.Y = -1;
    }
    
    function draw(event){
        var coors = getPosition(event);
        ctx.lineTo(coors.X, coors.Y);
        pos.X = coors.X;
        pos.Y = coors.Y;
        ctx.stroke();
    }
    
    function initDraw(event){
        ctx.beginPath();
        pos.drawable = true;
        var coors = getPosition(event);
        pos.X = coors.X;
        pos.Y = coors.Y;
        ctx.moveTo(pos.X, pos.Y);
    }
    
    function listener(event){
        switch(event.type){
            case "mousedown":
                initDraw(event);
                break;
     
            case "mousemove":
                if(pos.drawable)
                    draw(event);
                break;
     
            case "mouseout":
            case "mouseup":
                finishDraw();
                break;
        }
    }
    
    var pos = {
        drawable: false,
        x: -1,
        y: -1
    };

    window.onload = function(){
        canvas.addEventListener("mousedown", listener);
        canvas.addEventListener("mousemove", listener);
        canvas.addEventListener("mouseup", listener);
        canvas.addEventListener("mouseout", listener);
    }

}

function init(){
    initCanvas();
}
init();