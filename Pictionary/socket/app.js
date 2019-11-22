var express = require("express");
var path = require("path");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var port = 8080;

app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket) {
  console.log("new connection made");
  // sending msg with object
  socket.emit("message-from-server", {
    greeting: "Hello from Server"
  });

  // event listener for msg-from-client. with function
  socket.on("message-from-client", function(msg) {
    console.log(msg);
  });
});

server.listen(port, function() {
  console.log("Listening on port " + port);
});

var canvas = document.getElementById('paint');
var ctx = canvas.getContext("2d");

var sketch = document.getElementById("sketch");
var sketch_style = getComputedStyle(sketch);
var canDraw = true; // prevent user from drawing when false
canvas.width = 500;
canvas.height = 250;

var mouse = { x: 0, y: 0 };

/* Mouse Capturing Work */
canvas.addEventListener(
  "mousemove",
  function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  },
  false
);

/* Drawing on Paint App */
ctx.lineJoin = "round";
ctx.lineCap = "round";

ctx.strokeStyle = canDraw ? "red" : "transparent";
disableDrawing();

function getColor(colour) {
  if (canDraw) ctx.strokeStyle = colour;
  else ctx.strokeStyle = "transparent";
}

function getSize(size) {
  ctx.lineWidth = size;
}
function clearCanvas() {
  ctx.clearRect(0, 0, 500, 250);
}
//ctx.strokeStyle =
//ctx.strokeStyle = document.settings.colour[1].value;

canvas.addEventListener(
  "mousedown",
  function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);

    canvas.addEventListener("mousemove", onPaint, false);
  },
  false
);

canvas.addEventListener(
  "mouseup",
  function() {
    canvas.removeEventListener("mousemove", onPaint, false);
  },
  false
);

var onPaint = function() {
  ctx.lineTo(mouse.x, mouse.y);
  ctx.stroke();
};

// check input and determine if it's the correct answer
function checkAnswer() {
  if ($("#answer").value == "banana")
    $("#result").innerHTML = "Correct";
}

// disable buttons when it's not user's turn to draw
function disableDrawing() {
  var buttons = $(".painting");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i]['disabled'] = 'disabled';
  }
}
