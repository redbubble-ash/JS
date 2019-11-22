var socket = io(); // load socket.io-client. exposes a io global, and then connect? does not specify URL, defaults to trying to connect to the host that serves the page
var userName = "";
var conversation = "";

function loginSucceed(){
    userName = $("#userName").val();
    $('#newUser').html("Log in succeed: " + userName);
}

// socket.on('send-msg', (evt)=>{
//     $('#chatLog').html(evt.userName + ": " + $("#message").val());
// })

// function sendMessage(){
//     conversation+=($("#message").val());

//     $('#chatLog').html(conversation + '<br>');

//     // socket.emit('send-msg', {
//     //     userName: userName,
//     //     msg: $("#message").val()
//     // })
// }

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


