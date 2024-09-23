var canvas = document.getElementById("matrix");
var context = canvas.getContext("2d");
var W = document.body.clientWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var fontSize = 16;
var columns = Math.floor(W / fontSize);
var drops = [];
for (var i = 0; i < columns; i++) {
    drops.push(0);
}
var str = "KUY";
function draw() {
    context.fillStyle = "rgba(25,25,25,0.08)";
    context.fillRect(0, 0, W, H);
    context.fontSize = "700 " + fontSize + "px";
    context.fillStyle = "#00cc33";
    for (var i = 0; i < columns; i++) {
        var index = Math.floor(Math.random() * str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if (y >= canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(draw, 35);

window.addEventListener("resize", function () {
    W = document.body.clientWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    columns = Math.floor(W / fontSize);
    drops = [];
    for (var i = 0; i < columns; i++) {
        drops.push(0);
    }
});
