var btn = document.getElementById("btn");
var myWin = window.open("flyingwin.html", "", "width=200,height=200");
var interval = null;
var x = 0;
var y = 0;
var s = 10;
interval = setInterval(function () {
  myWin.moveBy(x, y);
  console.log(`x = ${x} y = ${y}`);
  x += s;
  y += s;
  if (x == 100 && y == 100) {
    x = -100;
    y = -100;
    // s = -10;
  }
  if (x == -50 && y == -50) {
    x = 10;
    y = 10;
  }
}, 500);
btn.addEventListener("click", function () {
  clearInterval(interval);
  myWin.focus();
});
