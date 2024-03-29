let color = '#FFF';
let strokeWidth = 4;

let socket;

let img;
// function preload() {
//     img = loadImage('./test.png');
// }
$(document).ready(function() {
  $('.pgwSlideshow').pgwSlideshow();
});
function setup() {
  const cv = createCanvas(980, 650);
  cv.position(170, 10);
  
  // cv.background(img);

  // Start the socket connection
  socket = io.connect('http://localhost:3000');
  // Getting our buttons and the inputs through the p5.js dom
  const color_picker = select('#pickcolor');
  const color_btn = select('#color-btn');
  const color_holder = select('#color-holder');
  const stroke_width_picker = select('#stroke-width-picker');
  const stroke_btn = select('#stroke-btn');

//   const erase_btn = select('#erase-btn');
//   const draw_btn = select('#draw_btn');

//   var state = 'draw';

  // Adding a mousePressed listener to the button
  color_btn.mousePressed(() => {
    // Checking if the input is a valid hex color
    if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color_picker.value())) {
      color = color_picker.value();
      color_holder.style('background-color', color);
    } else {
      console.log('Enter a valid hex value');
    }
  });

  stroke_btn.mousePressed(() => {
    const width = parseInt(stroke_width_picker.value());
    if (width > 0) strokeWidth = width;
  });

//   erase_btn.mousePressed(() => {
//     state = 'erase'
//   });
  
//   draw_btn.mousePressed(() => {
//     state = 'draw'
//   });
  
  socket.on('mouse', data => {

    // if(data.currState === 'draw'){
    stroke(data.color);
    strokeWeight(data.strokeWidth);
    line(data.x, data.y, data.px, data.py);
    // }
    // else if(data.currState === 'erase'){
    //     strokeWeight(data.strokeWidth);
    //     line(data.x, data.y, data.px, data.py);
    //     erase();
    // }

  });
}

function mouseDragged() {
  // Draw

//   if(state === 'draw'){
  stroke(color);
  strokeWeight(strokeWidth);
  line(mouseX, mouseY, pmouseX, pmouseY);
  // Send socket.io
  sendmouse(mouseX, mouseY, pmouseX, pmouseY);
//   }
//   else if(state === 'erase'){
//     strokeWeight(strokeWidth);
//     line(mouseX, mouseY, pmouseX, pmouseY);
//     erase();
//     // Send socket.io
//     sendmouse(mouseX, mouseY, pmouseX, pmouseY);
//     }

}

// Sending data to the socket
function sendmouse(x, y, pX, pY) {
  const data = {
    x: x,
    y: y,
    px: pX,
    py: pY,
    color: color,
    strokeWidth: strokeWidth,

    // currState: state,
    
  };
  socket.emit('mouse', data);
}
