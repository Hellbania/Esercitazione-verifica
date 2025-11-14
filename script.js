
// script.js - canvas drawing functions
function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  // big red rectangle
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
  // small green squares
  ctx.fillStyle = "#00FF00";
  ctx.fillRect(0, 0, 10, 10);
  ctx.fillRect(20, 20, 10, 10);
}

// second drawing: different placement/colors
function buttonFunction2() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(10, 10, 50, 50);
  ctx.fillStyle = "#FFFF00";
  ctx.fillRect(70, 70, 20, 20);
}

// draw same pattern as the small squares using nested loops
function drawWithLoops() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00FF00";
  // draw a 4x4 grid of small squares spaced by 20px
  for (var y = 0; y < 4; y++) {
    for (var x = 0; x < 4; x++) {
      ctx.fillRect(x * 20, y * 20, 10, 10);
    }
  }
}

// wire buttons after DOM load
document.addEventListener('DOMContentLoaded', function() {
  var b1 = document.getElementById('btn1');
  var b2 = document.getElementById('btn2');
  var b3 = document.getElementById('btnLoop');
  b1.addEventListener('click', function() {
    // clear first then draw base
    var c = document.getElementById('myCanvas');
    c.getContext('2d').clearRect(0,0,c.width,c.height);
    buttonFunction();
  });
  b2.addEventListener('click', buttonFunction2);
  b3.addEventListener('click', drawWithLoops);
});
