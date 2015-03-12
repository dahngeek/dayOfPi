// piDayMusic
// Made by dahngeek
// URL: dahngeek.com
// :D
var ejecutar;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var keyboard = require('node_keyboard');
var j5 = require("johnny-five");
var board = new j5.Board({port: "COM9"});

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
var led;
var cero = ["i","e","r","y"];
var ocho = ["k","l","q","w"];
var nueve = ["1","2","3","4","5","6","7","8","9"];
board.on("ready", function(){
io.on('connection', function(socket){
  led = new j5.Led.RGB({
    pins: {
      red: 11,
      green: 10,
      blue: 9
    }
  });
  led.on();

  console.log('Se conectó correctamente.');
  	socket.on('numero', function (data){
          var comando = data.command;
          switch (comando) {
            case '0':
              ejecutar = cero[Math.floor(Math.random() * cero.length)];
              var keyCode = keyboard.getKeyCode(ejecutar);
              keyboard.type(keyCode);
              led.color("#00cc00");
              led.strobe(150);
              board.wait(1000, function() {
                led.stop()
              })
              break;
            case '1':
              keyboard.type(keyboard.Key_Z);
              led.color("#FFFFFF");

              break;
            case '2':
              keyboard.type(keyboard.Key_X);
              led.color("#FF4200");              
              break;
            case '3':
              keyboard.type(keyboard.Key_C);
              led.color("#008AFF"); 
              break;
            case '4':
              keyboard.type(keyboard.Key_V);
              led.color("#FF009C"); 
              break;
            case '5':
              keyboard.type(keyboard.Key_B);
              led.color("#09E7AB"); 
              break;
            case '6':
              keyboard.type(keyboard.Key_N);
              led.color("#DFE709"); 
              break;
            case '7':
              keyboard.type(keyboard.Key_M);
              led.color("#09E7D5"); 
              break;
            case '8':
              ejecutar = ocho[Math.floor(Math.random() * ocho.length)];
              var keyCode = keyboard.getKeyCode(ejecutar);
              keyboard.type(keyCode);
              led.color("#9F00B2"); 
              led.strobe(150);
              board.wait(1000, function() {
                led.stop()
              })
              break;
            case '9':
              ejecutar = nueve[Math.floor(Math.random() * nueve.length)];
              var keyCode = keyboard.getKeyCode(ejecutar);
              keyboard.type(keyCode);
              led.color("#0800B2"); 
              led.strobe(150);
              board.wait(1000, function() {
                led.stop()
              })
              break;
            case '.':
              keyboard.type(keyboard.Key_T);
              keyboard.type(keyboard.Key_U);
              break;
            default:
              //nada
              break;
        }
  	});
   socket.on('disconnect', function(){
    console.log('usuario desconectado');
  });
});
});
http.listen(3000, function(){
  console.log('en el puerto *:3000');
});