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
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
var cero = ["i","e","r","y"];
var ocho = ["k","l","q","w"];
var nueve = ["1","2","3","4","5","6","7","8","9"];
io.on('connection', function(socket){
  console.log('Se conectó correctamente.');
  	socket.on('numero', function (data){
          var comando = data.command;
          switch (comando) {
            case '0':
              ejecutar = cero[Math.floor(Math.random() * cero.length)];
              var keyCode = keyboard.getKeyCode(ejecutar);
              keyboard.type(keyCode);
              break;
            case '1':
              keyboard.type(keyboard.Key_Z);
              break;
            case '2':
              keyboard.type(keyboard.Key_X);
              break;
            case '3':
              keyboard.type(keyboard.Key_C);
              break;
            case '4':
              keyboard.type(keyboard.Key_V);
              break;
            case '5':
              keyboard.type(keyboard.Key_B);
              break;
            case '6':
              keyboard.type(keyboard.Key_N);
              break;
            case '7':
              keyboard.type(keyboard.Key_M);
              break;
            case '8':
              ejecutar = ocho[Math.floor(Math.random() * ocho.length)];
              var keyCode = keyboard.getKeyCode(ejecutar);
              keyboard.type(keyCode);
              break;
            case '9':
              ejecutar = nueve[Math.floor(Math.random() * nueve.length)];
              var keyCode = keyboard.getKeyCode(ejecutar);
              keyboard.type(keyCode);
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
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});