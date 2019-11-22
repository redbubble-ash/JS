var socket = io(); // load socket.io-client. exposes a io global, and then connect? does not specify URL, defaults to trying to connect to the host that serves the page
var userName = "";
var conversation = "";

// Login
function loginSucceed(){
    userName = $("#userName").val();
    $('#newUser').html("Log in succeed: " + userName);
}

// Chat and guess area
$("form").submit(function() {
  socket.emit("chat message", {
      userName: userName,
      msg: $("#m").val()
  });

  if($("#m").val()==="banana"){
      socket.emit("correct answer",{
          userName: userName
      })
  }
  $("#m").val("");
  return false;
});
socket.on("hello", function(msg) {
  $("#messages").append($("<li>").text(msg.userName + ": " + msg.msg));
  window.scrollTo(0, document.body.scrollHeight);
});
socket.on("correct answer", function(msg){
    $("#messages").append($("<li>").text(msg.userName + " has the correct answer!"));
    window.scrollTo(0, document.body.scrollHeight);
})


// Canvas drawing area
var canvas = document.getElementById("paint");
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

ctx.strokeStyle = canDraw? "red":"transparent";
disableDrawing();

function getColor(colour) {
    if(canDraw)ctx.strokeStyle = colour;
    else ctx.strokeStyle = 'transparent';
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
  if (document.getElementById("answer").value == "banana")
    document.getElementById("result").innerHTML = "Correct";
}


// disable buttons when it's not user's turn to draw
function disableDrawing(){
    var buttons = document.getElementsByClassName("painting");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].setAttribute('disabled','disabled');
    }
    
}
