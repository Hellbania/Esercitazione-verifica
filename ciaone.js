document.addEventListener('DOMContentLoaded', function() {
  var title = document.getElementById('title');
  var btn = document.getElementById('mainBtn');
  var canvas = document.getElementById('canvasCiaone');
  var ctx = canvas.getContext('2d');
  // initial state
  title.textContent = 'Ciaone';
  btn.textContent = 'Inizia';

  var state = 0; // 0 = initial, 1 = prontone (Disegna), 2 = Disegnone (Ricomincia)

  btn.addEventListener('click', function() {
    if (state === 0) {
      title.textContent = 'Prontone';
      btn.textContent = 'Disegna';
      state = 1;
    } else if (state === 1) {
      title.textContent = 'Disegnone';
      btn.textContent = 'Ricomincia';
      // draw something in canvas
      drawConcentricSquares(ctx);
      state = 2;
    } else {
      // reset
      title.textContent = 'Ciaone';
      btn.textContent = 'Inizia';
      ctx.clearRect(0,0,canvas.width,canvas.height);
      state = 0;
    }
  });

  function drawConcentricSquares(ctx) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    var colors = ['#FF595E','#FFCA3A','#8ACB88','#6A4C93','#1982C4'];
    var x = 150, y = 100;
    for (var i=0; i<5; i++) {
      ctx.fillStyle = colors[i%colors.length];
      var s = 120 - i*20;
      ctx.fillRect(x - s/2, y - s/2, s, s);
    }
  }
});
